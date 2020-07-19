var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


function additionSubmit() {
    event.preventDefault();
    var gender = document.getElementById('gender').value;
    var date = document.getElementById('date').value;
    date = new Date(date);

    if (gender === 'male') {
        alert(" For Him Born On " + weekDays[date.getDay()] + ',' + " Your Akan Name Is " + maleNames[date.getDay()]);
        document.getElementById('result').innerHTML = maleNames[date.getDay()]
    } else if (gender === 'female') {
        alert(" For Her Born On " + weekDays[date.getDay()] + ',' + " Your Akan Name Is " + femaleNames[date.getDay()]);
        document.getElementById('result').innerHTML = femaleNames[date.getDay()];
    } else {
        alert(" For Him or Her Born On " + " Undefine Date " + ',' + " Your Akan Name Is " + " Undefined ");
    }
}


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}