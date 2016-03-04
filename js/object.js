;"use strict";

/**
 * @namespace
 */
var ITAhM = ITAhM || {};

(function (window, undefined) {
	
	ITAhM.QueryParser = function (search) {
		this.initialize(search);
	};
	
	ITAhM.ChartData = function (data) {
		this.initialize(data);
	};

	ITAhM.ChartSummaryData = function (data) {
		this.initialize(data);
	};
	
	ITAhM.QueryParser.prototype = {
		map: {},
		
		initialize: function (search) {
			var queries,
				pair;
				
			if (!search) {
				return;
			}
			
			queries = search.substring(1).split("&");
			
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
	
}) (window);