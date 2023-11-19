import React from 'react';
import './SearchOutputPage.css';
import aim from './womenAim.svg';
import { useSelector } from 'react-redux';
import DocumentsList from './DocumentsList';
import ResultCarouselDesktop from './ResultCarousel/ResultCarouselDesktop';
import ResultCarouselMobile from './ResultCarousel/ResultCarouselMobile';
import LoaderInfo from '../Header/AfterAllauth/LoaderInfo/LoaderInfo';

const SearchOutputPage = () => {
  let fundedDocs = useSelector(state => state.histograms.histogramInfo)
  const newWidth = useSelector(state => state.app.width)
  const isMobile = newWidth < 700
  const ChosenCarousel = isMobile ? ResultCarouselMobile : ResultCarouselDesktop
  const isChosenCarousel = fundedDocs ? <ChosenCarousel /> : <LoaderInfo />
  return (
      <main className='searchOutputPage'>
         <div className='searchOutputPage'>  
             <div className='searchOutputPage'>
          <div className='upper__box'>
            <h1 className='upper__title'>Ищем. Скоро будут результаты</h1>
            <section>Поиск может занять некоторое время, просим сохранять терпение.</section>
          </div>
          <div className='img__box'>
            <img src={aim} alt='aim'/>
          </div>
        </div>
        <div className='resultMain__middle'>
          <div className='upper__box'>
            <h1 className='upper__title upper__title_middle'>Общая сводка</h1>
              <section className='searchOutputPage__section'>Найдено {fundedDocs?.length||0} варианта(ов)</section>
          </div>
          {isChosenCarousel}
        </div>
        <div className='resultMain__lower'>
          <div className='lower__box'>
            <h1 className='upper__title upper__title_middle'>cписок документов</h1>
            <DocumentsList />
          </div>
        </div>
      </div>  
    </main>
  )
}

export default SearchOutputPage
