var 
	container = document.querySelector("#chart"),
	manager = Manager.getInstance(createData()),
	chart = new Chart(container, {
		title: "processor load (%)",
		onxvalue: function (value) {
			return value && value.toFixed(2);
		},
		onyvalue: function (value) {
			return value && value.toFixed(2);
		},
		bgcolor: "#fff"
	}),
	downPng = document.getElementById("down_png"),
	downCsv = document.getElementById("down_csv"),
	FILE_PNG_NAME = "chart.png";

	manager.connect(chart);
	chart.chart.appendChild(setting);
	
	downPng.addEventListener("click", function (e) {
		chart.download();
	}, false);

	downCsv.addEventListener("click", function (e) {
		manager.download();
	}, false);
	
	manager.invalidate();