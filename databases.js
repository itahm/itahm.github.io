var databases = {
	icon: {
		data: {
			
		},
		origin: {
			
		}
	},
	device: {
		data: {
			
		},
		selected: -1,
	},
	responseTime: {
		
	}
}

databases.icon.data = {
    "server": {
        "group": "server",
        "src": "img/svg/server.svg"
    },
    "mainframe": {
        "group": "server",
        "alt": "mainframe",
        "src": "img/svg/mainframe.svg"
    },
    "database": {
        "group": "server",
        "alt": "database",
        "src": "img/svg/database.svg"
    },
    "storage": {
        "group": "server",
        "src": "img/svg/storage.svg"
    },
    "network": {
        "group": "network",
        "src": "img/svg/network.svg"
    },
    "workgroup switch": {
        "group": "network",
        "src": "img/svg/workgroup.svg"
    },
    "layer4 switch": {
        "group": "network",
        "src": "img/svg/l4switch.svg"
    },
    "layer3 switch": {
        "group": "network",
        "src": "img/svg/l3switch.svg"
    },
    "router": {
        "group": "network",
        "src": "img/svg/router.svg"
    },
    "firewall": {
        "group": "network",
        "src": "img/svg/firewall.svg"
    },
    "vpn gateway": {
        "group": "network",
        "src": "img/svg/vpn.svg"
    },
    "vpn concentrator": {
        "group": "network",
        "src": "img/svg/concentrator.svg"
    },
    "wireless": {
        "group": "network",
        "src": "img/svg/wireless.svg"
    },
    "accesspoint": {
        "group": "network",
        "src": "img/svg/accesspoint.svg"
    },
    "office": {
        "group": "etc",
        "src": "img/svg/office.svg"
    },
    "cloud": {
        "group": "etc",
        "src": "img/svg/cloud.svg"
    },
    "unknown": {
        "group": "etc",
        "src": "img/svg/unknown.svg"
    }
};

