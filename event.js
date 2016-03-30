; "use strict" ;

self.importScripts("js/Communicator.js");

(function (window, undefined) {
	
	var xhr,
		url,
		request = {
			"command": "listen"
		},
		TIMEOUT = 10000;
	
	function send() {
		if (!xhr) {
			xhr = Communicator.xhr();
		}
		
		xhr.open("POST", url, true);
		xhr.onloadend = onLoad;
		xhr.withCredentials = true;
		
		xhr.send(JSON.stringify(request));
	}
	
	function onLoad(e) {
		var response;
		
		if (xhr.status === 200) {
			response = JSON.parse(xhr.responseText);
			
			window.postMessage(response.data);
			
			request.index = response.index +1;
			
			send();
		}
		else {
			setTimeout(send, TIMEOUT);
		}
	};
	
	window.onmessage = function (e) {
		url = e.data;
		
		send();
	};
	
})(self);