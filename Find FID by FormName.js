//=====Get Parameters============
var params = {
};
if (location.search) {
  var parts = location.search.substring(1).split('&');
  for (var i = 0; i < parts.length; i++) {
    var nv = parts[i].split('=');
    if (!nv[0]) continue;
    params[nv[0]] = nv[1] || true;
  }
}
var demoNo = (params.demographicNo)
var x = location.toString()
//alert(x.indexOf("eform/efmformslistadd.jsp?demographic_no"))
//*****************************************************************************
if (x.indexOf('eform/efmformslistadd.jsp?demographic_no') > - 1) {
  //Finding the FID of the eForm with formName
  myfindFID('Email Text Consent Form')
}//Finding the FID of the eForm with formName

myfindFID('Email Text Consent Form') //alert(fid)
function myfindFID(formName) {
  var mytag = document.getElementsByTagName('a');
  for (var i = 0; i < mytag.length; i++) {
    //alert(mytag[i].innerHTML)
    if (mytag[i].innerHTML.indexOf(formName) > - 1) {
      var onclickvalue = mytag[i].innerHTML.trim() //
      //alert(onclickvalue)    
      //parse out the fid from this <a> element's action script
      var fidRe = /efmformadd_data\.jsp\?fid=(\d*)&/;
      var actionScript = mytag[i].getAttribute('onclick');
      //alert(actionScript)
      var myArray;
      if ((myArray = fidRe.exec(actionScript)) !== null) {
        fid = myArray[1];
        alert(fid)
      }
    }
  }
}
//**************************************************************************
