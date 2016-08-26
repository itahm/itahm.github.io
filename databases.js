var databases = {
	local: {
		selected: -1
	}
	responseTime: {
		
	}
}

databases.icon = {
		"server": {
	        "group": "server",
	        "src": "img/svg/server.svg",
	        "disabled": "img/svg/disabled/server.svg"
	    },
	    "mainframe": {
	        "group": "server",
	        "alt": "mainframe",
	        "src": "img/svg/mainframe.svg",
	        "disabled": "img/svg/disabled/mainframe.svg"
	    },
	    "database": {
	        "group": "server",
	        "alt": "database",
	        "src": "img/svg/database.svg",
	        "disabled": "img/svg/disabled/database.svg"
	    },
	    "storage": {
	        "group": "server",
	        "src": "img/svg/storage.svg",
	        "disabled": "img/svg/disabled/storage.svg"
	    },
	    "network": {
	        "group": "network",
	        "src": "img/svg/network.svg",
	        "disabled": "img/svg/disabled/network.svg"
	    },
	    "workgroup switch": {
	        "group": "network",
	        "src": "img/svg/workgroup.svg",
	        "disabled": "img/svg/disabled/workgroup.svg"
	    },
	    "layer4 switch": {
	        "group": "network",
	        "src": "img/svg/l4switch.svg",
	        "disabled": "img/svg/disabled/l4switch.svg"
	    },
	    "layer3 switch": {
	        "group": "network",
	        "src": "img/svg/l3switch.svg",
	        "disabled": "img/svg/disabled/l3switch.svg"
	    },
	    "router": {
	        "group": "network",
	        "src": "img/svg/router.svg",
	        "disabled": "img/svg/disabled/router.svg"
	    },
	    "firewall": {
	        "group": "network",
	        "src": "img/svg/firewall.svg",
	        "disabled": "img/svg/disabled/firewall.svg"
	    },
	    "vpn gateway": {
	        "group": "network",
	        "src": "img/svg/vpn.svg",
	        "disabled": "img/svg/disabled/vpn.svg"
	    },
	    "vpn concentrator": {
	        "group": "network",
	        "src": "img/svg/concentrator.svg",
	        "disabled": "img/svg/disabled/concentrator.svg"
	    },
	    "wireless": {
	        "group": "network",
	        "src": "img/svg/wireless.svg",
	        "disabled": "img/svg/disabled/wireless.svg"
	    },
	    "accesspoint": {
	        "group": "network",
	        "src": "img/svg/accesspoint.svg",
	        "disabled": "img/svg/disabled/accesspoint.svg"
	    },
	    "office": {
	        "group": "etc",
	        "src": "img/svg/office.svg",
	        "disabled": "img/svg/disabled/office.svg"
	    },
	    "cloud": {
	        "group": "etc",
	        "src": "img/svg/cloud.svg",
	        "disabled": "img/svg/disabled/cloud.svg"
	    },
	    "unknown": {
	        "group": "etc",
	        "src": "img/svg/unknown.svg",
	        "disabled": "img/svg/disabled/unknown.svg"
	    }
};

