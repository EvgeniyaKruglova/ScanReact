import React from 'react'
import './Authorization.css'
import peopleWithKey from './peopleWithKey.svg';
import lock from './lock.svg';
import FormAccess from './FormAccess';
import { useSelector } from 'react-redux';

const Authorization = () => {
  const newWidth = useSelector(state => state.app.width)
  
  const isShown = newWidth < 1270 ? true : false;
  return (
    <main className='main'>
      <div className='main-auth'>
        <div className='main__leftBox'>
          <h1 className='main__title'>Для оформления подписки на тариф, необходимо авторизоваться.</h1>
          <img className='main__image' src={peopleWithKey} alt='peopleWithKey' hidden={isShown}/>
        </div>
        <div className='main__rightBox'>
          <img className='main__lock' src={lock} alt='lock' />
          <FormAccess />
        </div>
        <img className='main__image' src={peopleWithKey} alt='peopleWithKey' hidden={!isShown}/>
      </div>
    </main>
  )
}

export default Authorization
