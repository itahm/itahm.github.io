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
	elements = {
		download: document.getElementById("download"),
		reset: document.getElementById("reset"),
		downPng: document.getElementById("down_png"),
		downCsv: document.getElementById("down_csv"),
		date: document.getElementById("date"),
		start: document.getElementById("start"),
		end: document.getElementById("end"),
		detail: document.getElementById("detail"),
	},
	FILE_PNG_NAME = "chart.png";

	manager.connect(chart);
	manager.onchange = function (start, end) {
		elements.start.value = new Date(start).toISOString().slice(0,10);
		elements.end.value = new Date(end).toISOString().slice(0,10);
	};
	
	chart.chart.appendChild(elements.download);
	chart.chart.appendChild(elements.date);
	
	elements.downPng.addEventListener("click", function (e) {
		chart.download();
	}, false);

	elements.downCsv.addEventListener("click", function (e) {
		manager.download();
	}, false);
	
	elements.detail.addEventListener("click", function (e) {
		manager.detail();
	}, false);
	
	elements.reset.addEventListener("mousedown", function (e) {
		e.stopPropagation();
	}, false);
	
	elements.reset.addEventListener("click", function (e) {
		var start = Date.parse(elements.start.value),
			end = Date.parse(elements.end.value);
		
		if (isNaN(start) || isNaN(end)) {
			return;
		}
		
		end = new Date(end);
		end.setHours(0);
		
		manager.setDate(new Date(start).setHours(0), end.setDate(end.getDate() +1));
	}, false);
	
	manager.invalidate();