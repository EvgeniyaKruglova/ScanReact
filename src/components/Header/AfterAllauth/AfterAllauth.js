import React from 'react';
import CompanyInfo from './CompanyInfo/CompanyInfo';
import Avatar from './Avatar/Avatar';
import LoaderInfo from './LoaderInfo/LoaderInfo';
import './AfterAllauth.css'
import { useSelector } from 'react-redux';

const AfterAllauth = () => {

const companyInfo = useSelector(state => state.profile.companyInfo)
return (
    <div className='panel'>      
      {companyInfo ? <CompanyInfo /> : <LoaderInfo />}
      <Avatar />
    </div>
  )
}

export default AfterAllauth
