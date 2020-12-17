const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function () {
    output.textContent = salary.value;
});

function save() {
    try {
        employeePayroll = createEmployeePayroll();
    }
    catch (message) {
        return message;
    }
}

function createEmployeePayroll() {
    let employeePayroll = new EmployeePayroll();
    employeePayroll.name = getInputValueById('#name');
    employeePayroll.profileImg = getSelectedValues('[name = profileImg]').pop();
    employeePayroll.gender = getSelectedValues('[name = gender]').pop();
    employeePayroll.department = getSelectedValues('[name = department]');
    employeePayroll.salary = getInputValueById('#salary');
    employeePayroll.note = getInputValueById('#note');
    let date = getInputValueById('#day') + "/" + getInputValueById('#month') + "/" + getInputValueById('#year');
    employeePayroll.startDate = new Date(date);
    alert(employeePayroll.toString());
    return employeePayroll;
}

function getSelectedValues(propertyValue) {
    let allItems = document.querySelector(propertyValue);
    let selectedItems = [];
    allItems.forEach(item => {
        if (item.checked)
            selectedItems.push(item.value);
    });
    return selectedItems;
}

function getInputValueById(id) {
    let value = document.querySelector(id).value;
    return value;
}