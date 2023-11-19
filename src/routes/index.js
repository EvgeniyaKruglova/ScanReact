import React from "react";
import CommonAccessMain from "../components/MainPage";
import {Navigate, Route,Routes} from "react-router-dom";
import Authorization from "../components/Authorization/Authorization";
import SearchPageMain from "../components/SearchPageMain/SearchPageMain";
import SearchOutputPage from "../components/SearchOutputPage/SearchOutputPage";
import { useSelector } from "react-redux";
const AppRoutes = () => {
  let companyInfo = useSelector(state => state.profile.companyInfo)
  return companyInfo ? (
        <Routes> 
          <Route path="/" element={<CommonAccessMain />}/>
          <Route path="/search" element={<SearchPageMain/>}/>
          <Route path="/result" element={<SearchOutputPage/>}/>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes> 
  ) : (
    <Routes>
        <Route path="/" element={<CommonAccessMain />}/>
        <Route path="/login" element={<Authorization/>} />
        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}


export default AppRoutes
