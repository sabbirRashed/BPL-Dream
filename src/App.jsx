import { Suspense, useState } from 'react';
import './App.css'
import Banner from './Components/HomePage/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Players from './Components/HomePage/players/Players';
import LoadingSpinner from './Components/ui/LoadingSpinner';
import { ToastContainer } from 'react-toastify';
import Footer from './Components/Footer/Footer';


const fetchPlayers = async () => {
  const res = await fetch('/player.json');
  return res.json();
}

function App() {
  const [coin, setCoin] = useState(500000);

  const playersPromise = fetchPlayers();

  return (
    <>
      <div className='w-11/12 max-w-330 mx-auto'>
      <h2>some thing text added</h2>
        <Navbar coin={coin}></Navbar>

        <div className='space-y-20 md:space-y-25'>
          <Banner></Banner>
          <Suspense fallback={<LoadingSpinner></LoadingSpinner>}>
            <Players playersPromise={playersPromise} coin={coin} setCoin={setCoin}></Players>
          </Suspense>
        </div>
      </div>
      <Footer></Footer>

      {/* react tostify */}
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
