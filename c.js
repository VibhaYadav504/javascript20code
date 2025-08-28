//sufal
let arr=[1,2,3,4,5];
for(let ind in arr){
    let randomIndex=Math.floor(Math.random()*arr.length);
   // let temp=arr[ind];
    //arr[ind]=arr[randomIndex];
    //arr[randomIndex]=temp;

    [arr[randomIndex],arr[ind]]=[arr[ind],arr[randomIndex]]
}
console.log(arr);
