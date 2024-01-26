import React from 'react';
import Lottie from "../assets/Lottie/home_page_lottie.json";
import { Player } from '@lottiefiles/react-lottie-player';

const Home = () => {
  return (
    <main className='w-full'>
        <div className='flex flex-col justify-center container'>
            <nav className='w-full p-5 bg-amber-300 text-white items-center'>
                <div className='flex flex-row justify-between px-4'>
                    <h1 className='font-semibold text-3xl'>Cartify</h1>
                    <div className='justify-evenly gap-4'>
                        <a>Support</a>
                        <a>Products</a>
                        <a>Docs</a>
                    </div>
                    <h1 className='font-semibold text-2xl'>Get Started</h1>
                </div>
            </nav>
        </div>

        {/* end of nav */}

        <div className='bg-amber-200 text-black px-4 pb-5 w-full h-3/4'>
            <div className='flex-1 sm:flex flex-column sm:flex-row'>
                <div className='sm:w-1/2'> 
                    <h1 className='font-medium text-9xl break-all text-amber-800'>Future of <br></br><span className='text-8xl font-bold sm:text-9xl'>Shopping</span><br></br>Lists...</h1>
                    <div className='flex flex-row justify-start gap-5 mx-3 pt-10'>
                        <button className=' border bg-clip-border p-4'>Play Store</button>
                        <button className=' border bg-clip-border p-4'>Apple Store</button>
                        <button className=' border bg-clip-border p-4'>Get APK</button>
                    </div>
                </div>
                <div className='sm:w-1/2'>
                {/* <img src={Lottie} alt='cartify' className="w-fu"/> */}
                    {/* If You Want To Use Lottie Player */}
                     <Player
                        src={Lottie}
                        className="w-3/4 h-1/2"
                        loop
                        autoplay
                        />                
                </div>
            </div>
        </div>

    </main>
  )
}

export default Home