databases.device.data = {
    "0": {
        "ip": "127.0.0.1",
        "x": 30,
        "name": "itahm",
        "snmp": true,
        "profile": "public",
        "y": 330,
        "id": "0",
        "type": "server",
        "ifEntry": {}
    },
    "46": {
        "ip": "172.16.0.10",
        "x": -360,
        "name": "internet router 1",
        "y": -280,
        "ifEntry": {
            "47": "g1/1",
            "15": "g1/11",
            "40": "g2/21",
            "76": "g0/8"
        },
        "snmp": false,
        "id": "46",
        "label": "idc,public",
        "type": "router",
        "shutdown": false
    },
    "68": {
        "ip": "10.6.188.7",
        "x": -10,
        "name": "dmz (A)",
        "y": -20,
        "ifEntry": {
            "40": "g2/47",
            "41": "g2/48"
        },
        "snmp": false,
        "id": "68",
        "label": "idc,dmz",
        "type": "layer3 switch",
        "shutdown": false
    },
    "47": {
        "ip": "172.16.0.20",
        "x": -160,
        "name": "internet router 2",
        "y": -280,
        "ifEntry": {
            "46": "g1/2",
            "15": "g1/11",
            "41": "g2/21"
        },
        "snmp": false,
        "id": "47",
        "label": "public,idc",
        "type": "router",
        "shutdown": false
    },
    "69": {
        "ip": "10.50.50.5",
        "x": -550,
        "name": "dmz (S)",
        "y": 0,
        "ifEntry": {
            "40": "g2/47",
            "41": "g2/48"
        },
        "snmp": false,
        "id": "69",
        "type": "layer3 switch",
        "shutdown": false
    },
    "73": {
        "ip": "100.3.64.78",
        "x": -160,
        "name": "user (A)",
        "y": 150,
        "ifEntry": {
            "4": "f1/2",
            "19": "f0/1",
            "62": "f1/1",
            "52": "g3/2",
            "53": "g3/1"
        },
        "snmp": false,
        "id": "73",
        "type": "layer3 switch",
        "shutdown": false
    },
    "52": {
        "ip": "172.16.0.30",
        "x": -160,
        "name": "backbone switch",
        "y": -30,
        "ifEntry": {
            "58": "g0/2",
            "73": "g0/3",
            "41": "g0/1",
            "74": "g0/4"
        },
        "snmp": false,
        "id": "52",
        "type": "layer3 switch",
        "shutdown": false
    },
    "74": {
        "ip": "1.1.1.1",
        "x": 0,
        "name": "user (S)",
        "y": 180,
        "ifEntry": {
            "19": "f0/1",
            "52": "g2/2",
            "53": "g2/1"
        },
        "snmp": false,
        "id": "74",
        "type": "layer3 switch",
        "shutdown": false
    },
    "53": {
        "ip": "10.10.99.8",
        "x": -360,
        "name": "backbone switch",
        "y": -30,
        "ifEntry": {
            "57": "g0/5",
            "58": "g0/2",
            "40": "g0/1",
            "73": "g0/3",
            "74": "g0/4"
        },
        "snmp": false,
        "id": "53",
        "type": "layer3 switch",
        "shutdown": false
    },
    "10": {
        "ip": "192.168.0.250",
        "x": -290,
        "name": "server",
        "y": 350,
        "ifEntry": {
            "62": "eth2"
        },
        "snmp": false,
        "id": "10",
        "type": "storage",
        "community": "",
        "shutdown": false
    },
    "76": {
        "ip": "99.99.99.99",
        "x": -360,
        "name": "isp KT",
        "y": -400,
        "ifEntry": {
            "46": "kt"
        },
        "snmp": false,
        "id": "76",
        "type": "cloud",
        "shutdown": false
    },
    "11": {
        "ip": "8.8.8.88",
        "x": -400,
        "name": "web server",
        "y": 290,
        "ifEntry": {
            "62": "eth0"
        },
        "snmp": false,
        "id": "11",
        "label": "",
        "type": "server",
        "community": "",
        "shutdown": false
    },
    "77": {
        "ip": "10.0.11.1",
        "x": 200,
        "name": "marketing1",
        "y": 290,
        "ifEntry": {
            "19": "f0/1"
        },
        "snmp": false,
        "id": "77",
        "type": "workgroup switch",
        "community": "",
        "shutdown": false
    },
    "78": {
        "ip": "10.0.11.2",
        "x": 490,
        "name": "marketing2",
        "y": 130,
        "ifEntry": {
            "19": "f0/1"
        },
        "snmp": false,
        "id": "78",
        "type": "workgroup switch",
        "community": "",
        "shutdown": false
    },
    "57": {
        "ip": "10.20.20.254",
        "x": -470,
        "name": "server farm (A)",
        "y": 130,
        "ifEntry": {
            "53": "ge3"
        },
        "snmp": true,
        "id": "57",
        "type": "layer3 switch",
        "shutdown": true
    },
    "79": {
        "ip": "10.0.11.3",
        "x": 300,
        "name": "infra1",
        "y": 310,
        "ifEntry": {
            "19": "f0/1"
        },
        "snmp": false,
        "id": "79",
        "type": "workgroup switch",
        "community": "",
        "shutdown": false
    },
    "58": {
        "ip": "192.168.254.10",
        "x": -300,
        "name": "server farm (S)",
        "y": 130,
        "ifEntry": {
            "52": "f0/3",
            "53": "f0/2"
        },
        "snmp": false,
        "id": "58",
        "type": "layer3 switch",
        "shutdown": false
    },
    "15": {
        "ip": "192.168.100.100",
        "name": "vpn main(A)",
        "x": -50,
        "y": -370,
        "ifEntry": {
            "46": "eth8",
            "47": "eth7"
        },
        "snmp": false,
        "id": "15",
        "type": "vpn concentrator",
        "shutdown": false
    },
    "19": {
        "ip": "10.0.1.1",
        "x": 290,
        "name": "office main",
        "y": 90,
        "ifEntry": {
            "77": "f1/1",
            "78": "f1/2",
            "79": "f1/3",
            "80": "f1/4",
            "81": "f1/5",
            "82": "f1/6",
            "83": "f1/7",
            "73": "f1/8",
            "84": "f1/9",
            "74": "f1/10",
            "85": "f1/11",
            "86": "f1/12"
        },
        "id": "19",
        "label": "office",
        "snmp": false,
        "type": "layer3 switch",
        "shutdown": false
    },
    
    "4": {
        "ip": "10.5.100.99",
        "name": "2nd floor",
        "x": -140,
        "y": 280,
        "ifEntry": {
            "5": "eth2",
            "73": "eth1"
        },
        "snmp": false,
        "id": "4",
        "label": "",
        "community": "",
        "type": "layer4 switch",
        "shutdown": false
    },
    "5": {
        "ip": "1.2.3.47",
        "name": "router",
        "x": -30,
        "y": 280,
        "ifEntry": {
            "4": "e1/0"
        },
        "snmp": false,
        "id": "5",
        "community": "",
        "type": "router",
        "shutdown": false
    },
    "80": {
        "ip": "10.0.11.4",
        "x": 400,
        "name": "infra2",
        "y": -100,
        "ifEntry": {
            "19": "f0/1"
        },
        "snmp": false,
        "id": "80",
        "type": "workgroup switch",
        "community": "",
        "shutdown": false
    },
    "81": {
        "ip": "10.0.11.5",
        "x": 490,
        "name": "administration",
        "y": 60,
        "ifEntry": {
            "19": "f0/1"
        },
        "snmp": false,
        "id": "81",
        "type": "workgroup switch",
        "community": "",
        "shutdown": false
    },
    "82": {
        "ip": "10.0.11.6",
        "x": 450,
        "name": "chairman",
        "y": -20,
        "ifEntry": {
            "19": "f0/1"
        },
        "snmp": false,
        "id": "82",
        "type": "workgroup switch",
        "community": "",
        "shutdown": false
    },
    "83": {
        "ip": "10.0.11.7",
        "x": 390,
        "name": "design",
        "y": 270,
        "ifEntry": {
            "19": "f0/1"
        },
        "snmp": false,
        "id": "83",
        "type": "workgroup switch",
        "community": "",
        "shutdown": false
    },
    "40": {
        "ip": "1.0.0.100",
        "x": -360,
        "name": "firewall(active)",
        "y": -160,
        "ifEntry": {
            "46": "eth2",
            "68": "eth3",
            "69": "eth4",
            "53": "eth1"
        },
        "snmp": false,
        "id": "40",
        "type": "firewall",
        "shutdown": false
    },
    "62": {
        "ip": "172.16.30.200",
        "x": -290,
        "name": "workgroup 1",
        "y": 220,
        "ifEntry": {
            "11": "fe1",
            "73": "fe24",
            "10": "fe23"
        },
        "snmp": false,
        "id": "62",
        "type": "workgroup switch",
        "shutdown": false
    },
    "84": {
        "ip": "10.0.11.8",
        "x": 470,
        "name": "account",
        "y": 210,
        "ifEntry": {
            "19": "f0/1"
        },
        "snmp": false,
        "id": "84",
        "type": "workgroup switch",
        "community": "",
        "shutdown": false
    },
    "41": {
        "ip": "10.0.0.200",
        "x": -160,
        "name": "firewall(standby)",
        "y": -160,
        "ifEntry": {
            "68": "eth3",
            "47": "eth2",
            "69": "eth4",
            "52": "eth1"
        },
        "snmp": false,
        "id": "41",
        "type": "firewall",
        "shutdown": false
    },
    "85": {
        "ip": "10.0.11.9",
        "x": 310,
        "name": "audit",
        "y": -130,
        "ifEntry": {
            "19": "f0/1"
        },
        "snmp": false,
        "id": "85",
        "type": "workgroup switch",
        "community": "",
        "shutdown": false
    },
    "86": {
        "ip": "10.0.11.10",
        "x": 220,
        "name": "manager",
        "y": -120,
        "ifEntry": {
            "19": "f0/1"
        },
        "snmp": false,
        "id": "86",
        "type": "workgroup switch",
        "community": "",
        "shutdown": false
    }
};

