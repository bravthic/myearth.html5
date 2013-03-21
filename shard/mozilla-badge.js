window.addEventListener("load",function()){
	var a = document.createElement("a");
	if(window.location && location.host && "mozillademos.allizom.org" == location.host)
		{
		
		a.href = "http://webofwonder.allizom.org";
	}
	else{
		a.href = "https://demos.mlzilla.org";
	}
}