ar = [1,16,13,10];

function click(){
ar.forEach(function(ar){

    let s = document.createElement("p");
    s.innerText=ar;
    document.body.appendChild(s);

  })
}