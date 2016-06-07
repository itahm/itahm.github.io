;"use strict";

/**
 * @namespace
 */
var ITAhM = ITAhM || {};

(function (window, undefined) {
	
	ITAhM.QueryParser = function () {
		this.initialize();
	};
	
	ITAhM.ChartData = function (data) {
		this.initialize(data);
	};

	ITAhM.ChartSummaryData = function (data) {
		this.initialize(data);
	};
	
	ITAhM.Path = function (container) {
		this.initialize(container);
	};
	
	ITAhM.Calendar = function (calendar, handler) {
		this.initialize(calendar, handler);
	};
	
	ITAhM.Communicator = function (host, port, timeout) {
		this.initialize(host, port, timeout);
	};
	
	ITAhM.Color = function (r, g, b) {
		this.initialize(r, g, b);
	};
	
	ITAhM.QueryParser.prototype = {
		map: {},
		
		initialize: function () {
			var queries,
				pair;
				
			if (!location.search) {
				return;
			}
			
			queries = location.search.substring(1).split("&");
			
			for (var i=0, length=queries.length; i<length; i++) {
				pair = queries[i].split("=");
				
				if (pair.length === 2) {
					this.map[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
				}
			}
		},
		
		get: function (key) {
			return this.map[key];
		}		
	};
	
	ITAhM.ChartSummaryData.prototype = {
		initialize: function (data) {
			this.data = data;
		},
		
		next: function (date) {
			return date.setHours(date.getHours() +1, 0, 0, 0);
		},
		
		buildData: function (start, end) {
			var keys = [],
				tmp = [],
				date = new Date(start),
				mills, value, high, low, max = [], min = [];
			
			mills = date.setMinutes(0, 0, 0);
			
			do {
				value = this.data[mills];
				
				if (value) {
					tmp[tmp.length] = mills;
					
					max[max.length] = value.max;
					min[min.length] = value.min;
				}
				// 값이 둘 이상이어야 graph를 그릴 수 있음
				else if (tmp.length > 1) {
					keys[keys.length] = tmp;
					
					tmp = [];
				}
			} while ((mills = this.next(date)) <= end);
			
			// 값이 둘 이상이어야 graph를 그릴 수 있음
			if (tmp.length > 1) {
				keys[keys.length] = tmp;
			}
			
			high = Math.max.apply(undefined, max);
			low = Math.min.apply(undefined, min);
			
			if (high === low) {
				high++;
				low--;
			}
			
			return keys.length > 0? {
				high: high,
				low: low,
				keys: keys
			}: undefined;
		},
		
		get: function (date) {
			return this.data[date];
		}
	};
	
	ITAhM.ChartSummaryData.prototype.parseData = ITAhM.ChartSummaryData.prototype.buildData;
		
	ITAhM.ChartData.prototype = {
		initialize: function (data) {
			this.data = data;
		},
		
		next: function (date) {
			return date.setMinutes(date.getMinutes() +1, 0, 0);
		},
		
		buildData: function (start, end) {
			var keys = [],
				tmp = [],
				date = new Date(start),
				mills;
			
			mills = date.setSeconds(0, 0);
			
			do {
				value = this.data[mills];
				
				if (value) {
					tmp[tmp.length] = mills;
				}
				// 값이 둘 이상이어야 graph를 그릴 수 있음
				else if (tmp.length > 1) {
					keys[keys.length] = tmp;
					
					tmp = [];
				}
			} while ((mills = this.next(date)) <= end);
			
			// 값이 둘 이상이어야 graph를 그릴 수 있음
			if (tmp.length > 1) {
				keys[keys.length] = tmp;
			}
			
			return keys.length > 0? {
				keys: keys
			}: undefined;
		},
		
		get: function (date) {
			return this.data[date];
		}
	};

	//Path object
	ITAhM.Path.prototype = {
		initialize: function (container) {
			this.container = container;
			this.path = document.createElementNS(svgNS, "path");
			this.beginPath();
		},
		
		moveTo: function (x, y) {
			this.distance[this.distance.length] = "M"+ x +" "+ y;
			
			return this;
		},
		
		lineTo: function (x, y) {
			this.distance[this.distance.length] = "L"+ x +" "+ y;
			
			return this;
		},
		
		draw: function () {
			this.container.appendChild(this.path);
			
			this.path.setAttributeNS(null, "d", this.distance.join(" "));
		},
		
		set: function (key, value) {
			this.path.setAttributeNS(null, key, value);
		},
		
		beginPath: function () {
			this.distance = [];
		},
		
		closePath: function () {
			this.distance[this.distance.length] = "Z"
		}
	};
	
	ITAhM.Calendar.prototype = {
		header: document.createElement("div"),
		body: document.createElement("div"),
		date: document.createElement("div"),
		button: document.createElement("div"),
		year: document.createElement("span"),
		month: document.createElement("select"),
		btnPrev: document.createElement("button"),
		btnCur: document.createElement("button"),
		btnNext: document.createElement("button"),
		initialize: function (id, handler) {
			this.calendar = document.getElementById(id);
			this.callback = handler;
			
			//event
			this.month.onchange = function () {
				this.move(new Date(this.year.textContent, this.month.value));
			}.bind(this);
			
			this.btnPrev.onclick = function () {
				this.move(new Date(this.year.textContent, Number(this.month.value) -1));
			}.bind(this);
			
			this.btnCur.onclick = function () {
				var date = new Date();
				
				date.setHours(0, 0, 0, 0);
				
				this.callback(date);
			}.bind(this);
			
			this.btnNext.onclick = function () {
				this.move(new Date(this.year.textContent, Number(this.month.value) +1));
			}.bind(this);
			
			// header
			this.header.appendChild(this.date);
			this.header.appendChild(this.button);
			
			this.date.appendChild(this.year);
			this.date.appendChild(this.month);
			
			for (var i=0, opt; i<12;) {
				opt = document.createElement("option");
				
				opt.value = i++;
				opt.text = i<10? "0" + i: i;
				
				this.month.appendChild(opt);
			}
			
			this.button.appendChild(this.btnPrev).textContent = "<";
			this.button.appendChild(this.btnCur).textContent = ".";
			this.button.appendChild(this.btnNext).textContent = ">";
			
			this.calendar.appendChild(this.header);
			
			// body
			var ul = document.createElement("ul"),
				dayArray = ["일", "월", "화", "수", "목", "금", "토"];
			
			for (var j=0; j<7; j++) {
				ul.appendChild(document.createElement("li")).textContent = dayArray[j];
			}
			
			this.body.appendChild(ul);
			
			for (var i=0; i<6; i++) {
				ul = document.createElement("ul");
				
				for (var j=0; j<7; j++) {
					ul.appendChild(document.createElement("li"));
				}
				
				this.body.appendChild(ul);
			}
			
			this.calendar.appendChild(this.body);
			
			this.move(new Date());
		},
		
		move: function (date) {
			this.year.textContent = date.getFullYear();
			this.month.value = date.getMonth();
			
			date.setHours(0, 0, 0, 0);
			
			this.set(date);
		},
		
		set: function (date) {
			var year = date.getFullYear(),
				month = date.getMonth(),
				dateArray = new Array(6*7).fill(0),
				index, lastDate;
			
			date.setDate(1);
			index = date.getDay();
			
			date.setMonth(month +1, 0);
			lastDate = date.getDate();
			
			for (var i=1; i <= lastDate; i++, index++) {
				dateArray[index] = i;
			}
			
			for (var i=0, _i=dateArray.length, index=0, col, row = this.body.childNodes[1]; i<_i; i++) {
				col = row.childNodes[index];
				
				if (dateArray[i]) {
					col.textContent = dateArray[i];
					col.className = "valid";
					col.onclick = function (y, m, d) {
						this.callback(new Date(y, m, d, 0, 0, 0, 0));
					}.bind(this, year, month, dateArray[i]);
				}
				else {
					col.textContent = "";
					col.className = "";
					col.onclick = undefined;
				}
				
				if (++index > 6) {
					index = 0;
					
					row = row.nextSibling;
				}
			}
		}
	};

	ITAhM.Communicator.prototype = {
		
		initialize: function (host, port, timeout) {
			this.url = "http://"+ host +":"+ port;
			this.timeout = timeout;
		},
		
		sendRequest: function (request, onResponse) {
			var xhr = new XMLHttpRequest();
			
			xhr.open("POST", this.url, true);
			if (this.timeout > 0) {
				xhr.timeout = this.timeout;
			}
			
			xhr.withCredentials = true;
			
			xhr.onloadend = this.onComplete.bind(xhr, onResponse);
			
			this.status = 0;
			
			xhr.send(JSON.stringify(request));
		},
		
		onComplete: function (onResponse) {
			var response;
			
			try {
				response = JSON.parse(this.responseText);
			}
			catch(e) {
			}
			
			onResponse(this.status, response);
		}
		
	};
	
	ITAhM.Color.prototype = {
		initialize: function (r, g, b) {
			this.r = r;
			this.g = g;
			this.b = b;
		},
		
		toString: function () {
			return "#"+ this.r.toString(16) + this.g.toString(16) + this.b.toString(16);
		},
		
		alpha: function (alpha) {
			return "rgba("+ this.r +"," + this.g +","+ this.b +","+ alpha + ")";
		}
		
	};
	
}) (window);