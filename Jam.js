function printTime() {
    var d = new Date();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    var day = d.getDay();
    var date = d.getDate();
    var month = d.getMonth();
    var year = d.getFullYear();

    switch(day) {

        case 0:
            day = "Minggu";
            break;
        case 1:
            day = "Senin";
            break;   
        case 2:
            day = "Selasa";
            break;
        case 3:
            day = "Rabu";
            break;
        case 4:
            day = "Kamis";
            break;
        case 5:
            day = "Jumat";
            break;
        case 6:
            day = "Sabtu";
            break;
    }

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }
    if (secs < 10) {
        secs = "0" + secs;
    }
    
    month = month + 1; document.getElementById("tes").innerHTML = hours+":"+mins+":"+secs;
    document.getElementById("ttt").innerHTML = day + "," + date + "/" + month + "/" + year;
}
setInterval(printTime, 1000);