//Navigation
sfHover = function() {  
	var sfEls = document.getElementById("navigation").getElementsByTagName("LI");
	
	for (var i=0; i<sfEls.length; i++) {
		sfEls[i].onmouseover=function() {
			this.className+=" sfhover";
		}
		sfEls[i].onmouseout=function() {
			this.className=this.className.replace(new RegExp(" sfhover\\b"), "");
		}
	}
}

if (window.attachEvent) window.attachEvent("onload", sfHover);

//Google Maps

function load() {
      if (GBrowserIsCompatible()) {
	  	var map = new GMap2(document.getElementById("map"));
	  	var marker = new GMarker(new GLatLng(45.339319, 14.422967));
	  	
	  	map.setCenter(new GLatLng(45.339719, 14.424748), 16);
	  	map.addControl(new GSmallMapControl());
	  	map.openInfoWindow(map.getCenter(), document.createTextNode("Sandi moto centar"));
	  	
	  	map.addOverlay(marker);
	  	var html = "<img class='leftfloat' + src='pics/logo-sandi.jpg'" +
	  	"width='160' height='70'/> " +
	  	"Karlovačka 14, 51000 Rijeka";
	  	marker.openInfoWindowHtml(html);
	  }
}

window.onload = load;
window.onunload = GUnload;



