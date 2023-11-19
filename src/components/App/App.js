import './App.css';
import React, {useEffect} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { setScreenWidth } from '../../store/slices/app';
import { useDispatch, useSelector } from 'react-redux';
import { getCompanyInfo } from '../../store/slices/profile';
import AppRoutes from '../../routes'


function App() {
  const companyAmauntInfo = useSelector(state => state.profile.companyInfo);
  const dispatch = useDispatch()
  const handleResize = () => {
    dispatch(setScreenWidth(window.innerWidth))
  }
  useEffect(()=>{
    window.addEventListener('resize', handleResize)
  })
  useEffect(()=>{
    const accessToken = localStorage.getItem('accessToken');
      if (accessToken && !companyAmauntInfo){
      dispatch(getCompanyInfo())
    }
  }, [dispatch, companyAmauntInfo])
  return (
    <div>
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
