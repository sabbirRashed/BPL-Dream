import { Suspense } from 'react';
import './App.css'
import Banner from './Components/HomePage/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Players from './Components/HomePage/players/Players';
import { Bars } from 'react-loader-spinner';


const fetchPlayers = async () => {
  const res = await fetch('/player.json');
  return res.json();
}

function App() {

  const playersPromise = fetchPlayers();

  return (
    <div className='w-11/12 max-w-330 mx-auto'>
      <Navbar></Navbar>

      <div className='space-y-20 md:space-y-50'>
        <Banner></Banner>
        <Suspense fallback={<Bars></Bars>}>
          <Players playersPromise={playersPromise}></Players>
        </Suspense>
      </div>

    </div>
  )
}

export default App
