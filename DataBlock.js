;"use strict";

function DataBlock (config) {
	var arrayX = [],
		arrayY = [],
		high,
		low,
		length = 0;

	this.length = function () {
		return length;
	};
	
	this.push = function (x, y) {
		if (length == 0) {
			high = y;
			low = y;
		}
		else {
			high = Math.max(high, y);
			low = Math.min(low, y);
		}
		
		arrayX[length] = x;
		arrayY[length] = y;
		
		length++;
	};
	
	this.get = function (index) {
		return {
			x: arrayX[index],
			y: arrayY[index]
		};
	}
	
	this.getX = function (index) {
		return arrayX[index];
	}
	
	this.getY = function (index) {
		return arrayY[index];
	}
	
	this.high = function () {
		return high;
	}
	
	this.low = function () {
		return low;
	}
}
