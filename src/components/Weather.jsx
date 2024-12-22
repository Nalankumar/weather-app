import {useState} from 'react'
import Day from './../assets/weather_svg/static/day.svg'
import Rainy from './../assets/weather_svg/static/rainy-1.svg'
import Humidity from './../assets/humidity.svg'


export default function Weather(){
	const url = "https://api.weatherapi.com/v1"
	const [weather,setWeather] = useState({})
	const [city, setCity] = useState("chennai");
	const [temp, setTemp] = useState(0);
	const [humidity, setHumidity] = useState(0);
	const [status, setStatus] = useState("")
	const [windSpeed, setWindSpeed] = useState(0)
	const [pressure, setPressure] = useState(0)
	const getData = async ()=>{
		const data = await fetch(`${url}/current.json?key=${import.meta.env.VITE_API_KEY}&q=${city}`)
		.then((res)=>{ return res.json()})
		.then(data => {
			setWeather(data);
			setTemp(data.current.temp_c);
			setHumidity(data.current.humidity);
			setPressure(data.current.pressure_in);
			setWindSpeed(data.current.wind_kph)
			setStatus(data.current.condition.text);
		});
	}

	useState(()=>{
		getData();
	},[])

	return(
		<div className="flex flex-col items-center justify-evenly rounded-md h-[60vh] w-[90vw] md:h-[70vh] md:w-[40vw] bg-card_bg">
			<label
			  htmlFor="city"
			  className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
			>
			  <input
			    type="city"
			    id="city"
			    placeholder="City"
			    value={city}
			    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
			  	onChange={
			  		(e) => {
			  				e.preventDefault();
			  		  		setCity(e.target.value)
			  		  	}
			  		  }
			  />

			  <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
			    City
			  </span>
			</label>
			<div className="w-full flex flex-col justify-center items-center">
				<p className="text-xl font-bold">{city}</p>
				<p className="font-semibold">{status}</p>
				<img src={Day} className="" alt="day" />
				<span>{temp}℃</span>
				
				
			</div>
			<div className="flex justify-between">
				<div className="flex flex-col items-center p-4 md:p-8">
						<img src={Humidity} className="h-12 w-12" alt="humidity" />
						<span>{humidity} %</span>
						<p className="text-xs">Humidity</p>
					</div>
					<div className="flex flex-col items-center p-4 md:p-8">
						{/*<img src={Rainy} className="h-12 w-12" alt="pressure" />*/}
						<img   className="h-12 w-12" alt="pressure" src="https://img.icons8.com/color/48/atmospheric-pressure.png" alt="atmospheric-pressure"/>
						<span>{pressure} in</span>
						<p className="text-xs">Pressure</p>
					</div>
					<div className="flex flex-col items-center p-4 md:p-8">
						<img src={Rainy} className="h-12 w-12" alt="wind speed" />
						<span>{windSpeed} kph</span>
						<p className="text-xs">Wind Speed</p>
					</div>
			</div>
			<a
			  className="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
			onClick={() =>{ getData() }}>
				Get weather  
			</a>
		</div>
		);
}