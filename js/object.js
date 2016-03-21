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
	}
	
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
}) (window);