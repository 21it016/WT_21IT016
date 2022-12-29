let sign = prompt("Enter Operation You Want")

let no1=parseInt(prompt("Enter First Number : "))
let no2=parseInt(prompt("Enter Second Number : "))
let ans=0

if(sign=="+")
{
    ans = no1+no2
    console.log("The Addition  : "+ (ans))
}
if(sign=="-")
{
    ans = no1-no2
    console.log("The Substraction : "+ (ans))
}
if(sign=="*")
{
    ans = no1*no2
    console.log("The Multiplication : "+ (ans))
}
if(sign=="/")
{
    ans = no1/no2
    console.log("The Division : "+ (ans))
}

function print()
{
document.getElementById("Display").innerHTML=ans;
}
