var elements = (window.location.pathname.split('/', 2))
firstElement = (elements.slice(1))
vPath = ("https://" + location.host + "/" + firstElement)

//get parameters
var params = {};
if (location.search) {
    var parts = location.search.substring(1).split('&');
    for (var i = 0; i < parts.length; i++) {
        var nv = parts[i].split('=');
        if (!nv[0]) continue;
        params[nv[0]] = nv[1] || true;
    }
}

var measureArray = [];
var measureDateArray = [];

function getMeasures(measure) {
    xmlhttp = new XMLHttpRequest();
    var pathArray = window.location.pathname.split('/');
    var newURL = "..//oscarEncounter/oscarMeasurements/SetupDisplayHistory.do?type=" + measure;
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var str = xmlhttp.responseText; //local variable
            if (!str) {
                return;
            }
            var myRe = /<td width="10">([\S,\d,\.]+)<\/td>/g; //for the measurement
            var myArray;
            measureArray = []
            measureDateArray = []
            var i = 0;
            while ((myArray = myRe.exec(str)) !== null) {
                measureArray[i] = myArray[1];
                i = i + 1;
            }

            var myRe = /<td width="150">([0-9,-]+)<\/td>\s*<td width="150">/g; //the first date is the observation date
            var myArray;
            var i = 0;
            while ((myArray = myRe.exec(str)) !== null) {
                measureDateArray[i] = myArray[1];
                i = i + 1;
            }
        }
    }
    xmlhttp.open("GET", newURL, false);
    xmlhttp.send();
    if (measureArray.length > 0) {
        myGraphWindow = measure + ": "


        doHtml("<font size='3'>" + myGraphWindow + "</font>");
        displaynum = measureArray.length
        if (measureArray.length > 20) {
            displaynum = 20
        }
        for (jj = 0; jj < displaynum; jj++) {
            var d = new Date(measureDateArray[jj])
            var LabDate = "(" + d.getFullYear() + "/" + (d.getMonth() + 1) + "); "
            doHtml("<font size='3'>" + measureArray[jj].bold() + "</font>" + "<font size='2'>" + LabDate + "</font>")
        }
        doHtml("<br></br>");
    }
}