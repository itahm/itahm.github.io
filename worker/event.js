; "use strict" ;

(function (window, undefined) {
	
	var xhr,
		url,
		request = {
			"command": "listen"
		},
		TIMEOUT = 10000;
	
	function send() {
		if (!xhr) {
			xhr = new XMLHttpRequest();
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
			console.log("받은 index: "+ response.index);
			request.index = response.index +1;
			console.log("보낸 index: "+ request.index);
			send();
		}
		else {console.log(xhr.status, "retry");
			setTimeout(send, TIMEOUT);
		}
	};
	
	window.onmessage = function (e) {
		url = e.data;
		
		send();
	};
	
})(self);