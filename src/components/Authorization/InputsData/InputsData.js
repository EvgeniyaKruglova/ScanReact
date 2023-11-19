import React from 'react'
import './InputsData.css'
const InputsData = ({login, password, setLogin, setPassword, error}) => {
  const handlePassword = (event) => {
    setPassword(event.target.value)
  }
  const handleLogin = (evt) => {
    setLogin(evt.target.value)
  }
  const visibility = error ? 'visible' : 'hidden'
  const inputColor = error ? 'red' : '#C7C7C7'
  return (
    <form className='form'>
        <label className='label' htmlFor='login'>Логин или номер телефона:</label>
        <input className='loginInput' onChange={handleLogin} id='login' type='text'/>
        <label className='label' htmlFor='password'>Пароль:</label>
        <input className='loginInput' 
        onChange={handlePassword} 
        id='password' 
        type='password'
        style={{borderColor:inputColor}}/>
        <span className='errText'style={{visibility}}>Неправильный пароль</span>
    </form>
  )
}

export default InputsData
