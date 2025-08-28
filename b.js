let str=[1,4,3,9,9,9,9,9,4,5,2,4,2,5,2];
function getOccurence(arr){
    let freqObj={};
    arr.forEach(letter=>{
        if(freqObj.hasOwnProperty(letter)){
            freqObj[letter]++
        }else{
            freqObj[letter]=1;
        }
    });
    let maxFreq=Math.max(...Object.values(freqObj))
     
    let keyValueArr=Object.entries(freqObj)
    let filteredArray=keyValueArr.filterArray(entryArr=>{
        return entryArr[1]===maxFreq
    })
    console.log(filteredArray)
}
getOccurence(str)
