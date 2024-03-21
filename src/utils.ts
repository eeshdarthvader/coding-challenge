export const calculateAge = (birthDate: string) => {

 

  // convert the birthdate into timestamp
  // convert today's date as timestamp


  const birthUTC = new Date(birthDate).getTime();
  const todayUTC = new Date().getTime();

   

  

  const diff = Math.floor((todayUTC - birthUTC)/365.25/24/60/60/1000) 




  // ms --> years
  // 1 year --> 365days
  // 1 day - 24 hrs
  // 1 hr --> 60 m
  // 1 min --> 60s
  // 1 s -- 1000ms




  // 03/05/1973
  // 03/04/2024



  return diff;
};
