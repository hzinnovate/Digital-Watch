function time() {
    //Get new date
    var today = new Date();
    //Get Hours , Minutes and seconds from New Date
    var h = today.getHours(), m = today.getMinutes(), s = today.getSeconds();
    // if time < 10 = 00 , 01 , , , , 09 // adding 0 
    if (h < 10) { h = "0" + h } if (m < 10) { m = "0" + m } if (s < 10) { s = "0" + s }
    //set time to 12 hours format
    if (h < 12) { var q = "AM" } if (h > 12) { var q = "PM"; h = h - 12 } if (h === "00") { h = 12 }
    //get ID from HTML
    document.getElementById('txt').innerHTML =
        h + ":" + m + ":" + s + " " + q;
    // method to start clock and update with a second
    var t = setTimeout(time);
}