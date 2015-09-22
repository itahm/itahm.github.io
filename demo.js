var 
	container = document.querySelector("#chart"),
	chart = new Chart(container, {
		onxvalue: function (value) {
			return value && value.toFixed(2);
		},
		onyvalue: function (value) {
			return value && value.toFixed(2);
		},
		bgcolor: "#fff"
	}),
	data = parseData(createData());

	chart.addData(new ChartData(data.max, {
		capacity: 100,
		fill: "#e0ffff",
		unit: ChartData.HOURS,
		method: ChartData.MAX
	}));
	
	chart.addData(new ChartData(data.min, {
		capacity: 100,
		fill: "#fff",
		option: "cut",
		unit: ChartData.HOURS,
		method: ChartData.MIN
	}));
	
	chart.addData(new ChartData(data.avg, {
		capacity: 100,
		stroke: "#73a4e6",
		width: 2,
		unit: ChartData.HOURS,
		method: ChartData.AVG
	}));

	chart.invalidate();