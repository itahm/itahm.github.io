;"use strict";

function nextMinutes(date) {
	return date.setMinutes(date.getMinutes() +1);
}

function nextHours(date) {
	return date.setHours(date.getHours() +1);
}

function trimSeconds(date) {
	return date.setSedonds(0, 0);
}

function trimMinutes(date) {
	return date.setMinutes(0, 0, 0);
}

/**
 * @param config.capacity
 * @param config.fill
 * @param config.color
 * @param config.method
 * @param config.unit
 * 
 */
function ChartData (data, config) {
	var config = config || {},
		unit, trim, next;
		
	/**
	 * constructor
	 */
	this.capacity = config.capacity;
	this.color = config.color || "#000";
	this.method = config.method;
	this.fill = config.fill;
	this.option = config.option;
	this.stroke = config.stroke;
	this.width = config.width || 1;
	
	switch (config.unit) {
	case ChartData.MINUTES:
		unit = config.unit;
		trim = trimSeconds;
		next = nextMinutes;
		break;
		
	default:
		unit = ChartData.HOURS;
		trim = trimMinutes;
		next = nextHours;
	}
	
	this.push = function (x, y) {
	
		block.push(x, y);
	};
	
	this.wrap = function () {
		if (block.length() === 0) {
			return;
		}
		
		data[data.length] = block;
		
		block = new DataBlock();
	};
	
	this.length = function () {
		return this.data.length;
	};
	
	this.getBlock = function (index) {
		return data[index];
	};
	
	this.build = function (startMills, endMills) {
		var date = new Date(startMills),
			next = unit === ChartData.MINUTES? nextMinutes: nextHours,
			dateMills = trim(date),
			blockArray = [],
			block = new DataBlock(),
			value,
			high,
			low;
		
		while (dateMills < endMills) {
			value = data[dateMills];
			if (typeof value === "number") {
				block.push(dateMills - startMills, value);
			}
			else {
				if (block.length() > 0) {
					blockArray[blockArray.length] = block;
					
					high = Math.max(high || block.high(), block.high());
					low = Math.min(low || block.low(), block.low());
					
					block = new DataBlock();
				}
			}
			
			dateMills = next(date);
		}
		
		/**
		 * last block 마무리
		 */
		value = data[dateMills];
		if (typeof value === "number") {
			block.push(dateMills - startMills, value);
		}
		
		/**
		 * block array 마무리
		 */
		if (block.length() > 0) {
			blockArray[blockArray.length] = block;
			
			high = Math.max(high || block.high(), block.high());
			low = Math.min(low || block.low(), block.low());
		}
		
		this.data = blockArray;
		this.high = high;
		this.low = low;
		
		return this;
	}
}

ChartData.UNIT = 0;
ChartData.HOURS = 1;
ChartData.MINUTES = 2;
ChartData.METHOD = 1;
ChartData.AVG = 1;
ChartData.MAX = 2;
ChartData.MIN = 3;
