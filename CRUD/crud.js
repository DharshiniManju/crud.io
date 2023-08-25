var selectedRow=null
 function onFormSubmit(){
    if(validate()){
        var formData=readFormData();
        if(selectedRow==null)
        insertNewRecord(formData);
    else
    updateRecord(formData);
resetForm
    }
 }
 function readFormData(){
    var formData={};
    formData["userName"]=document.getElementById("userName").value;
    formData["position"]=document.getElementById("position").value;
    formData["phone"]=document.getElementById("phone").value;
    formData["email"]=document.getElementById("email").value;
    formData["password"]=document.getElementById("password").value;
    formData["cpassword"]=document.getElementById("cpassword").value;
    return formData;
 }

 function insertNewRecord(data){
    var table=document.getElementById('studentList').getElementsByTagName('tbody')[0];
   var newRow=table.insertRow(table.length);
   cell1=newRow.insertCell(0);
   cell1.innerHTML=data.userName;
   cell2=newRow.insertCell(1);
   cell2.innerHTML=data.position;
   cell3=newRow.insertCell(2);
   cell3.innerHTML=data.phone;
   cell4=newRow.insertCell(3);
   cell4.innerHTML=data.email;
   cell5=newRow.insertCell(4);
   cell5.innerHTML=data.password;
   cell6=newRow.insertCell(5);
   cell6.innerHTML=data.cpassword;
//   cell6.innerHTML=`<a onClick="onEdit(this)">Edit</a>
  // <a onClick="onDelete(this)">Delete</a>`

 }
 function resetForm(){
    document.getElementById("userName").value="";
    document.getElementById("position").value="";
    document.getElementById("phone").value="";
    document.getElementById("email").value="";
    document.getElementById("password").value="";
    document.getElementById("cpassword").value="";
    selectedRow=null;

 }/*
function onEdit(td){
    selectedRow=td.parentElement.parentElement;
    document.getElementById("username").value=selectedRow.cells[0].innerHTML;
    document.getElementById("position").value=selectedRow.cells[1].innerHTML;
    document.getElementById("phone").value=selectedRow.cells[2].innerHTML;
    document.getElementById("email").value=selectedRow.cells[3].innerHTML;
    document.getElementById("password").value=selectedRow.cells[4].innerHTML;
    document.getElementById("cpassword").value=selectedRow.cells[5].innerHTML;
}

function onDelete(td){
   if(confirm('Are you sure to delete this record ?')){
      row=td.parentElement.parentElement;
      document.getElementById("studentList").deleteRow(row.rowIndex);
      resetForm();
   }
}*/
function validate(){
   isValid=true;
   if(document.getElementById("userName").value==""){
      isValid=false;
      document.getElementById("userNameValidationError").classList.remove("hide");

   }else{
      isValid=true;
      if(!document.getElementById("userNameValidationError").classList.contains("hide"))
      document.getElementById("userNameValidationError").classList.add("hide");
   }
   return isValid;
}















