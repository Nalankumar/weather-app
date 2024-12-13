import {useState} from 'react'
export default function Weather(){
	const url = "http://api.weatherapi.com/v1"
	const [weather,setWeather] = useState({})
	const [city, setCity] = useState("");
	const getData = async ()=>{
		const data = await fetch(`${url}/current.json?key=${import.meta.env.VITE_API_KEY}&q=${city}`)
		.then((res)=>{ return res.json()})
		.then(data => {console.log(data);
			setWeather(data);
		});
	}
	return(
		<div className="h-[50vh] w-[90vw] md:h-[25vh] md:w-[25vw]">
<label
  htmlFor="UserEmail"
  className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
>
  <input
    type="email"
    id="UserEmail"
    placeholder="Email"
    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
  	onChange={
  		(e) => {
  				e.preventDefault();
  		  		setCity(e.target.value)
  		  	}
  		  }
  />

  <span
    className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
  >
    Email
  </span>
</label>
			<button onClick={() =>{ getData()}}>click me</button>
		</div>
		);

}