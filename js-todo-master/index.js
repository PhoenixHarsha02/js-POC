let name1=document.getElementById("name");
let email1=document.getElementById("email");
let addupbutton=document.getElementById("cu-action");
let tbody1=document.getElementById("todo-body");
addupbutton.addEventListener('click',display);
ab=[];
let id=1;
currentElement=null;
function display()
{
    if(currentElement){
        ab=ab.map(edit1=>{
            if(edit1.id=== currentElement){
            edit1.name1=name1.value;
            edit1.email1=email1.value;
    }
        return edit1;
    });
    updatev(null,'Add');
    } 
    else
    {
        ab.push({
    id:id++,
    name1:name1.value,
    email1:email1.value,    
    });
    }
    val();
}   
function val(){
    rows="";
    ab.forEach(a => {
        let tr=`<tr>
        <td>${a.id}</td>
        <td>${a.name1}</td>
        <td>${a.email1}</td>
        <td><button onclick="edit_value(${a.id})">Edit</button>
        <button onclick="delete_value(${a.id})">Delete</button></td>
        </tr>`;
        rows+=tr; 
    });  
    document.getElementById("todo-body").innerHTML=rows;
    reset();
}
function reset(){
    name1.value="";
    email1.value=""; 
}
function delete_value(id)
{
    ab=ab.filter(ab=>ab.id!=id);
    val();
}
function updatev(id,text){
    currentElement=id;
    addupbutton.innerHTML=text;
}
function edit_value(id){
    let edit1=ab.find(t=>t.id==id)
    if(edit1){
        name1.value=edit1.name1;
        email1.value=edit1.email1;
        updatev(id,"Update");
}
}
 
  



