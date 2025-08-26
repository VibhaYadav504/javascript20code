/*let arr1=[1,2,3];
let arr2=[5,4,8];


let combinationArr=arr1.concat(arr2)
console.log(combinationArr)
*/
//let arr1=[2,7,5];
//let arr2=[9,4,1];
//let arr3=[3,8,6]
//let combinationArr=[...arr1,...arr2,...arr3]

//console.log[combinationArr]
//let randomNumber=Math.floor(Math.random()*19);
//console.log(randomNumber);

//let arr=[1,3,4,'b','r','f'];
//let resultArr=arr.filter((element)=>{
   //if(typeof element==='String'){
    //return true;
   //}else{
   //return false;
   //}
//})
//console.log(resultArr);
//return typeof element ===
//'string';
//})
//console.log(resultArr);
//let arr=[3,7,34,98,56];
//console.log(Math.max(...arr))
/*let obj={
    name:'vibha',
    age:20,

}
console.log(Object.keys(obj).length)*/
/*let arr=[
    {
        name:"muskan",
        gender:"female",
    },
    {
    name:"harshit",
    gender:"male"
    }
]
let resultArr=arr.filter(obj=>{
    console.log(obj.gender==="male")
})*/
/*let arr=['alu','goli','halwa'];
let resultArr=arr.map(elem=>{
    return (elem.toUpperCase())
})
console.log(resultArr)*/
/*let obj={

}
let keysArr=Object.keys(obj);
console.log(keysArr.length)*/
/*let str='vibha yadav';
function getOccurence(string){
    let obj={};
    string.split('').forEach(letter=>{
        if(obj.hasOwnProperty(letter)){
            obj[letter]++
        }else{
            obj [letter]=1;
        }
    });
    console.log(obj)
}
getOccurence(str)
let arr=[1,2,3,5,'h','f','d']
function checkNumberArray(){
console.log(arr)
}

checkNumberArray (arr);*/
//function isPrime (num){
  //  for(let i=2; i<=Math.sqrt(num);i++){
    //    if(num%i===0)return false;
    //}
    //return true;
//}
//console.log(isPrime(47))
//function removeDuplication(arr){
  //  let set=new Set(arr);
    //console.log(set)
//}
//removeDuplication([1,2,3,5,6,5,4,8,2])


/*function removeDuplicate(arr){
    let set =new Set(arr);
    return[...set]

}
let resultArr=removeDuplicate([1,2,2,5,4,1])
console.log(resultArr)*/
/*console.log(parseInt("123.234px"))
console.log(Number("123.234px"))
console.log(parseInt("110",16))*/
//let sum=(0.1+0.2).toFixed(4);
//console.log(typeof sum)
//let string="manas";
//let arr=['m','a','n','a','s']
//console.log(string.slice(3))
//console.log(first)
//let test=arr.splice(1,2,'a','k');
//console.log(test);
//console.log(arr);
  //  let sentence=" mai hun vibha"
//let finalResult=sentence.split('').map(word=>
//{
  //  let reverseWord=word.split('').reverse().join('')
    //    console.log(reverseWord)

//}
//)
//console.log(finalResult)
/*let arr=[1,'55',3,'manas',7,1];
let sum=0;
arr.forEach(item=>{
    if(typeof item==='number'){
        sum+=item;
    }
})
let num=123
console.log(Number.isInteger(num));
function reverseNumber(num){
    console.log(num.toString().split('').reverse().join(''))
}
reverseNumber(12345)

let string="manas Kumar Lal"
function sortInAlphabetcalOrder(string){
    console.log(string.split('').sort())
}
sortInAlphabetcalOrder(string)
let sentence ="hey i am manas kumar lal";
const capitalizeFirstLetter=(String)=>{
    let resultArr=
    String.split('').map(word=>{
        return word.charAt(0).toUpperCase()+
        word.slice(1)
    })
        return resultArr.join('')
    
}
let result=capitalizeFirstLetter(sentence)
function getArrayElement(arr,n){
    if(n> arr.length){
        console.log("ha")
    }
    return arr[0]
}
getArrayElement([2,5,9,1],5)
function getArrayElement(arr,n){
    if(!n){
        return arr[0]
    }else if(n>arr.length){
        console.log("itna element to array me present hi nahi hai")
    }else{
        return arr.alice(0,n)
    }
}
let result =getArrayElement([2,5,9,1],5)
console.log(result)*/