databases.device = {
	"127.0.0.1": {
        "ip": "127.0.0.1",
        "x": 30,
        "name": "itahm",
        "snmp": true,
        "profile": "public",
        "y": 330,
        "type": "server",
        "ifEntry": {}
    },
    "172.16.0.10": {
        "ip": "172.16.0.10",
        "x": -360,
        "name": "internet router 1",
        "y": -280,
        "ifEntry": {
            "172.16.0.20": "g1/1",
            "192.168.100.100": "g1/11",
            "1.0.0.100": "g2/21",
            "99.99.99.99": "g0/8"
        },
        "snmp": true,
        "label": "idc,public",
        "type": "router",
        "shutdown": false
    },
    "10.6.188.7": {
        "ip": "10.6.188.7",
        "x": -10,
        "name": "dmz (A)",
        "y": -20,
        "ifEntry": {
            "1.0.0.100": "g2/47",
            "10.0.0.200": "g2/48"
        },
        "snmp": true,
        "label": "idc,dmz",
        "type": "layer3 switch",
        "shutdown": false
    },
    "172.16.0.20": {
        "ip": "172.16.0.20",
        "x": -160,
        "name": "internet router 2",
        "y": -280,
        "ifEntry": {
            "172.16.0.10": "g1/2",
            "192.168.100.100": "g1/11",
            "10.0.0.200": "g2/21"
        },
        "snmp": true,
        "label": "public,idc",
        "type": "router",
        "shutdown": false
    },
    "10.50.50.5": {
        "ip": "10.50.50.5",
        "x": -550,
        "name": "dmz (S)",
        "y": 0,
        "ifEntry": {
            "1.0.0.100": "g2/47",
            "10.0.0.200": "g2/48"
        },
        "snmp": true,
        "type": "layer3 switch",
        "shutdown": false
    },
    "100.3.64.78": {
        "ip": "100.3.64.78",
        "x": -160,
        "name": "user (A)",
        "y": 150,
        "ifEntry": {
            "10.5.100.99": "f1/2",
            "10.0.1.1": "f0/1",
            "172.16.30.200": "f1/1",
            "172.16.0.30": "g3/2",
            "10.10.99.8": "g3/1"
        },
        "snmp": true,
        "type": "layer3 switch",
        "shutdown": false
    },
    "172.16.0.30": {
        "ip": "172.16.0.30",
        "x": -160,
        "name": "backbone switch",
        "y": -30,
        "ifEntry": {
            "192.168.254.10": "g0/2",
            "100.3.64.78": "g0/3",
            "10.0.0.200": "g0/1",
            "1.1.1.1": "g0/4"
        },
        "snmp": true,
        "type": "layer3 switch",
        "shutdown": false
    },
    "1.1.1.1": {
        "ip": "1.1.1.1",
        "x": 0,
        "name": "user (S)",
        "y": 180,
        "ifEntry": {
            "10.0.1.1": "f0/1",
            "172.16.0.30": "g2/2",
            "10.10.99.8": "g2/1"
        },
        "snmp": true,
        "type": "layer3 switch",
        "shutdown": false
    },
    "10.10.99.8": {
        "ip": "10.10.99.8",
        "x": -360,
        "name": "backbone switch",
        "y": -30,
        "ifEntry": {
            "10.20.20.254": "g0/5",
            "192.168.254.10": "g0/2",
            "1.0.0.100": "g0/1",
            "100.3.64.78": "g0/3",
            "1.1.1.1": "g0/4"
        },
        "snmp": true,
        "type": "layer3 switch",
        "shutdown": false
    },
    "192.168.0.250": {
        "ip": "192.168.0.250",
        "x": -290,
        "name": "server",
        "y": 350,
        "ifEntry": {
            "172.16.30.200": "eth2"
        },
        "snmp": true,
        "type": "storage",
        "community": "",
        "shutdown": false
    },
    "99.99.99.99": {
        "ip": "99.99.99.99",
        "x": -360,
        "name": "isp KT",
        "y": -400,
        "ifEntry": {
            "172.16.0.10": "kt"
        },
        "snmp": true,
        "type": "cloud",
        "shutdown": false
    },
    "8.8.8.88": {
        "ip": "8.8.8.88",
        "x": -400,
        "name": "web server",
        "y": 290,
        "ifEntry": {
            "172.16.30.200": "eth0"
        },
        "snmp": true,
        "label": "",
        "type": "server",
        "community": "",
        "shutdown": false
    },
    "10.0.11.1": {
        "ip": "10.0.11.1",
        "x": 200,
        "name": "marketing1",
        "y": 290,
        "ifEntry": {
            "10.0.1.1": "f0/1"
        },
        "snmp": true,
        "type": "workgroup switch",
        "community": "",
        "shutdown": false
    },
    "10.0.11.2": {
        "ip": "10.0.11.2",
        "x": 490,
        "name": "marketing2",
        "y": 130,
        "ifEntry": {
            "10.0.1.1": "f0/1"
        },
        "snmp": true,
        "type": "workgroup switch",
        "community": "",
        "shutdown": false
    },
    "10.20.20.254": {
        "ip": "10.20.20.254",
        "x": -470,
        "name": "server farm (A)",
        "y": 130,
        "ifEntry": {
            "10.10.99.8": "ge3"
        },
        "snmp": true,
        "type": "layer3 switch",
        "shutdown": true
    },
    "10.0.11.3": {
        "ip": "10.0.11.3",
        "x": 300,
        "name": "infra1",
        "y": 310,
        "ifEntry": {
            "10.0.1.1": "f0/1"
        },
        "snmp": true,
        "type": "workgroup switch",
        "community": "",
        "status": false,
        "shutdown": false
    },
    "192.168.254.10": {
        "ip": "192.168.254.10",
        "x": -300,
        "name": "server farm (S)",
        "y": 130,
        "ifEntry": {
            "172.16.0.30": "f0/3",
            "10.10.99.8": "f0/2"
        },
        "snmp": true,
        "type": "layer3 switch",
        "shutdown": false
    },
    "192.168.100.100": {
        "ip": "192.168.100.100",
        "name": "vpn main(A)",
        "x": -50,
        "y": -370,
        "ifEntry": {
            "172.16.0.10": "eth8",
            "172.16.0.20": "eth7"
        },
        "snmp": true,
        "type": "vpn concentrator",
        "shutdown": false
    },
    "10.0.1.1": {
        "ip": "10.0.1.1",
        "x": 290,
        "name": "office main",
        "y": 90,
        "ifEntry": {
            "10.0.11.1": "f1/1",
            "10.0.11.2": "f1/2",
            "10.0.11.3": "f1/3",
            "10.0.11.4": "f1/4",
            "10.0.11.5": "f1/5",
            "10.0.11.6": "f1/6",
            "10.0.11.7": "f1/7",
            "100.3.64.78": "f1/8",
            "10.0.11.8": "f1/9",
            "1.1.1.1": "f1/10",
            "10.0.11.9": "f1/11",
            "10.0.11.10": "f1/12"
        },
        "label": "office",
        "snmp": true,
        "type": "layer3 switch",
        "shutdown": false
    },
    
    "10.5.100.99": {
        "ip": "10.5.100.99",
        "name": "2nd floor",
        "x": -140,
        "y": 280,
        "ifEntry": {
            "1.2.3.47": "eth2",
            "100.3.64.78": "eth1"
        },
        "snmp": true,
        "label": "",
        "community": "",
        "type": "layer4 switch",
        "shutdown": false
    },
    "1.2.3.47": {
        "ip": "1.2.3.47",
        "name": "router",
        "x": -30,
        "y": 280,
        "ifEntry": {
            "10.5.100.99": "e1/0"
        },
        "snmp": true,
        "community": "",
        "type": "router",
        "shutdown": false
    },
    "10.0.11.4": {
        "ip": "10.0.11.4",
        "x": 400,
        "name": "infra2",
        "y": -100,
        "ifEntry": {
            "10.0.1.1": "f0/1"
        },
        "snmp": true,
        "type": "workgroup switch",
        "community": "",
        "shutdown": false
    },
    "10.0.11.5": {
        "ip": "10.0.11.5",
        "x": 490,
        "name": "administration",
        "y": 60,
        "ifEntry": {
            "10.0.1.1": "f0/1"
        },
        "snmp": true,
        "type": "workgroup switch",
        "community": "",
        "shutdown": false
    },
    "10.0.11.6": {
        "ip": "10.0.11.6",
        "x": 450,
        "name": "chairman",
        "y": -20,
        "ifEntry": {
            "10.0.1.1": "f0/1"
        },
        "snmp": true,
        "type": "workgroup switch",
        "community": "",
        "shutdown": false,
        "critical": true
    },
    "10.0.11.7": {
        "ip": "10.0.11.7",
        "x": 390,
        "name": "design",
        "y": 270,
        "ifEntry": {
            "10.0.1.1": "f0/1"
        },
        "snmp": true,
        "type": "workgroup switch",
        "community": "",
        "shutdown": false
    },
    "1.0.0.100": {
        "ip": "1.0.0.100",
        "x": -360,
        "name": "firewall(active)",
        "y": -160,
        "ifEntry": {
            "172.16.0.10": "eth2",
            "10.6.188.7": "eth3",
            "10.50.50.5": "eth4",
            "10.10.99.8": "eth1"
        },
        "snmp": true,
        "type": "firewall",
        "shutdown": false
    },
    "172.16.30.200": {
        "ip": "172.16.30.200",
        "x": -290,
        "name": "workgroup 1",
        "y": 220,
        "ifEntry": {
            "8.8.8.88": "fe1",
            "100.3.64.78": "fe24",
            "192.168.0.250": "fe23"
        },
        "snmp": true,
        "type": "workgroup switch",
        "shutdown": false
    },
    "10.0.11.8": {
        "ip": "10.0.11.8",
        "x": 470,
        "name": "account",
        "y": 210,
        "ifEntry": {
            "10.0.1.1": "f0/1"
        },
        "snmp": true,
        "type": "workgroup switch",
        "community": "",
        "shutdown": false
    },
    "10.0.0.200": {
        "ip": "10.0.0.200",
        "x": -160,
        "name": "firewall(standby)",
        "y": -160,
        "ifEntry": {
            "10.6.188.7": "eth3",
            "172.16.0.20": "eth2",
            "10.50.50.5": "eth4",
            "172.16.0.30": "eth1"
        },
        "snmp": true,
        "type": "firewall",
        "shutdown": false
    },
    "10.0.11.9": {
        "ip": "10.0.11.9",
        "x": 310,
        "name": "audit",
        "y": -130,
        "ifEntry": {
            "10.0.1.1": "f0/1"
        },
        "snmp": true,
        "type": "workgroup switch",
        "community": "",
        "shutdown": false
    },
    "10.0.11.10": {
        "ip": "10.0.11.10",
        "x": 220,
        "name": "manager",
        "y": -120,
        "ifEntry": {
            "10.0.1.1": "f0/1"
        },
        "snmp": true,
        "type": "workgroup switch",
        "community": "",
        "shutdown": false
    }
};

