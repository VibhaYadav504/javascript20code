let str="Manas";
function getOccurence(string){
    let obj={};
    string.split('').forEach(letter =>
    {
        if(obj.hasOwnProperty(letter)){
            obj[letter]++;

        }else{
            obj[letter]=1;

        }
    }
    );
    
    console.log(obj)
    
}
getOccurence(str)
