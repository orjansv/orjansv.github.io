window.addEventListener('load', loadLinks);

function loadLinks()
{
	var wrapper = document.getElementById("wrapper");
	console.log(wrapper);

	var url = "reads.json";
    var ajaxHttp = new XMLHttpRequest();
    ajaxHttp.overrideMimeType("application/json");
    ajaxHttp.open("GET",url,true);
    ajaxHttp.setRequestHeader("Access-Control-Allow-Origin", "*");
    ajaxHttp.send(null);
    ajaxHttp.onreadystatechange = function ()
    {
	    if(ajaxHttp.readyState == 4 && ajaxHttp.status == "200")
	    {
	        yourJsonDataFromFile = JSON.parse(ajaxHttp.response);

	        for(var i = 0; i < yourJsonDataFromFile.length; i++) {
	        	var a = document.createElement("a");
	        	a.title = yourJsonDataFromFile[i]["text"];
	        	a.href = yourJsonDataFromFile[i]["url"];
	        	a.innerHTML = yourJsonDataFromFile[i]["text"];
	        	wrapper.appendChild(a);
	        }
	    }
	}
}
