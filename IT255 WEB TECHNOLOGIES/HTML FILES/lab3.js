console.log("Connected...")

function addItem()
{
    const ele = document.getElementById("iditem");

    const e1 = document.createElement("li")
    e1.textContent = ele.value;

    document.getElementById("iditemlist").appendChild(e1);

}

function sorted()
{
    const array = [""];
    array.push(document.getElementById("iditemlist").value);
    array.sort();

}
