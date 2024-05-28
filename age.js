function calculateAge() {
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    const result = document.getElementById('result');

    if (!day || day < 1 || day > 31) {
        result.innerText = 'Please enter a valid day (1-31).';
        return;
    }

    if (!month || month < 1 || month > 12) {
        result.innerText = 'Please enter a valid month (1-12).';
        return;
    }
    if (!isValidDate(day, month, year)) {
        result.innerText = 'Please enter a valid date.';
        return;
    }

    const currentYear = new Date().getFullYear();
    if (!year || year < 1900 || year > currentYear) {
        result.innerText = `Please enter a valid year (1900-${currentYear}).`;
        return;
    }

    const birthDate = new Date(year, month - 1, day);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    result.innerText = `You are ${age} years old.`;
}
function isValidDate(day, month, year) {
    const monthDays = [31, (isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (month < 1 || month > 12 || day < 1 || day > monthDays[month - 1]) {
        return false;
    }
    return true;
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function resetForm() {
    document.getElementById('ageForm').reset();
    document.getElementById('result').innerText = '';
}