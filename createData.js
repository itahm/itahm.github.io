function createData() {
	var data = {},
		end = new Date().setMinutes(0, 0, 0),
		start = (function () {
			var date = new Date(end);
			
			return date.setFullYear(date.getFullYear() -1);
		})(),
		date = new Date(start),
		dateMills,
		i=0,
		def = [20,20,20,20,20,20,20,20,30,40,60,80,50,40,50,60,80,70,50,40,40,30,20,20];
	
	var avg, max, min;
	while ((dateMills = date.getTime()) < end) {
		avg = def[i++ %24] + (Math.random() *10 -5);
		avg = Number(avg.toFixed(2));
		max = Number(Math.min(100, avg + Math.random() * 20).toFixed(2));
		min = Number(Math.max(0, avg - Math.random() * 20).toFixed(2));
		if (max < avg || min > avg) {
			console.log (max, avg, min);
		}
		data[dateMills] =  {
			avg: avg,
			max: max,
			min: min
		};
		
		date.setHours(date.getHours() +1);
	}
	
	return data;
}