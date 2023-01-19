a=document.getElementById("HELOO");
const bike={
    compony:"Royal enfield",
    price:"1laC",
    color:"black",
    type:"bike",

}
const phone={
    compony:"Apple",
    model:"iphone14",
    price:"1.5LAC",
    color:"Gray",
    type:"PHONE",
}

const car={
    compony:"Mercedece",
    price:"2.5CR",

}
idcome=""
function MYFUN(idcame){
    console.log("HELLO")
    switch(idcame)
    {
        case "CAR":
          for(i in car){
           tr = document.createElement("tr");
           const trkey =document.createElement("td");
           const rvalue = document.createElement("td");
            trkey.textContent = i;
            rvalue.textContent= car[i];
           
            tr.appendChild(trkey);
            tr.appendChild(rvalue);

            document.getElementById("id1").appendChild(tr);
            
          }  
          break;
        case "phone":
            for(i in phone){
              
                tr = document.createElement("tr");
                const trkey =document.createElement("td");
                const rvalue = document.createElement("td");
                 trkey.textContent = i;
                 rvalue.textContent= phone[i];
                 tr.appendChild(trkey);
                 tr.appendChild(rvalue);
                 //document.getElementById("id1").innerHTML=null;

                 document.getElementById("id1").appendChild(tr);
                 
               }  
            console.log(phone);
            break;
        case "BIKE":
            for(i in bike){
                tr = document.createElement("tr");
                const trkey =document.createElement("td");
                const rvalue = document.createElement("td");
                 trkey.textContent = i;
                 rvalue.textContent= bike[i];
                 tr.appendChild(trkey);
                 tr.appendChild(rvalue);
                
                 document.getElementById("id1").appendChild(tr);
                
               }  
            break;
    }
}