// =========================================
// Employee Management System
// employees.js
// =========================================

// Load Employees
let employees = JSON.parse(localStorage.getItem("employees")) || [];

// Table Body
const tableBody = document.getElementById("employeeTableBody");

// =========================================
// Display Employees
// =========================================

function displayEmployees(employeeList) {

    tableBody.innerHTML = "";

    if (employeeList.length === 0) {

        tableBody.innerHTML = `
            <tr>
                <td colspan="9" class="no-data">

                    <div style="padding:30px">

                        <h2 style="color:#2563eb;">📂 No Employees Found</h2>

                        <p style="margin-top:10px;color:#666;">
                            Click <strong>Add Employee</strong> to create your first employee.
                        </p>

                    </div>

                </td>
            </tr>
        `;

        return;
    }

    employeeList.forEach(employee => {

        const statusBadge =
            employee.status === "Active"
            ? `<span class="status active">🟢 Active</span>`
            : `<span class="status inactive">🔴 Inactive</span>`;

        tableBody.innerHTML += `

        <tr>

            <td>${employee.id}</td>

            <td>${employee.name}</td>

            <td>${employee.email}</td>

            <td>${employee.phone}</td>

            <td>${employee.department}</td>

            <td>${employee.designation}</td>

            <td>₹ ${employee.salary}</td>

            <td>${statusBadge}</td>

            <td>

                <div class="action-buttons">

                    <button
                        class="edit-btn"
                        onclick="editEmployee(${employee.id})">
                        ✏️ Edit
                    </button>

                    <button
                        class="delete-btn"
                        onclick="deleteEmployee(${employee.id})">
                        🗑 Delete
                    </button>

                </div>

            </td>

        </tr>

        `;

    });

}

// =========================================
// Delete Employee
// =========================================

function deleteEmployee(id){

    if(confirm("Are you sure you want to delete this employee?")){

        employees = employees.filter(employee => employee.id !== id);

        localStorage.setItem("employees", JSON.stringify(employees));

        displayEmployees(employees);

    }

}

// =========================================
// Search Employee
// =========================================

function searchEmployee(){

    const searchText = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const filteredEmployees = employees.filter(employee =>

        employee.name.toLowerCase().includes(searchText) ||
        employee.email.toLowerCase().includes(searchText) ||
        employee.department.toLowerCase().includes(searchText) ||
        employee.designation.toLowerCase().includes(searchText) ||
        employee.phone.toLowerCase().includes(searchText)

    );

    displayEmployees(filteredEmployees);

}

// =========================================
// Edit Employee
// =========================================

function editEmployee(id){

    localStorage.setItem("editEmployeeId", id);

    window.location.href = "addEmployee.html";

}

// =========================================
// Load Employees
// =========================================

displayEmployees(employees);