// ======================================
// Employee Management System
// Dashboard
// ======================================

// Get employees from Local Storage
let employees = JSON.parse(localStorage.getItem("employees")) || [];

// ======================================
// Total Employees
// ======================================

document.getElementById("totalEmployees").textContent = employees.length;

// ======================================
// Active Employees
// ======================================

const activeEmployees = employees.filter(employee => employee.status === "Active");

document.getElementById("activeEmployees").textContent = activeEmployees.length;

// ======================================
// Inactive Employees
// ======================================

const inactiveEmployees = employees.filter(employee => employee.status === "Inactive");

document.getElementById("inactiveEmployees").textContent = inactiveEmployees.length;

// ======================================
// Total Departments
// ======================================

const departments = [...new Set(employees.map(employee => employee.department))];

document.getElementById("departments").textContent = departments.length;