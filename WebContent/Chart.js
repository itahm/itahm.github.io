;"use strict";

var
	MINUTES1 = 60000,
	HOURS1 = 3600000,
	HOURS24 = 86400000,
	GRID_MIN_WIDTH = 100,
	GRID_MIN_HEIGHT = 50,
	SUMMARY_MIN_PX = 1,
	PADDING = 20,
	MARGIN = 5,
	FONT_SIZE = 14,
	MODE_FIX = 0,
	MODE_START = 1,
	MODE_END = 2,
	MODE_MOVE = MODE_START | MODE_END,
	BG_COLOR = "#ffffff",
	MONTH_NAME = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function Chart(container, config) {
	this.init(container, config);
}

function format(milliseconds, option) {
	var date = new Date(milliseconds),
		day = date.getDate();
	
	return MONTH_NAME[date.getMonth()] +" "+ (day > 9? "": "0")+ day +", "+ date.getHours();
}

(function (window, undefined) {
	
	function setYAxis(chart, high, low, capacity) {
		var count = Math.floor(chart.graphArea.height /GRID_MIN_HEIGHT),
			axisGap = chart.graphArea.height / (count -1),
			valueGap = (high - low) / count,
			context = chart.context,
			grid = chart.grid.getContext("2d"),
			max = context.measureText(chart.onxvalue(max)).width,
			textArray = [],
			width = chart.graphArea.width,
			text,
			y = PADDING,
			y2,
			x1 = PADDING,
			x2 = chart.canvas.width - (PADDING + chart.axisRightWidth);
		
		for (var i=0; i<count; i++) {
			value = low + valueGap * i;
			text = chart.onyvalue(value);
			textArray[i] = [text, (value / capacity *100).toFixed(2) +"%"];
			max = Math.max(max, context.measureText(text).width);
		}
		
		x1 += max;
		
		context.save();
		//context.lineWidth = .5;
		context.textBaseline = "middle";
		context.textAlign = "right";
		
		for(; count-- > 0; y += axisGap) {
			y2 = Math.round(y);
			
			context.save();
			context.textAlign = "left";
			context.fillText(textArray[count][1], x2, y2);
			context.restore();
			
			grid.moveTo(x1, y2 -.5);
			grid.lineTo(x2, y2 -.5);	
			
			context.fillText(textArray[count][0], x1, y2);
		}
		
		context.restore();
		
		
		grid.save();
		grid.strokeStyle = "#ddd";
		grid.lineWidth = 1;
		grid.globalAlpha = .2;
		grid.stroke();
		grid.restore();
		
		drawAxis(chart, x1, x2);
		
		chart.axisLeftWidth = max;
	}

	function drawAxis(chart, x1, x2) {
		var context = chart.grid.getContext("2d"),
			y1 = PADDING,
			y2 = PADDING + chart.graphArea.height;
			
		x1 += (MARGIN -1);
		x2 += (-MARGIN -1);
		
		context.beginPath();
		context.moveTo(x1, y1);
		context.lineTo(x1, y2);
		context.moveTo(x2, y1);
		context.lineTo(x2, y2);
		context.stroke();
	}

	function init(chart) {
		var context;
		
		context = chart.context;
		context.font = FONT_SIZE +"px tahoma, arial, '맑은 고딕'";
		
		conterxt = chart.grid.getContext("2d");
		conterxt.lineWidth = 2;
		conterxt.strokeStyle = "#73a4e6";
	}
	
	function getFile(data, startMills, endMills) {
		var file = [],
			date = new Date(startMills),
			dateMills = date.setSeconds(0, 0),
			index=0, value;
	
		file[0] = "index,date,value";
		
		while (dateMills < endMills) {
			value = data[dateMills];
			
			if (value) {
				file[file.length] = index++ +","+ date.toISOString().slice(0, 10) + " "+ date.toTimeString().slice(0, 8) +","+ value;
			}
			
			dateMills = date.setMinutes(date.getMinutes() +1);
		}
		
		return "data:text/csv;charset=utf-8,"+ encodeURI(file.join("\n"));
	}
	
	function getSummaryFile(data, startMills, endMills) {
		var file = [],
			date = new Date(startMills),
			dateMills = date.setMinutes(0, 0, 0),
			index=0, value;
		
		file[0] = "index,date,max,avg,min";
		
		while (dateMills < endMills) {
			value = data[dateMills];
			
			if (value) {
				file[file.length] = index++ +","+ date.toISOString().slice(0, 10) + " "+ date.toTimeString().slice(0, 8) +","+ value.max +","+ value.avg +","+ value.min;
			}
			
			dateMills = date.setHours(date.getHours() +1);
		}
	
		return "data:text/csv;charset=utf-8,"+ encodeURI(file.join("\n"));
	}
	
	function setGraphWidth(chart) {
		return chart.graphArea.width = Math.max(0, chart.canvas.width - (chart.axisLeftWidth + chart.axisRightWidth + PADDING *2 + MARGIN *2));
	}
	
	/**
	 * top 에는 margin 없음
	 */
	function setGraphHeight(chart) {
		return chart.graphArea.height = chart.canvas.height - (chart.axisBottomHeight + PADDING *2 + MARGIN);
	}
	
	function drawGraph(chart, canvas) {
		chart.context.drawImage(canvas, PADDING + chart.axisLeftWidth + MARGIN, PADDING);
	}
	
	function cutGraph(chart, canvas) {
		chart.context.save();
		chart.context.globalCompositeOperation = "destination-out";
		chart.context.drawImage(canvas, PADDING + chart.axisLeftWidth + MARGIN, PADDING);
		chart.context.restore();
	}
	
	function saveChart(chart) {
		chart.lastImage = chart.context.getImageData(0, 0, chart.canvas.width, chart.canvas.height);
		chart.context.drawImage(chart.grid, 0, 0);
	}
	
	function clear(chart) {
		var width = chart.canvas.width,
			height = chart.canvas.height;
		
		chart.context.save();
		
		chart.context.setTransform(1, 0, 0, 1, 0, 0);
		chart.context.clearRect(0, 0, width, height);
		
		chart.context.restore();
		
		chart.grid.getContext("2d").clearRect(0, 0, width, height);
	}

	Chart.prototype = {
		init: function (container, config) {
			config = config || {};
			
			this.chart = document.createElement("div");
			this.canvas = document.createElement("canvas");
			this.grid = document.createElement("canvas");
			this.context = this.canvas.getContext("2d");
			this.graphArea = {};
			
			this.axisRightWidth = this.context.measureText("100.00%").width;
			this.axisBottomHeight = FONT_SIZE;
			this.ondrag = config.ondrag || function () {};
			this.onxvalue = config.onxvalue || function (value) {
				return value;
			};
			this.onyvalue = config.onyvalue || function (value) {
				return value;
			};
			this.chart.appendChild(this.canvas);
			this.chart.className = "chart";
			
			if (container) {
				this.attachTo(container);
			}
		},
		
		resize: function () {
			var rect = this.chart.getBoundingClientRect(),
				width = Math.max(rect.width, PADDING *2),
				height = Math.max(rect.height, PADDING *2);
			
			this.canvas.width = width;
			this.canvas.height = height;
			this.grid.width = width;
			this.grid.height = height;
			
			setGraphWidth(this);
			setGraphHeight(this);
			
			init(this);
		},
		
		attachTo: function (container) {
			var event = document.createEvent("Event");
			
			container.appendChild(this.chart);
			
			this.resize();
			
			this.manager = new Manager(this);
			
			event.initEvent("resize", true, true);
			
			window.dispatchEvent(event);
			
			window.addEventListener("resize", function () {
				this.resize();
				
				this.invalidate();
			}.bind(this), false);
		},
		
		addData: function (chartData) {
			this.manager.addData(chartData);
		},
		
		clearData: function () {
			this.manager.clearData();
		},
		
		/**
		 * 
		 * @param chartData ChartData
		 * @param tpp time per pixel in milliseconds
		 */
		draw: function (chartData, tpp) {
			var blockArray = chartData.data,
				canvas = document.createElement("canvas"),
				context = canvas.getContext("2d"),
				low = this.low,
				fill = chartData.fill,
				stroke = chartData.stroke,
				xscale, block, index, length;
			
			canvas.width = this.graphArea.width;
			canvas.height = this.graphArea.height;
			
			context.setTransform(1, 0, 0, -1, 0, this.graphArea.height);
			
			scale = this.graphArea.height / (this.high - low);
			
			for (var i=0, _i=blockArray.length; i<_i; i++) {
				block = blockArray[i];
				
				context.beginPath();
				
				for (index=0, length = block.length(); index<length; index++) {
					context.lineTo(block.getX(index) / tpp, (block.getY(index) - low) * scale);
				}
				
				if (fill) {
					context.lineTo(block.getX(length -1) / tpp, 0);
					context.lineTo(block.getX(0) / tpp, 0);
					context.closePath();
					
					context.fillStyle = fill;
					context.fill();
				}
				
				if (stroke) {
					context.strokeStyle = stroke;
					context.lineWidth = chartData.width;
					context.stroke();
				}
			}
			
			if (fill && chartData.option === "cut") {
				cutGraph(this, canvas);
			}
			else {
				drawGraph(this, canvas);
			}
			
			saveChart(this);
		},
		
		setYAxis: function(high, low, capacity) {
			if (high == low) {
				++high;
				Math.max(0, --low);
			}
			
			this.high = high;
			this.low = low;
			
			setYAxis(this, high, low, capacity);
			
			setGraphWidth(this);
		},
		
		setXAxis: function(x, value) {
			this.context.save();
			this.context.textBaseline = "top";
			this.context.textAlign = "center";
			this.context.setTransform(1, 0, 0, 1, PADDING + this.axisLeftWidth + MARGIN, PADDING + this.graphArea.height + MARGIN);
			this.context.fillText(value, x, 0);
			this.context.restore();
		},
		
		clear: function () {
			clear(this);
		},
		
		invalidate: function () {
			this.manager.invalidate();
		}
		
	};
	
	Chart.toDateString = function (date) {
		var year = date.getFullYear();
		var month = date.getMonth() + 1;
		var date  = date.getDate();
		
		return year +"-"+ (month > 9? "": "0") + month +"-"+ (date > 9? "": "0") + date;
	};
	
}) (window);