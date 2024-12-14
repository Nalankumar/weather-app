import {useState} from 'react'
import Day from './../assets/weather_svg/static/day.svg'
import Rainy from './../assets/weather_svg/static/rainy-1.svg'
export default function Weather(){
	const url = "http://api.weatherapi.com/v1"
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
			console.log(data);
			setWeather(data);
			setTemp(data.current.temp_c);
			setHumidity(data.current.humidity);
			setPressure(data.current.pressure_in);
			setWindSpeed(data.current.wind_kph)
			setStatus(data.current.condition.text);
			console.log(status);
		});
	}

	useState(()=>{
		getData();
	},[])

	return(
		<div className="flex flex-col items-center justify-evenly rounded-md h-[50vh] w-[90vw] md:h-[70vh] md:w-[40vw] bg-slate-300/75">
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
			<div className="w-10 h-10 flex flex-col justify-center items-center">
				<p className="text-xl">{city}</p>
				<p>{status}</p>
				<img src={Day} className="" alt="day" />
				<span>{temp}c</span>
				
				
			</div>
			<div className="flex justify-between">
				<div className="flex flex-col items-center p-10">
						<img src={Rainy} className="h-12 w-12" alt="humidity" />
						<span>{humidity}</span>
						<p>Humidity</p>
					</div>
					<div className="flex flex-col items-center p-10">
						<img src={Rainy} className="h-12 w-12" alt="pressure" />
						<span>{pressure} in</span>
						<p>Pressure</p>
					</div>
					<div className="flex flex-col items-center p-10">
						<img src={Rainy} className="h-12 w-12" alt="wind speed" />
						<span>{windSpeed} kph</span>
						<p>Wind Speed</p>
					</div>
			</div>
			
			{/* Base */}

			<a
			  className="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
			onClick={() =>{ getData() }}>
				Get weather  
			</a>

{/* Border */}

{/*<a
  className="inline-block rounded border border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
  href="#"
>
  Download
</a>*/}
		</div>
		);
}