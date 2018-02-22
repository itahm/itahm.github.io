"use strict" ;

var url,
	requestQ = ["gcm", "sms", "config", "icon", "profile", "account", "device", "position", "monitor", "critical"],
	event = {
		command: "listen"
	},
	databases = {
		local: {}
	};

onmessage = function (e) {
	url = e.data;

	sendRequest(requestQ.pop());
};

function sendRequest(database) {
	var xhr = new XMLHttpRequest(),
		request = {
			command: "pull",
			database: database
		};
	
	xhr.open("POST", url, true);
	xhr.withCredentials = true;
	xhr.onloadend = onComplete.bind(xhr, database);
	xhr.send(JSON.stringify(request));
}

function onComplete(database) {
	if (this.status == 200) {
		databases[database] = JSON.parse(this.responseText);
		
		database = requestQ.pop();
		
		if (database) {
			sendRequest(database);
		}
		else {
			postMessage({
				type: "initialize",
				value: databases
			});
			
			listen();
		}
	}
	else {
		postMessage({
			type: "error",
			status: this.status
		});
		
		close();
	}
}

function listen() {
	var xhr = new XMLHttpRequest();

	xhr.open("POST", url, true);
	xhr.withCredentials = true;
	xhr.onload = onEvent;
	xhr.onerror = onError;
	xhr.ontimeout = listen;
	xhr.send(JSON.stringify(self.event));
}

function onError(e) {
	// 아마 reset

	postMessage({
		type: "error",
		status: 0
	});
}

function onEvent() {
	var response;
	
	if (this.status === 200) {
		response = JSON.parse(this.responseText);
		
		postMessage({
			type: "event",
			value: response
		});
		
		self.event.index = parseInt(response.index) +1;
		
		listen();
	}
}
