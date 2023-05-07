import React from 'react';
import Cards from './Cards'
import {Data} from '../helpers/Data';
import { useState } from 'react';
import FilterImg from '../assets/filterImg.png';
import Calendar from '../assets/Calendar.png'

const Hero = () => {
  const [checkedValues, setCheckedValues] = useState([])
  const filterChangeFunc = function filterChange(event){
   const {value,checked} = event.target
   if(checked){
     setCheckedValues(pre => [...pre,value])
   }else{
     setCheckedValues(pre=>{
       return [...pre.filter(skill=> skill!==value)]
     })
   }
 }
  return (
    <div>
        <div className='section'>
      <div className='filter'>
        <img src={FilterImg} alt="" />  <span>Filtreler</span>
        <div className="inputs">
        </div>
      </div>
      <div className='calendar'> <img src={Calendar} alt="" /> Takvimde Gör</div>
    </div>
            {
            Data.map((cardItem,index)=>{
        return(
          <Cards
          key={index}
          image={cardItem.image}
          title={cardItem.title}
          content={cardItem.content}
          date={cardItem.date}
          explanation={cardItem.explanation}
          location={cardItem.location}
          color={cardItem.color}
          bgColor={cardItem.bgColor}
          dateDay={cardItem.dateDay}
          dateTime={cardItem.dateTime}
          dateMonth={cardItem.dateMonth}
          explanationResp={cardItem.explanationResp}
          />
          
        )
      })}

    </div>
  )
}

export default Hero
