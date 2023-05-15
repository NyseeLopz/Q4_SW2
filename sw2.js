function minsTosecs() {
    var a, b
    a = document.getElementById('min_sec').value;
    b = 60; 
    alert(a * b);
}
function minsTohrs() {
    var a, b
    a = document.getElementById('min_hr').value;
    b = 60; 
    alert(a / b);
}
function minsTodays() {
    var a, b
    a = document.getElementById('min_day').value;
    b = 1440; 
    alert(a / b);
}
function secsTomins() {
    var a, b
    a = document.getElementById('sec_min').value;
    b = 60; 
    alert(a / b);
}
function secsTohrs() {
    var a, b
    a = document.getElementById('sec_hr').value;
    b = 3600; 
    alert(a / b);
}
function secsTodays() {
    var a, b
    a = document.getElementById('sec_day').value;
    b = 86400; 
    alert(a / b);
}
function hrsTosecs() {
    var a, b
    a = document.getElementById('hr_sec').value;
    b = 3600; 
    alert(a * b);
}
function hrsTomins() {
    var a, b
    a = document.getElementById('hr_min').value;
    b = 60; 
    alert(a * b);
}
function hrsTodays() {
    var a, b
    a = document.getElementById('hr_day').value;
    b = 24; 
    alert(a / b);
}
function daysTosecs() {
    var a, b
    a = document.getElementById('day_sec').value;
    b = 86400; 
    alert(a * b);
}
function daysTomins() {
    var a, b
    a = document.getElementById('day_min').value;
    b = 1440; 
    alert(a * b);
}
function daysTohrs() {
    var a, b
    a = document.getElementById('day_hr').value;
    b = 24; 
    alert(a * b);
}