import * as React from "react";
import Filters from "./components/Filters";
import Table from "./components/Table";
import {
  useSearchParams
} from 'react-router-dom'
import useApplications, { ApplicationResponse } from "./useApplications";
import Pagination from "./components/Pagination";



const App: React.FunctionComponent = () => {
  const { data, isLoading } = useApplications();

  const [searchParam, setSetSearchParam] = useSearchParams()
  

  const positionApplied = searchParam.get('position_applied')

  const [tableData, setTableData] = React.useState<ApplicationResponse[]>(data || []);

  React.useEffect(()=> {
    if(data && !positionApplied) setTableData(data)
  }, [data])

  

  
  // get the data based on applied filter --> data fikltersz with search value startws with 

  React.useEffect(()=> {
    if(positionApplied && data) {
      const filteredData = data.filter(d => d.position_applied.toLowerCase() === positionApplied.toLowerCase())
      setTableData(filteredData)
    }
  }
  , [positionApplied])




 


  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  const handleFilterChange = (value: string) => {
    console.log("value", value)

    // setSetSearchParam({ position_applied: value })

   
    const filteredData = data.filter(d => d.position_applied.toLowerCase() === value.toLowerCase())

    console.log("filteredData", filteredData)

    setTableData(filteredData)
  }

  // search --> get the data based on applied filter --> data fikltersz with search value startws with

  return (
    <div className="App">
      <Filters data={data} handleFilterChange={handleFilterChange}/>
      <Table data={tableData} />
      <Pagination />
    </div>
  );
};

export default App;