var demoData = demoData || {};

(function () {
	var date = new Date(),
		index = 0,
		now;
		
		now = date.setMinutes(0, 0, 0);
		// today
		date.setHours(0);
		// start of week
		date.setDate(date.getDate() - date.getDay());
		// start of data
		key = date.setFullYear(date.getFullYear() -1);
		
	window.createData = function () {
		var data = {},
			sample = getData();
			length = sample.length;
		
		do {
			data[key] = sample[index++ % length];
			
			key = date.setHours(date.getHours() +1);
		} while(key < now);
	
		return data;
	}
	
	function getData() {
		return [{
            "avg": 6,
            "min": 3,
            "max": 24
        }, {
            "avg": 7,
            "min": 4,
            "max": 12
        }, {
            "avg": 7,
            "min": 4,
            "max": 13
        }, {
            "avg": 6,
            "min": 3,
            "max": 23
        }, {
            "avg": 7,
            "min": 3,
            "max": 12
        }, {
            "avg": 6,
            "min": 4,
            "max": 17
        }, {
            "avg": 7,
            "min": 3,
            "max": 17
        }, {
            "avg": 7,
            "min": 4,
            "max": 13
        }, {
            "avg": 6,
            "min": 4,
            "max": 12
        }, {
            "avg": 7,
            "min": 4,
            "max": 15
        }, {
            "avg": 7,
            "min": 4,
            "max": 13
        }, {
            "avg": 6,
            "min": 4,
            "max": 10
        }, {
            "avg": 7,
            "min": 4,
            "max": 12
        }, {
            "avg": 6,
            "min": 4,
            "max": 12
        }, {
            "avg": 7,
            "min": 4,
            "max": 12
        }, {
            "avg": 7,
            "min": 4,
            "max": 13
        }, {
            "avg": 6,
            "min": 4,
            "max": 14
        }, {
            "avg": 7,
            "min": 4,
            "max": 13
        }, {
            "avg": 6,
            "min": 4,
            "max": 22
        }, {
            "avg": 7,
            "min": 4,
            "max": 19
        }, {
            "avg": 6,
            "min": 4,
            "max": 15
        }, {
            "avg": 7,
            "min": 5,
            "max": 32
        }, {
            "avg": 7,
            "min": 5,
            "max": 15
        }, {
            "avg": 6,
            "min": 4,
            "max": 11
        },{
            "avg": 6,
            "min": 3,
            "max": 58
        }, {
            "avg": 7,
            "min": 3,
            "max": 176
        }, {
            "avg": 6,
            "min": 3,
            "max": 15
        }, {
            "avg": 6,
            "min": 3,
            "max": 83
        }, {
            "avg": 7,
            "min": 2,
            "max": 66
        }, {
            "avg": 5,
            "min": 3,
            "max": 32
        }, {
            "avg": 5,
            "min": 3,
            "max": 21
        }, {
            "avg": 6,
            "min": 3,
            "max": 19
        }, {
            "avg": 5,
            "min": 3,
            "max": 34
        }, {
            "avg": 6,
            "min": 3,
            "max": 37
        }, {
            "avg": 5,
            "min": 2,
            "max": 39
        }, {
            "avg": 6,
            "min": 3,
            "max": 14
        }, {
            "avg": 5,
            "min": 2,
            "max": 42
        }, {
            "avg": 6,
            "min": 3,
            "max": 18
        }, {
            "avg": 5,
            "min": 2,
            "max": 19
        }, {
            "avg": 6,
            "min": 3,
            "max": 17
        }, {
            "avg": 5,
            "min": 3,
            "max": 11
        }, {
            "avg": 9,
            "min": 2,
            "max": 176
        }, {
            "avg": 5,
            "min": 3,
            "max": 23
        }, {
            "avg": 5,
            "min": 4,
            "max": 16
        }, {
            "avg": 5,
            "min": 3,
            "max": 21
        }, {
            "avg": 6,
            "min": 3,
            "max": 15
        }, {
            "avg": 5,
            "min": 4,
            "max": 14
        }, {
            "avg": 7,
            "min": 3,
            "max": 48
        }, {
            "avg": 6,
            "min": 3,
            "max": 57
        }, {
            "avg": 7,
            "min": 4,
            "max": 23
        }, {
            "avg": 5,
            "min": 3,
            "max": 27
        }, {
            "avg": 7,
            "min": 4,
            "max": 16
        }, {
            "avg": 5,
            "min": 2,
            "max": 37
        }, {
            "avg": 6,
            "min": 3,
            "max": 17
        }, {
            "avg": 5,
            "min": 3,
            "max": 31
        }, {
            "avg": 6,
            "min": 3,
            "max": 15
        }, {
            "avg": 5,
            "min": 3,
            "max": 39
        }, {
            "avg": 8,
            "min": 3,
            "max": 96
        }, {
            "avg": 6,
            "min": 3,
            "max": 29
        }, {
            "avg": 6,
            "min": 3,
            "max": 60
        }, {
            "avg": 6,
            "min": 4,
            "max": 35
        }, {
            "avg": 6,
            "min": 3,
            "max": 65
        }, {
            "avg": 5,
            "min": 2,
            "max": 24
        }, {
            "avg": 7,
            "min": 3,
            "max": 42
        }, {
            "avg": 8,
            "min": 2,
            "max": 60
        }, {
            "avg": 7,
            "min": 4,
            "max": 146
        }, {
            "avg": 7,
            "min": 3,
            "max": 56
        }, {
            "avg": 6,
            "min": 4,
            "max": 44
        }, {
            "avg": 6,
            "min": 4,
            "max": 29
        }, {
            "avg": 8,
            "min": 4,
            "max": 144
        }, {
            "avg": 6,
            "min": 4,
            "max": 26
        }, {
            "avg": 6,
            "min": 4,
            "max": 35
        }, {
            "avg": 6,
            "min": 3,
            "max": 66
        }, {
            "avg": 7,
            "min": 3,
            "max": 53
        }, {
            "avg": 6,
            "min": 3,
            "max": 33
        }, {
            "avg": 9,
            "min": 2,
            "max": 180
        }, {
            "avg": 11,
            "min": 2,
            "max": 180
        }, {
            "avg": 6,
            "min": 3,
            "max": 19
        }, {
            "avg": 6,
            "min": 3,
            "max": 23
        }, {
            "avg": 7,
            "min": 4,
            "max": 71
        }, {
            "avg": 7,
            "min": 4,
            "max": 58
        }, {
            "avg": 8,
            "min": 3,
            "max": 81
        }, {
            "avg": 7,
            "min": 3,
            "max": 166
        }, {
            "avg": 6,
            "min": 3,
            "max": 62
        }, {
            "avg": 7,
            "min": 3,
            "max": 20
        }, {
            "avg": 6,
            "min": 3,
            "max": 29
        }, {
            "avg": 5,
            "min": 3,
            "max": 24
        }, {
            "avg": 7,
            "min": 4,
            "max": 51
        }, {
            "avg": 6,
            "min": 3,
            "max": 26
        }, {
            "avg": 8,
            "min": 4,
            "max": 101
        }, {
            "avg": 7,
            "min": 3,
            "max": 28
        }, {
            "avg": 8,
            "min": 4,
            "max": 150
        }, {
            "avg": 7,
            "min": 4,
            "max": 16
        }, {
            "avg": 6,
            "min": 4,
            "max": 23
        }, {
            "avg": 7,
            "min": 4,
            "max": 19
        }, {
            "avg": 6,
            "min": 4,
            "max": 19
        }, {
            "avg": 6,
            "min": 4,
            "max": 31
        }, {
            "avg": 7,
            "min": 4,
            "max": 14
        }, {
            "avg": 6,
            "min": 3,
            "max": 68
        }, {
            "avg": 6,
            "min": 3,
            "max": 58
        }, {
            "avg": 6,
            "min": 2,
            "max": 27
        }, {
            "avg": 6,
            "min": 4,
            "max": 17
        }, {
            "avg": 7,
            "min": 4,
            "max": 55
        }, {
            "avg": 7,
            "min": 4,
            "max": 31
        }, {
            "avg": 8,
            "min": 4,
            "max": 106
        }, {
            "avg": 6,
            "min": 3,
            "max": 32
        }, {
            "avg": 6,
            "min": 4,
            "max": 12
        }, {
            "avg": 6,
            "min": 3,
            "max": 12
        }, {
            "avg": 7,
            "min": 3,
            "max": 105
        }, {
            "avg": 6,
            "min": 3,
            "max": 34
        }, {
            "avg": 6,
            "min": 3,
            "max": 16
        }, {
            "avg": 6,
            "min": 3,
            "max": 12
        }, {
            "avg": 7,
            "min": 3,
            "max": 88
        }, {
            "avg": 8,
            "min": 4,
            "max": 115
        }, {
            "avg": 10,
            "min": 2,
            "max": 161
        }, {
            "avg": 6,
            "min": 4,
            "max": 20
        }, {
            "avg": 8,
            "min": 4,
            "max": 85
        }, {
            "avg": 7,
            "min": 4,
            "max": 17
        }, {
            "avg": 6,
            "min": 4,
            "max": 29
        }, {
            "avg": 7,
            "min": 4,
            "max": 31
        }, {
            "avg": 7,
            "min": 3,
            "max": 52
        }, {
            "avg": 6,
            "min": 4,
            "max": 26
        }, {
            "avg": 8,
            "min": 5,
            "max": 35
        }, {
            "avg": 6,
            "min": 4,
            "max": 23
        }, {
            "avg": 7,
            "min": 3,
            "max": 28
        }, {
            "avg": 6,
            "min": 3,
            "max": 18
        }, {
            "avg": 6,
            "min": 4,
            "max": 13
        }, {
            "avg": 7,
            "min": 4,
            "max": 29
        }, {
            "avg": 6,
            "min": 4,
            "max": 35
        }, {
            "avg": 7,
            "min": 4,
            "max": 35
        }, {
            "avg": 6,
            "min": 3,
            "max": 31
        }, {
            "avg": 7,
            "min": 3,
            "max": 96
        }, {
            "avg": 12,
            "min": 4,
            "max": 197
        }, {
            "avg": 10,
            "min": 3,
            "max": 115
        }, {
            "avg": 6,
            "min": 3,
            "max": 13
        }, {
            "avg": 7,
            "min": 3,
            "max": 16
        }, {
            "avg": 7,
            "min": 4,
            "max": 80
        }, {
            "avg": 8,
            "min": 4,
            "max": 60
        }, {
            "avg": 11,
            "min": 3,
            "max": 127
        }, {
            "avg": 6,
            "min": 4,
            "max": 19
        }, {
            "avg": 6,
            "min": 4,
            "max": 16
        }, {
            "avg": 7,
            "min": 4,
            "max": 42
        }, {
            "avg": 7,
            "min": 4,
            "max": 29
        }, {
            "avg": 6,
            "min": 4,
            "max": 16
        }, {
            "avg": 8,
            "min": 4,
            "max": 42
        }, {
            "avg": 6,
            "min": 4,
            "max": 15
        }, {
            "avg": 7,
            "min": 4,
            "max": 16
        }, {
            "avg": 7,
            "min": 4,
            "max": 65
        }, {
            "avg": 6,
            "min": 3,
            "max": 40
        }, {
            "avg": 7,
            "min": 4,
            "max": 16
        }, {
            "avg": 6,
            "min": 5,
            "max": 14
        }, {
            "avg": 8,
            "min": 5,
            "max": 20
        }, {
            "avg": 6,
            "min": 4,
            "max": 12
        }, {
            "avg": 7,
            "min": 4,
            "max": 12
        }, {
            "avg": 6,
            "min": 4,
            "max": 12
        }, {
            "avg": 7,
            "min": 4,
            "max": 13
        }, {
            "avg": 6,
            "min": 4,
            "max": 10
        }, {
            "avg": 7,
            "min": 4,
            "max": 13
        }, {
            "avg": 6,
            "min": 4,
            "max": 9
        }, {
            "avg": 7,
            "min": 4,
            "max": 12
        }, {
            "avg": 6,
            "min": 4,
            "max": 12
        }, {
            "avg": 6,
            "min": 4,
            "max": 19
        }, {
            "avg": 7,
            "min": 4,
            "max": 12
        }, {
            "avg": 7,
            "min": 4,
            "max": 15
        }, {
            "avg": 6,
            "min": 4,
            "max": 16
        }, {
            "avg": 7,
            "min": 4,
            "max": 13
        }, {
            "avg": 6,
            "min": 4,
            "max": 17
        }, {
            "avg": 7,
            "min": 4,
            "max": 13
        }];
	}
})();