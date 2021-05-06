import { fetchEmployees } from './modules/init.js';

var infoEmployees = [];
fetchEmployees('../data/employees.json')
    .then( (data) => {
        for (let employee of data) {
            infoEmployees.push({
                id: employee.id,
                name: employee.name,
                extension: employee.extension,
                email: employee.email,
                department: employee.department
            });
        }
        buildGrid(infoEmployees);
    })
    .catch((e) => {
        console.log(e);
    });

let empTable = document.querySelector('#employees');
let empCount    = document.querySelector('#empCount');

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete this employee?')) {
            let rowIndex = e.target.parentNode.parentNode.rowIndex;
            empTable.deleteRow(rowIndex);
        }
    }
});

let buildGrid = (data) => {
    
    empTable.lastElementChild.remove();
    let tbody = document.createElement('tbody');
    
    for (let employee of data) {
        tbody.innerHTML += 
        `
        <tr>
            <td>${employee.id}</td>
            <td>${employee.name}</td>
            <td>${employee.extension}</td>
            <td>${employee.email}</td>
            <td>${employee.department}</td>
            <td><button class="btn btn-sm btn-danger delete">X</button></td>
        </tr>
        `
    }
   
    empTable.appendChild(tbody);
     empCount.value = `(${data.length})`;
    
}
