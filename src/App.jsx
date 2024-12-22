import Weather from './components/Weather.jsx'
function App() {
  return (
    
    <div className="h-screen w-screen flex flex-col justify-evenly items-center bg-backGround font-poppins">
      <h1 className="text-3xl font-bold">Weather App</h1>
      <Weather />
    </div>
  
  )
}

export default App
