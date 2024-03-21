import * as React from "react";
import { Select } from "@highlight-ui/select";
import { Input } from "@highlight-ui/input";
import {
  useSearchParams
} from 'react-router-dom'
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { ApplicationResponse } from "../useApplications";

type FilterProps = {
  data: ApplicationResponse[];
  handleFilterChange: (value: string) => void
}

const Filters: React.FunctionComponent<FilterProps> = ({ data, handleFilterChange}) => {

  const [searchParam, setSetSearchParam] = useSearchParams()

  const positionApplied = searchParam.get('position_applied')
  

  React.useEffect(()=> {
    if(positionApplied && data) {
      setSetSearchParam({ position_applied: positionApplied })
      handleFilterChange(positionApplied)
    }
  }
  , [positionApplied, data])




  const onPositionFilterChange = (position: string) => {
    console.log("position:", position);
    handleFilterChange(position)
  };
  const onSearchChange = (search: string) => {
    console.log("search:", search);
  };

  return (
    <div className="flex items-center justify-between m-8">
      <div className="flex gap-5">
        <Select
          selectedOptions={[{label: positionApplied || '', value: positionApplied || ''}]}
          enableFlowTriggers
          closeOnSelect
          options={[...new Set(data.map(d => d.position_applied))].map(i => ({label: i, value: i})) }
          onSelect={([{ value }]) => onPositionFilterChange(String(value))}
          triggerLabel="Position Applied"
          variant="inline"
        />
      </div>
      <Input
        placeholder="Search by name"
        prefix={<MagnifyingGlassIcon className="h-4 w-4" />}
        onChange={({ target: { value } }) => onSearchChange(value)}
      />
    </div>
  );
};

export default Filters;
