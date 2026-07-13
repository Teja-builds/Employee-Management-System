// ===============================
// Employee Management System
// Add Employee
// ===============================

const employeeForm = document.getElementById("employeeForm");
// ===============================
// Load Employee for Editing
// ===============================

let employees = JSON.parse(localStorage.getItem("employees")) || [];

let editEmployeeId = localStorage.getItem("editEmployeeId");

if(editEmployeeId){

    let employee = employees.find(emp => emp.id == editEmployeeId);

    if(employee){

        document.getElementById("employeeName").value = employee.name;
        document.getElementById("employeeEmail").value = employee.email;
        document.getElementById("employeePhone").value = employee.phone;
        document.getElementById("employeeDepartment").value = employee.department;
        document.getElementById("employeeDesignation").value = employee.designation;
        document.getElementById("employeeSalary").value = employee.salary;
        document.getElementById("employeeStatus").value = employee.status;

        document.querySelector("button[type='submit']").textContent = "Update Employee";

    }

}
employeeForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const employee = {

        id: editEmployeeId ? Number(editEmployeeId) : Date.now(),

        name: document.getElementById("employeeName").value,

        email: document.getElementById("employeeEmail").value,

        phone: document.getElementById("employeePhone").value,

        department: document.getElementById("employeeDepartment").value,

        designation: document.getElementById("employeeDesignation").value,

        salary: document.getElementById("employeeSalary").value,

        status: document.getElementById("employeeStatus").value

    };

    let employees = JSON.parse(localStorage.getItem("employees")) || [];
if(editEmployeeId){

    employees = employees.map(emp =>

        emp.id == editEmployeeId ? employee : emp

    );

    localStorage.removeItem("editEmployeeId");

    alert("Employee Updated Successfully!");

}else{

    employees.push(employee);

    alert("Employee Added Successfully!");

}

localStorage.setItem("employees", JSON.stringify(employees));

    window.location.href = "employees.html";

});