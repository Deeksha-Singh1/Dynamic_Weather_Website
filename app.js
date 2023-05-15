const currDate = document.getElementById("date");
let currentTime = new Date();
let weatherCondition = document.getElementById('weathercon');
const tempStatus="clouds";

const getCurrentDay=()=>{
  const weekday = ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];
  let day = weekday[currentTime.getDay()]; 
  console.log(day);
  return day;
};

const getCurrTime = ()=>{
  const getMonthNames = ["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"];
  var month= getMonthNames[currentTime.getMonth()];
  var date= currentTime.getDate();

  let hour =currentTime.getHours();
  let min=currentTime.getMinutes();

  let period="AM";
  if(hour > 11){
    period="PM";
  }
  if(min <10){
    min ="0"+min;
    }

  return `${month}  ${date} | ${hour}:${min} ${period}`
};
currDate.innerHTML =getCurrentDay()+" | "+ getCurrTime();
