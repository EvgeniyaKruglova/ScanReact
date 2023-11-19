import React from 'react';
import './MainPage.css';
import Description from './Description';
import MainCarousel from './MainCarousel';
import manWithTick from './bigMan.svg'
import Tariffs from './Tariffs';


const MainPage = () => {
  return (
    <main className='main'>
      <div className='main__wrapper_common'>
        <Description />
        <MainCarousel />
              <img className='bigMan' src={manWithTick} alt='bigMan' />
        <Tariffs />
      </div> 
    </main>
  )
}

export default MainPage
