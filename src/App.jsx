import './App.css'
import Banner from './Components/HomePage/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'


function App() {

  return (
    <div className='max-w-330 mx-auto'>
      <Navbar></Navbar>
      <Banner></Banner>

      <h2 className='text-5xl font-bold-'>Hello world!</h2>
    </div>
  )
}

export default App
