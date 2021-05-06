
async function fetchEmployees() {
    try {
        const response = await fetch('../data/employees.json');
        const infoEmployees = await response.json();
        return infoEmployees;
    } catch (error) {
        console.log(error.message);
    }
}


export {fetchEmployees};