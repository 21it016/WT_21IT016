console.log("connected...")

function getorg(arr1){
    
        console.log("getorg")
document.getElementById("ulid").innerHTML=null;
for(i in arr1){
    
            const ele12 = document.createElement("li")
            ele12.textContent = arr1[i];

        
                
            document.getElementById("ulid").appendChild(ele12);
}
}


function getsort(arr1)
{
    console.log("getsort")
    arr1.sort();
   document.getElementById("ulid").innerHTML=null;
    for(let i in arr1){

        const ele12 = document.createElement("li")
        ele12.textContent = arr1[i];
  
            
        document.getElementById("ulid").innerHTML(ele12);
    }
   
}

let arr=[];
let org=[];
function getfun(){
    console.log("function called");
    
    //const ele = document.getElementById("getid");
   
    let b=document.getElementById("getid");

    arr.push(b.value);
    org.push(b.value);

    const hello = document.getElementById("selid");

    if(hello.value=="sort")
    {
        getsort(arr);
    }
    else
    {
       
        getorg(org);
    }

    

}

function change(){

    console.log("just a function");
    const hello=document.getElementById("selid");
    if(hello.value=="sort")
    {
        getsort(arr);
    }
    else getorg(org);

}
