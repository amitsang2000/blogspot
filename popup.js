alert(1);

function gform(){
window.open('https://docs.google.com/forms/d/117xaN0TE4Ye3qEH0VSVQ0DXvnuYBzAJyOJmgW75EXdc/viewform', 'poppage', 'toolbars=0, scrollbars=1, location=0, statusbars=0, menubars=0, resizable=1, width=950, height=650, left = 300, top = 50');
}

//=========================Get URL parameters===================================
var getUrlParameter = function getUrlParameter(sParam) {
	var sPageURL = decodeURIComponent(window.location.search.substring(1)),sURLVariables = sPageURL.split('&'),sParameterName,i;
	for (i = 0; i < sURLVariables.length; i++) {
		sParameterName = sURLVariables[i].split('=');
		if (sParameterName[0] === sParam) {
			return sParameterName[1] === undefined ? true : sParameterName[1];
		}
	}
}

//=====================================================


var v = getUrlParameter('v');
//alert(v);
if(v !== undefined)
{
//gform();
//alert(v);
document.getElementById('id01').style.display='block';
var url ="https://www.youtube.com/embed/" + v + "?rel=0";
document.getElementById('youtubeIframe').src = url ;
}


var mobile = getUrlParameter('mobile');
//alert(mobile);
if(mobile !== undefined)
{
document.getElementById('mobile').innerHTML = "<h2>" + mobile + "<h2>";
}



