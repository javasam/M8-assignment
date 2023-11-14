// CREATE AN ARRAY OF EMPLOYEES
let employees = []
let employeeId;
let fullName;
let extension;
let email;
let department;
let form;
let deleteBtn;

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
window.onload = function () {
    console.log(localStorage.getItem("employees"))
    if (localStorage.getItem("employees") !== null) {
        employees = JSON.parse(localStorage.getItem("employees"))
    } else {
        employees = [
            ['12345678', 'Name1 LastName1', '1234', '1234@mail.com', 'Administrative'],
            ['12345679', 'Name2 LastName2', '1235', '1235@mail.com', 'Engineering'],
            ['12345680', 'Name3 LastName3', '1236', '1236@mail.com', 'Marketing'],
            ['12345680', 'Name4 LastName4', '1237', '1237@mail.com', 'Sales'],
            ['12345680', 'Name5 LastName5', '1238', '1238@mail.com', 'QA']
        ]
    }
    buildGrid();
}

// HELPER FUNCTION TO RETURN DOM ELEMENT
const $ = (id) => document.getElementById(id)

// GET DOM ELEMENTS
form = $('addForm')
empTable = $('empTable')

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS


// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    employeeId  = $('id')
    fullName    = $('name')
    extension   = $('extension')
    email       = $('email')
    department  = $('department')
    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let newEmpl = [employeeId.value, fullName.value, extension.value, email.value, department.value]
    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(newEmpl)
    // BUILD THE GRID
    buildGrid()
    // RESET THE FORM
    form.reset();
    // SET FOCUS BACK TO THE ID TEXT BOX
    employeeId.focus();
});

function createDeleteButton(cell) {
    // CREATE THE DELETE BUTTON
    deleteBtn = document.createElement('button')
    // ADD BOOTSTRAP CLASSES FOR A BUTTON
    deleteBtn.className = 'btn btn-danger btn-sm float-end delete'
    //deleteBtn.setAttribute('onclick', 'deleteRow(this)');
    // CREATE TEXT NODE FOR DELETE BUTTON AND SET IT TO 'X'
    let textDelete = document.createTextNode('X')
    // APPEND TEXT NODE TO DELETE BUTTON
    deleteBtn.appendChild(textDelete)
    cell.appendChild(deleteBtn)
}

empTable.addEventListener('click', (event) => {
    const row = event.target.parentNode.parentNode.rowIndex;
    employees.splice(row - 1, 1);
    if (employees.length === 0) {
        localStorage.clear();
    }
    buildGrid();
});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    let emplTable = document.getElementById('empTable')
    let tbodyRef = emplTable.getElementsByTagName('tbody')[0];
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    tbodyRef.remove();
    // REBUILD THE TBODY FROM SCRATCH
    let newTBody = emplTable.createTBody()
    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    for (let empl of employees) {
        let newRow = newTBody.insertRow();
        let idCell = newRow.insertCell(0);
        let nameCell = newRow.insertCell(1);
        let extCell = newRow.insertCell(2);
        let emailCell = newRow.insertCell(3);
        let depCell = newRow.insertCell(4);
        let idText = document.createTextNode(empl[0]);
        let nameText = document.createTextNode(empl[1]);
        let extText = document.createTextNode(empl[2]);
        let emailText = document.createTextNode(empl[3]);
        let depText = document.createTextNode(empl[4]);
        idCell.appendChild(idText);
        nameCell.appendChild(nameText);
        extCell.appendChild(extText);
        emailCell.appendChild(emailText);
        depCell.appendChild(depText);
        createDeleteButton(depCell)
    }
    // BIND THE TBODY TO THE EMPLOYEE TABLE
    emplTable.appendChild(newTBody)
    // UPDATE EMPLOYEE COUNT
    updateCounter()
    // STORE THE ARRAY IN STORAGE
    if (employees.length !== 0) {
        localStorage.setItem("employees", JSON.stringify(employees))
    }
}

function updateCounter() {
    let empElement = $('empCount')
    empElement.innerText = `(${employees.length})`;
}