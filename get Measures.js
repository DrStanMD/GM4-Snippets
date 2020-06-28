var elements = (window.location.pathname.split('/', 2))
firstElement = (elements.slice(1))
//vPath = ('https://' + location.host + '/' + firstElement + '/')
vPath = '../'
var myParam = location.search.split('demographicId=')[1]
if (!myParam) {
    //alert("NO DEMO NO")
    var x = document.getElementsByName("demog");
    //alert(x[0].value)
    var demo_no = x[0].value
} else {
    var res = myParam.indexOf('&')
    var demo_no = myParam.substring(0, res)
    //alert(demo_no)
}

var demoArray = [
    'FirstName',
    'LastName',
    'Email'
]

var demoArrayVal = []

function getMeasures(measure) {
    xmlhttp = new XMLHttpRequest();
    var pathArray = window.location.pathname.split('/');
    var newURL = vPath + '/demographic/demographiccontrol.jsp?demographic_no=' + demo_no + '&displaymode=edit&dboperation=search_detail'
    //window.open(newURL)

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            //alert(xmlhttp.responseText)
            var str = xmlhttp.responseText.replace(/\s/g, '')
            //var str = xmlhttp.responseText
            if (!str) {
                return;
            }
            //var myReString = '<li><spanclass="label">' + measure + ':</span><spanclass="info">.*/s*'
            var myReString = '<spanclass="label">' + measure + '.*/s*'
            //var myReString = '<span class="label">' + measure + '(.|[\n])*'
            var myRe = new RegExp(myReString, 'g');
            var myArray
            while ((myArray = myRe.exec(str)) !== null) {
                y = myArray.toString()
                //alert(y)
                var z = y.indexOf('info')
                var mycode = y.substring(z + 6)
                var mycode2 = mycode.indexOf('</span>')
                var mycode3 = mycode.substring(mycode + 9, mycode2)
                //alert(mycode3)
                demoArrayVal[j] = mycode3
                //alert(j+measure + ' is ' + mycode3)
            }
        }
    }
    xmlhttp.open('GET', newURL, false);
    xmlhttp.send();
}

$(document).ready(function() {
    for (j = 0; j < demoArray.length; j++) {
        getMeasures(demoArray[j]);
    }
});