var demoData = demoData || {};

demoData.status = {
	    "sysDescr": "Linux ITAhM2014 3.19.0-49-generic #55~14.04.1-Ubuntu SMP Fri Jan 22 11:24:31 UTC 2016 x86_64",
	    "responseTime": 19,
	    "sysObjectID": "1.3.6.1.4.1.8072.3.2.10",
	    "sysName": "ITAhM2014",
	    "hrProcessorEntry": {
	        "196608": 10,
	        "196609": 26,
	        "196610": 5,
	        "196611": 19
	    },
	    "ifEntry": {
	        "1": {
	            "ifAdminStatus": 1,
	            "ifType": 24,
	            "ifPhysAddress": "",
	            "ifName": "lo",
	            "ifSpeed": 10000000,
	            "ifHCInOctets": 4600249788,
	            "ifDescr": "lo",
	            "ifAlias": "",
	            "ifOutOctets": 305282492,
	            "ifInBPS": 0,
	            "ifOutBPS": 0,
	            "ifInOctets": 305282492,
	            "ifHCOutOctets": 4600249788,
	            "ifOperStatus": 1
	        },
	        "2": {
	            "ifAdminStatus": 1,
	            "ifType": 6,
	            "ifPhysAddress": "擴\u0014�5�",
	            "ifName": "p3p1",
	            "ifSpeed": 100000000,
	            "ifHCInOctets": 5752894264,
	            "ifDescr": "p3p1",
	            "ifAlias": "",
	            "ifOutOctets": 1345621529,
	            "ifInBPS": 28141425,
	            "ifOutBPS": 29868402,
	            "ifInOctets": 1457926968,
	            "ifHCOutOctets": 5640588825,
	            "ifOperStatus": 1
	        },
	        "3": {
	            "ifAdminStatus": 2,
	            "ifType": 6,
	            "ifPhysAddress": "@�0�E�",
	            "ifName": "wlan0",
	            "ifSpeed": 0,
	            "ifHCInOctets": 76120367,
	            "ifDescr": "wlan0",
	            "ifAlias": "",
	            "ifOutOctets": 32246,
	            "ifInBPS": 0,
	            "ifOutBPS": 0,
	            "ifInOctets": 76120367,
	            "ifHCOutOctets": 32246,
	            "ifOperStatus": 2
	        }
	    },
	    "hrStorageEntry": {
	        "1": {
	            "hrStorageUsed": 970504,
	            "hrStorageAllocationUnits": 1024,
	            "hrStorageType": 2,
	            "hrStorageDescr": "Physical memory",
	            "hrStorageSize": 3964988
	        },
	        "3": {
	            "hrStorageUsed": 970504,
	            "hrStorageAllocationUnits": 1024,
	            "hrStorageType": 3,
	            "hrStorageDescr": "Virtual memory",
	            "hrStorageSize": 8075320
	        },
	        "6": {
	            "hrStorageUsed": 183896,
	            "hrStorageAllocationUnits": 1024,
	            "hrStorageType": 1,
	            "hrStorageDescr": "Memory buffers",
	            "hrStorageSize": 3964988
	        },
	        "7": {
	            "hrStorageUsed": 588664,
	            "hrStorageAllocationUnits": 1024,
	            "hrStorageType": 1,
	            "hrStorageDescr": "Cached memory",
	            "hrStorageSize": 588664
	        },
	        "8": {
	            "hrStorageUsed": 1420,
	            "hrStorageAllocationUnits": 1024,
	            "hrStorageType": 1,
	            "hrStorageDescr": "Shared memory",
	            "hrStorageSize": 1420
	        },
	        "10": {
	            "hrStorageUsed": 0,
	            "hrStorageAllocationUnits": 1024,
	            "hrStorageType": 3,
	            "hrStorageDescr": "Swap space",
	            "hrStorageSize": 4110332
	        },
	        "31": {
	            "hrStorageUsed": 4878903,
	            "hrStorageAllocationUnits": 4096,
	            "hrStorageType": 4,
	            "hrStorageDescr": "/",
	            "hrStorageSize": 27800522
	        },
	        "35": {
	            "hrStorageUsed": 0,
	            "hrStorageAllocationUnits": 4096,
	            "hrStorageType": 4,
	            "hrStorageDescr": "/sys/fs/cgroup",
	            "hrStorageSize": 1
	        },
	        "41": {
	            "hrStorageUsed": 202,
	            "hrStorageAllocationUnits": 4096,
	            "hrStorageType": 4,
	            "hrStorageDescr": "/run",
	            "hrStorageSize": 99125
	        },
	        "42": {
	            "hrStorageUsed": 0,
	            "hrStorageAllocationUnits": 4096,
	            "hrStorageType": 4,
	            "hrStorageDescr": "/run/lock",
	            "hrStorageSize": 1280
	        },
	        "43": {
	            "hrStorageUsed": 0,
	            "hrStorageAllocationUnits": 4096,
	            "hrStorageType": 4,
	            "hrStorageDescr": "/run/shm",
	            "hrStorageSize": 495623
	        },
	        "44": {
	            "hrStorageUsed": 0,
	            "hrStorageAllocationUnits": 4096,
	            "hrStorageType": 4,
	            "hrStorageDescr": "/run/user",
	            "hrStorageSize": 25600
	        }
	    },
	    "arpTable": {
	        "� 쨰�\u001b": 2,
	        "맅3�,B": 2,
	        "�i뷻q�": 2
	    },
	    "lastResponse": 1464666193841,
	    "hrSystemUptime": 6475281650
	};

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