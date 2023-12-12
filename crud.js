var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["productCode"] = document.getElementById("productCode").value;
    formData["productname"] = document.getElementById("productname").value;
    formData["PQT"] = document.getElementById("PQT").value;
    formData["productprice"] = document.getElementById("productprice").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("tableid").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.productCode;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.productname;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.PQT;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.productprice;
    cell4 = newRow.insertCell(4);
        cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("productCode").value = selectedRow.cells[0].innerHTML;
    document.getElementById("productname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("PQT").value = selectedRow.cells[2].innerHTML;
    document.getElementById("productprice").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.productCode;
    selectedRow.cells[1].innerHTML = formData.productname;
    selectedRow.cells[2].innerHTML = formData.PQT;
    selectedRow.cells[3].innerHTML = formData.productprice;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('tableid').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("productCode").value = '';
    document.getElementById("productname").value = '';
    document.getElementById("PQT").value = '';
    document.getElementById("productprice").value = '';
    selectedRow = null;
}
