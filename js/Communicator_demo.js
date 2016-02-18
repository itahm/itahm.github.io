;"use strict";

var demoData = {
		icon: {},
		profile: {
			public: {
				name: "public",
				version: "v2c",
				community: "public",
				udp: 161
			}
		},
		account: {
			root: {
				username: "root",
				password: "root"
			}
		}
	};

function Communicator() {
	this.connect = function (server, port) {
	},
	
	this.close = function () {
	},
	
	this.send = function (data, callback) {
		callback(processRequest(data), 200);
	};
}

function processRequest(data) {
	var c = data.command;
	
	if (c === "pull") {
		if (data.database === "device") {
			return {
				data: demoData.device
			};
		}
		else if (data.database === "icon") {
			return {
				data: demoData.icon
			};
		}
		else if (data.database === "profile") {
			return {
				data: demoData.profile
			};
		}
		else if (data.database === "account") {
			return {
				data: demoData.account
			};
		}
	}
	else if (c === "push") {
		if (data.database === "device") {
			demoData.device = data.data;
		}
		else if (data.database === "icon") {
			demoData.icon = data.data;
		}
		else if (data.database === "profile") {
			demoData.profile = data.data;
		}
		else if (data.database === "account") {
			demoData.account = data.data;
		}
		
		return {};
	}
	else if (c === "select") {
		return demoData.snmp;
	}
	else if (c === "query") {
		return demoData.responseTime;
	}
	else if (c === "echo") {
		return {};
	}
	else if (c === "signin") {
		return {};
	}
}
