import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Address from "../assets/Address.png";
import Button from 'react-bootstrap/Button';
import Add from '../assets/add.png';
import Added from '../assets/Added.png';


const Cards = ({ title, image, explanation, explanationResp, location, date, content, color, bgColor, dateDay, dateMonth, dateTime, }) => {
const [addCalendar,setAddCalendar] = useState('Takvime Ekle')
const [addCalendarImg,setAddCalendarImg] = useState(Add)


const handleSubmit=()=>{
  setAddCalendar('Takvime Eklendi')
  setAddCalendarImg(Added)
}
const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const ReadMoreToggle = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="readMore">
      {isReadMore ? text.slice(0, 145) : text}
      <span onClick={ReadMoreToggle} className="read-or-hide">
        {isReadMore ? " ...Detaylı Bilgi" : ""}
      </span>
    </p>
  );
};
const ReadMoreRes = ({ children }) => {
  const text = children;
  const [isReadMoreRes, setIsReadMoreRes] = useState(true);
  const ReadMoreResToggle = () => {
    setIsReadMoreRes(!isReadMoreRes);
  };
  return (
    <p className="readMoreRes">
      {isReadMoreRes ? text.slice(0, 20) : text}
      <span onClick={ReadMoreResToggle} className="read-or-hide">
        {isReadMoreRes ? " ...Detaylı Bilgi" : ""}
      </span>
    </p>
  );
};

return (
    <div className="container cards">

      <Card>
        <div className="cardBgBlack"></div>
        <div className="cardsContainer">
          <div className="cardDate" style={{ color: `${color}` }}>
            <p>{date}</p>
            <p>{dateMonth}</p>
            <p>{dateDay}</p>
            <p>{dateTime}</p>
          </div>
          <div className="cardImage">
            <img src={image} alt="" ></img>
            <div className="cardContent" style={{ backgroundColor: `${bgColor}` }}>{content}</div>
          </div>
          <div className="cardInfo">
        <h6 className="cardTitle">{title}</h6>
        <p className="cardLocation"><img className="cardAddressImg" src={Address} alt="" />{location}</p>
        <p className="cardExp">
        <ReadMore>{explanation}</ReadMore>
        <ReadMoreRes>{explanationResp}</ReadMoreRes>
      </p>
        </div>
        <div className="cardClicks">
        <Button className="cardButtonBuy">Bilet Al</Button>
        <Button className="cardButtonCalendar" onClick={handleSubmit}><img src={addCalendarImg} alt="" />{addCalendar}</Button>
        </div>
        </div>
      </Card>
    </div>
  );
};

export default Cards;
