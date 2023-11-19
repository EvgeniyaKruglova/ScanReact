import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dropDocumentsInfo, getDocuments } from '../../../store/slices/histograms'
import './DocumentsList.css'
import {convertDocObjectToCard} from '../../../functions/convertDocObjectToCardInfo'
import Badge from 'react-bootstrap/Badge';

const DocumentsList = () => {
  const {publicationIds, documents} = useSelector(state => ({
    publicationIds: state.histograms.publicationIds,
    documents: state.histograms.documents
  }))

  const dispatch = useDispatch();
  const [offSet, setOffSet] = useState(0);
  useEffect(()=>{
    if(publicationIds.length){
      const idsForRequest = publicationIds.slice(offSet,  offSet+10)
      if(idsForRequest.length) {
        dispatch(getDocuments({ids:idsForRequest}))
      }
    }
  },[publicationIds,dispatch,offSet])

  if(!documents.length) {
    return null
  }
  const docs = convertDocObjectToCard(documents)
  const showTenArticles = () => {
    const idsForRequest = publicationIds.slice(offSet, 10);
    setOffSet((offSet)=>offSet+10)
  }
  let isDone = documents.length >= publicationIds.length
  return (
    <>
    <div className='documentsList__wrapper'>
    {docs.map((obj, ind)=>
    
     <div className='documentsList__content' key={ind}>
           <div className='documentsList__dateArticle'>
               <span className='documentsList__span'>{obj.date}</span>
          <a 
             className='documentsList__article'
          href={obj.articleUrl}>{obj.articleUrlTitle}
          </a>
        </div>
            <h4 className='documentsList__title'>{obj.articleTitle}</h4>
        {obj.articleTags && obj.articleTags.map(tag => (
          <Badge bg="warning" text="dark" key={tag}>{tag}</Badge>
        ))}
            {obj.imageUrl && <img className='documentsList__img' src={obj.imageUrl} alt='article pic' />}
        <div dangerouslySetInnerHTML={{ __html: obj.articleContent }} />
            <div className='documentsList__buttonBox'>
          <form action={obj.articleUrl} target="_blank"> 
               <button className='documentsList__button'>Читать источник</button>
          </form>
                <section className='documentsList__section'>{obj.wordCount} слов&lang;а&rang;</section>
        </div>
    </div>         
      )}
  </div>
  <div className='adjustBox'>
              {!isDone && <button onClick={showTenArticles} className='documentsList__showBtn'>Показать больше</button>}
  </div>
  
  </>
)
}

export default DocumentsList
