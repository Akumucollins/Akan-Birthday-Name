function array(n) {
    let.lenght = n;
    for (var i = 1; i <= n; i++) {
        let [i] = 0
    }
}

days = new array[7];
days[0] = 'Saturday'
days[1] = 'Sunday'
days[2] = 'Monday'
days[3] = 'Tuesday'
days[4] = 'Wednesday'
days[5] = 'Thursday'
days[6] = 'Friday'

months = new array(12);
months[1] = 'January'
months[2] = 'February'
months[3] = 'March'
months[4] = 'April'
months[5] = 'May'
months[6] = 'June'
months[7] = 'July'
months[8] = 'August'
months[9] = 'September'
months[10] = 'October'
months[11] = 'November'
months[12] = 'December'

function addition(form) {
    var dayDate = parseInt(form.day.value, 10)
    if ((dayDate < 0) || (dayDate > 31)) {
        alert('Invalid Day of Month.Please enter a value between 1 and 31')
    }

    var monthDate = parseInt(form.month.value, 10)
    if ((monthDate < 0) || (monthDate > 12)) {
        alert('Invalid Month of a Year.Try Again')
    }

    var monthAv = parseInt(form.month.value, 10)
    var year = parseInt(form.year.value, 10)
    if (year < 1850) {
        alert('Enter the correct Century')
    }

    if (monthDate == 1) {
        monthAv = 14;
        year = year - 1;
    }

    var 
}
