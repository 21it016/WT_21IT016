class person{
    constructor (Name,ID) {
        this.Name=Name;
        this.ID=ID;
    }
    
};

class student extends person{
    constructor(Name,ID,Age,sem) {
        super(Name,ID);
        this.Age=Age;
        this.Sem=sem;
    }
};



function details(){
    
    let Name=document.getElementById("nameid");
    let ID=document.getElementById("noid");
    let Age=document.getElementById("aid");
    let Sem=document.getElementById("sid");

    const obj = new student(Name.value , ID.value , Age.value , Sem.value)

    for(i in obj){

        tr = document.createElement("tr");
        const trkey =document.createElement("td");
        const rvalue = document.createElement("td");
         trkey.textContent = i;
         rvalue.textContent= obj[i];
         tr.appendChild(trkey);
         tr.appendChild(rvalue);
        
         document.getElementById("tid").appendChild(tr);
       }     
}
