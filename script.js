const months = [31,28,31,30,31,30,31,31,30,31,30,31];

function ageCalculate(){
    let today = new Date();
    let inputDate = Date(document.getElementById("date-input").value);
    let birthDay,birthMonth,birthYear;

    let birthDetails = {
        date:inputDate.getDate(),
        month:inputDate.getMonth() + 1,
        year:inputDate.getFullYear()
    }

    let currentDate = today.getDate();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();

    if(birthDetails.year > currentYear ||
        (birthDetails.month > currentMonth &&
            birthDetails.year == currentYear) ||
            (birthDetails.date > currentDate &&
                birthDetails.month == currentMonth && 
                birthDetails.year == currentYear)
                ){
                    alert("Not Born Yet");
                    return;
                }
}