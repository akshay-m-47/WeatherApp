const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b35025c8d1mshd4b28c032113469p1fbe6bjsn5b11b67e4657',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city)=>{
	cityName.innerHTML=city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		cloud_pct.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp
		temp2.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		humidity2.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		wind_speed2.innerHTML = response.wind_speed
		// wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
	})
	.catch(err => console.error(err));
}
	submit.addEventListener('click',(e)=>{
		e.preventDefault()
		getWeather(city.value)
	})

	getWeather('Delhi')

	//Mumbai weather
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		a.innerHTML = response.cloud_pct
		b.innerHTML = response.temp
		c.innerHTML = response.feels_like
		d.innerHTML = response.humidity
		e.innerHTML = response.min_temp
		f.innerHTML = response.max_temp
		g.innerHTML = response.wind_speed
		h.innerHTML = response.wind_degrees
		i.innerHTML = response.sunrise
		j.innerHTML = response.sunset
	})
	.catch(err => console.error(err));

	//Nagpur weather
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Nagpur', options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		a1.innerHTML = response.cloud_pct
		b1.innerHTML = response.temp
		c1.innerHTML = response.feels_like
		d1.innerHTML = response.humidity
		e1.innerHTML = response.min_temp
		f1.innerHTML = response.max_temp
		g1.innerHTML = response.wind_speed
		h1.innerHTML = response.wind_degrees
		i1.innerHTML = response.sunrise
		j1.innerHTML = response.sunset
	})
	.catch(err => console.error(err));

	//Kolkata weather
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		a2.innerHTML = response.cloud_pct
		b2.innerHTML = response.temp
		c2.innerHTML = response.feels_like
		d2.innerHTML = response.humidity
		e2.innerHTML = response.min_temp
		f2.innerHTML = response.max_temp
		g2.innerHTML = response.wind_speed
		h2.innerHTML = response.wind_degrees
		i2.innerHTML = response.sunrise
		j2.innerHTML = response.sunset
	})
	.catch(err => console.error(err));

	//Banglor weather
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Banglor', options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		a3.innerHTML = response.cloud_pct
		b3.innerHTML = response.temp
		c3.innerHTML = response.feels_like
		d3.innerHTML = response.humidity
		e3.innerHTML = response.min_temp
		f3.innerHTML = response.max_temp
		g3.innerHTML = response.wind_speed
		h3.innerHTML = response.wind_degrees
		i3.innerHTML = response.sunrise
		j3.innerHTML = response.sunset
	})
	.catch(err => console.error(err));

	//Delhi weather
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		a4.innerHTML = response.cloud_pct
		b4.innerHTML = response.temp
		c4.innerHTML = response.feels_like
		d4.innerHTML = response.humidity
		e4.innerHTML = response.min_temp
		f4.innerHTML = response.max_temp
		g4.innerHTML = response.wind_speed
		h4.innerHTML = response.wind_degrees
		i4.innerHTML = response.sunrise
		j4.innerHTML = response.sunset
	})
	.catch(err => console.error(err));

