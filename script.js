setInterval(function dateTimeString() {
    let currentDate = new Date();
    document.getElementById('date').innerText = currentDate.toLocaleDateString();
    document.getElementById('year').innerText = currentDate.getFullYear();
    document.getElementById('time').innerText = currentDate.toLocaleTimeString();
}, 1000);