let input = document.getElementById("input");
let btnAdd = document.getElementById("btnAdd");
let list = document.getElementById("list");
let num =1;

// 001 create function  for text that has or not in id:input
function hasText(){
    let value = input.value;
    if(value && value.length >=2){
        createListItem(value);
        input.value = "";
    }else{
        alert("Please write more than 2 characters");   
    }
};

//create function for creating a list-item that has been described
function createListItem(value){
    let li = document.createElement("li");
    let val = document.createTextNode(value);
    let div = document.createElement("div");
    let p = document.createElement("p");

    p.appendChild(val);
    p.id = `text${num}`;

    let btnEdit = document.createElement("button");
    btnEdit.classList = "fas fa-edit btn btn-outline-primary me-2 ";
    btnEdit.id = `btnEdit${num}`;
    btnEdit.setAttribute("onclick",`edit(${num})`);

    let btnDel = document.createElement("button");
    btnDel.classList = "fas fa-heart-broken btn btn-outline-primary";
    btnDel.id = `btnDel${num}`;
    btnDel.setAttribute("onclick",`del(${num})`);

    div.appendChild(btnEdit);
    div.appendChild(btnDel);

    li.classList = `list-text bg-light shadow-lg animate__animated animate__fadeInLeft`;
    li.id = `listText${num}`;
    li.appendChild(p);
    li.appendChild(div);
    list.appendChild(li);
    num++;
}

// create function  for btn add
$(btnAdd).click(function (){
    hasText();
})

//create function for li when clicking enter in input
$(input).keydown(function (e){
    let key = e.keyCode;
    if(key == 13){
        hasText();
    }
});

// for edit button 
function edit(value){
    console.log(`you click ${value}`);
    let newText = prompt("Enter the text that you want to change...");
    if(newText && newText.length >= 2){
        document.getElementById(`text${value}`).innerText = newText;
    }else{
        alert("Please write more than 2 characters");
    }
}

// for delete button
function del(value){
    if(confirm("Do you really want to delete?")){
        document.getElementById(`listText${value}`).remove();
    }else{
        alert("remove cancelled...");
    };
}