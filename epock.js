//let date=new Date(0)
//console.log(date.toLocaleString());let date

//let date=new Date();
//console.log(date.getTime());

/*
let nowDate=new Date('2025-07-32')


let userDate= new Date('2025-08-12')

let diff=userDate-nowDate;
let numOfDays=(Math.floor(diff/1000/60/60/24))

if(numOfDays > 30){
    console.log("date end")

}else{
    console.log("congratulations")
}*/

 function takeDifference (start,end){

    let startDate=new Date (start);
    let endDate=new Date (end);
    let diff=(endDate-startDate)/1000
    let years=Math.floor(diff/(60/60/24/365));
     diff=diff%(60*60*24*365);
let months=Math.floor(diff/(60*60*24*30));
diff =diff%(60*60*24*30);
let days=Math.floor(diff/(60*60*24));
diff =diff%(60*60*24);
let hours=Math.floor(diff/(60*60));
diff =diff%(60*60);
let minutes=Math.floor(diff/(60));
let seconds=diff%(60);


    return ` ${years} years ${months}months ${days}days ${hours}hours 
    ${minutes}minutes ${seconds}seconds `
 }
 let startingdate='2024-04-28T08:23:13Z'
let endingDate='2025-07-23T09:24:12Z'
let difference=takeDifference(startingdate,endingDate)
console.log(difference);
