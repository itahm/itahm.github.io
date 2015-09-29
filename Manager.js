;"use strict";

function Manager() {
}

(function (window, undefined) {

	Manager.getInstance = function (data) {
		return new ChartManager(data);
	};
	
	function ChartManager(data) {
		var
			MODE_FIX = 0,
			MODE_START = 1,
			MODE_END = 2,
			MODE_MOVE = MODE_START | MODE_END,
			HOUR1 = 60 *60 *1000,
			MINUTES1 = 60 *1000,
			MONTH_NAME = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		
		var blockArray,
			map = {},
			start = new Date().setHours(0, 0, 0, 0),
			end = (function(date) {
				return date.setDate(date.getDate() +1);
			})(new Date(start)),
			tpp, low, scale;
			//mode = MODE_START | MODE_END;
		
		this.onchange = function () {}
		
		function getPow() {
			var date = new Date(0),
				gap = GRID_MIN_WIDTH * tpp + date.getTime(),
				pow = 0;
			
			for (; gap > date.setHours(date.getHours() +1); pow++);
			
			return pow;
		}
		
		function setXAxis() {
			var
				date = new Date(start),
				dateMills,
				pow = getPow(),
				dataArray = [];
			
			date.setMinutes(0, 0, 0);
			
			// GRID_MIN_WIDTH 내 둘 이상 들어가는 경우
			if (pow > 0) {
				while ((dateMills = date.setHours(date.getHours() + pow)) < end) {
					dataArray[dataArray.length] = [(dateMills - start) /tpp, format(dateMills)];
				}
			}
			else {
				// GRID_MIN_WIDTH 내 하나씩 들어갈 수 있는 경우
			}
			
			chart.setXAxis(dataArray);
		}
		
		function format(milliseconds) {
			var date = new Date(milliseconds),
				day = date.getDate(),
				hour = date.getHours();
			
			if (day === 1) {
				return MONTH_NAME[date.getMonth()];
			}
			else {
				return MONTH_NAME[date.getMonth()] +" "+ (day > 9? "": "0")+ day +", "+ (hour > 9? "": "0") + hour;
			}
		}
		
		function download(blob, fileName) {	
			if (window.navigator.msSaveBlob) {
				window.navigator.msSaveBlob(blob, fileName);
			}
			else {
				var a = document.createElement("a"),
					event = document.createEvent("Event");
				
				a.setAttribute("download", fileName);
				a.setAttribute("href", URL.createObjectURL(blob));
				
				event.initEvent("click", true, true);
				a.dispatchEvent(event);
			}
		}
		
		function invalidate() {
			var date = new Date(start),
				dateMills = date.setMinutes(0, 0, 0),
				endMills = (function (date) {
					var mills = date.getTime();
					
					if (mills == date.setMinutes(0, 0, 0)) {
						return mills;
					}
					
					return date.setHours(date.getHours() +1);
				})(new Date(end)),
				block = [],
				high, max, min;
			
			// low, scale, blockArray는 직전에 그린 data를 유지하기 위해 전역변수로 둔다.
			blockArray = [block];
			
			while (dateMills <= endMills) {
				if (dateMills in data) {
					block[block.length] = dateMills;
				}
				else if (block.length > 0) {
					block = [];
					blockArray[blockArray.length] = block;
				}
				
				dateMills = date.setHours(date.getHours() +1);
			}
			
			// 마지막 block이 빈 상태로 끝났으면 삭제
			if (block.length === 0) {
				blockArray.splice(blockArray.length -1, 1);
			}
			
			for (var i=0, _i=blockArray.length; i<_i; i++) {
				block = blockArray[i];
				
				max = Math.max.apply(null, block.map(function (key) {return data[key].max;}));
				min = Math.min.apply(null, block.map(function (key) {return data[key].min;}));
				
				high = i == 0? max: Math.max(high, max);
				low = i == 0? min: Math.min(low, min);
			}
			
			chart.clear();
			
			chart.setYAxis(high, low, 100);
			
			//tpp = (end - start) / chart.graphArea.width;
			scale = chart.graphArea.height / (high - low);
			
			setXAxis();
			
			chart.draw({
				capacity: 100,
				fill: "#e0ffff",
				keys: blockArray,
				get: function (key) {
					return {
						x: (key - start) /tpp,
						y: (data[key].max - low) * scale
					}
				}
			});
			
			chart.draw({
				capacity: 100,
				fill: "#fff",
				option: "cut",
				keys: blockArray,
				get: function (key) {
					return {
						x: (key - start) /tpp,
						y: (data[key].min - low) * scale
					}
				}
			});
			
			chart.draw({
				capacity: 100,
				stroke: "#73a4e6",
				width: 2,
				keys: blockArray,
				get: function (key) {
					return {
						x: (key - start) /tpp,
						y: (data[key].avg - low) * scale
					}
				}
			});
		}
		
		this.connect = function (chart) {
			chart.manager = this;
			
			this.invalidate = invalidate;
			
			tpp = (end - start) /chart.graphArea.width;
			
			chart.chart.addEventListener("wheel", function (e) {
				var width = chart.graphArea.width,
					sign = e.deltaY < 0? 1: -1;
				
				for (var i=0; i<20; i++) {
					if (end - start >= HOUR1 * width && sign < 0) {
						return;
					}
					
					end -= tpp * sign;
					start += tpp * sign;
					
					tpp = (end - start) / width;
				}
		
				this.onchange(start, end);
				
				invalidate();
			}.bind(this), false);
			
			new Draggable(chart.chart)
			.on("dragmove", function (event) {
				var move = event.moveX * tpp;
					
				start -= move;
				end -= move;
				
				this.onchange(start, end);
				
				invalidate();
			}.bind(this));
		};
		
		this.detail = function () {
			if (tpp > MINUTES1) {
				alert("itahm could not show you more detailed chart view");
				
				return;
			}
			
			var detail = {},
				block = [],
				blockArray = [block],
				hDate = new Date(start),
				mDate = new Date(start),
				next = hDate.setMinutes(0, 0, 0),
				m = mDate.setSeconds(0, 0),
				value, max, min, avg;

			for (; next < end; next = hDate.setHours(hDate.getHours() +1)) {
				if (next in data) {
					value = data[next];
					
					avg = value.avg;
					max = value.max;
					min = value.min;
					
					while(m < next) {
						detail[m] = min + Math.random() * (max - min);
						block[block.length] = m;
						m = mDate.setMinutes(mDate.getMinutes() +1);
					}
				}
			}
			
			chart.draw({
				capacity: 100,
				stroke: "#f00",
				width: .5,
				keys: blockArray,
				get: function (key) {
					return {
						x: (key - start) /tpp,
						y: (detail[key] - low) * scale
					}
				}
			});
		},
		
		this.resize = function () {
			tpp = (end - start) / chart.graphArea.width;
			
			invalidate();
		}
		
		this.setDate = function (startDate, endDate) {
			start = startDate;
			end = endDate;
			tpp = (end - start) /chart.graphArea.width;
			
			invalidate();
		},
		
		this.download = function () {
			var row = ["index,date,max,avg,min"],
				block, date, dateMills, value;
			
			for (var i=0, _i=blockArray.length, j, _j; i<_i; i++) {
				block = blockArray[i];
				
				for (j=0, _j=block.length; j<_j; j++) {
					dateMills = block[j];
					date = new Date(dateMills);
					value = data[dateMills];
					
					row[row.length] = j + ","+ date.toISOString().slice(0, 10) + " "+ date.toTimeString().slice(0, 8) +","+ value.max +","+ value.avg +","+ value.min;
				}
			}
			
			//download(new Blob([encodeURI(row.join("\n"))], { type: "text/csv;charset=utf-8;"}), "chart.csv");
			download(new Blob([row.join("\n")], { type: "text/csv;charset=utf-8;"}), "chart.csv");
		};
	}
	
})(window);	