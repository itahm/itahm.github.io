;"use strict";

function Communicator() {
	var xhr, url, dataQ, callbackQ, response;
	
	init();
	
	function init() {
		dataQ = [];
		callbackQ = [];
	}
	
	function send(data) {
		if (!xhr) {console.log("!?#");
			xhr = new XMLHttpRequest();
		}
		
		response = undefined;
		
		xhr.open("POST", url, true);
		xhr.onload = onSuccess;
		xhr.ontimeout = onTimeout;
		xhr.onloadend = onLoad;
		xhr.timeout = 5000;
		xhr.withCredentials = true;
		xhr.send(JSON.stringify(data));
	}
	
	function onSuccess(e) {
		if (xhr.status === 200) {
			var text = xhr.responseText;
			response = text.length > 0? JSON.parse(text): {};
		}
	};
	
	function onTimeout(e) {
		alert("request timed out.");
	};
	
	function onLoad(e) {
		var data = dataQ.shift();
		
		if (xhr.status === 0)
			console.log(xhr);
		
		callbackQ.shift()(response, xhr.status);
		
		if (data) {
			send(data);
		}
	};
	
	this.connect = function (server, port) {
		xhr = new XMLHttpRequest();
		url = "http://"+ server + (port? (":"+ port): "");
		
		return this;
	},
	
	this.close = function () {
		xhr = undefined;
		url = undefined;
		
		init();
	},
	
	this.send = function (data, callback) {
		if (callbackQ.length == 0) {
			send(data);
		}
		else {
			dataQ.push(data);
		}
		
		callbackQ.push(callback);
	};
}
