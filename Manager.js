;"use strict";

function Manager(chart) {
	var
		MODE_FIX = 0,
		MODE_START = 1,
		MODE_END = 2,
		MODE_MOVE = MODE_START | MODE_END,
		MONTH_NAME = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
		HOUR1 = (function (date) {
			return Math.abs(date.getTime() - date.setHours(date.getHours() +1));
		})(new Date(0));
	
	var data = [],
		start = new Date().setHours(0, 0, 0, 0),
		end = (function(date) {
			return date.setDate(date.getDate() +1);
		})(new Date(start)),
		tpp = (end - start) / chart.graphArea.width,
		mode = MODE_START | MODE_END;
	
	function setXAxis() {
		var
			date = new Date(start),
			dateMills,
			minGap = GRID_MIN_WIDTH * tpp,
			dateGap = HOUR1,
			date = new Date(start),
			dataArray = [],
			pow = 0;
		
		for (; minGap > dateGap; dateGap += HOUR1, pow++);
		
		date.setMinutes(0, 0, 0);
		
		while ((dateMills = date.setHours(date.getHours() + pow)) < end) {
			dataArray[dataArray.length] = [(dateMills - start) /tpp, format(dateMills)];
		}
		
		chart.setXAxis(dataArray);
	}
	
	function format(milliseconds) {
		var date = new Date(milliseconds),
			day = date.getDate(),
			hour = date.getHours();
		
		return MONTH_NAME[date.getMonth()] +" "+ (day > 9? "": "0")+ day +", "+ (hour > 9? "": "0") + hour;
	}
	
	function invalidate() {
		var chartData,
			length = data.length,
			low,
			high;
		
		for (var i=0; i<length; i++) {
			chartData = data[i];
			
			chartData.build(start, end);
			
			if (i === 0) {
				high = chartData.high;
				low = chartData.low;
			}
			else {
				high = Math.max(high , chartData.high);
				low = Math.min(low , chartData.low);
			}
		}
		
		chart.clear();
		
		chart.setYAxis(high, low, chartData.capacity);
		
		tpp = (end - start) / chart.graphArea.width;
		
		setXAxis();
		
		for (var i=0; i<length; i++) {
			chart.draw(data[i], tpp);
		}
	}
	
	new Draggable(chart.chart).on("dragmove", function (event) {
		var x = event.moveX,
			_x = Math.abs(x),
			sign = x / _x;
		
		if (x == 0 || mode == MODE_FIX) {
			return;
		}
		
		if (mode & MODE_START && mode & MODE_END) {
			// move
			var move = x * tpp;
			
			start -= move;
			end -= move;
		}
		else {
			if (mode & MODE_START) {
				// fix end
				for (var i=0; i<_x; i++ ) {
					start += sign * tpp;
				}
			}
			else {
				// fix start
				for (var i=0; i<_x; i++ ) {
					end += sign * tpp;
				}
			}
			
			tpp = (end - start) / chart.graphArea.width;
		}
		
		invalidate();
	});
	
	this.invalidate = function () {
		invalidate();
	};
	
	this.mode = function (start, end) {
		mode = MODE_FIX;
		
		if (start) {
			mode |= MODE_START;
		}
		
		if (end) {
			mode |= MODE_END;
		}
	};
	
	this.addData = function (chartData) {
		data[data.length] = chartData;
	};
	
	this.clearData = function () {
		data = [];
	};
	
}
	