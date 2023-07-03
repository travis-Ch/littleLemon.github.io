import React from 'react'
import { useState } from 'react';


const DateErrorMessage = () => { 
 return ( 
   <p className="FieldError">Please choose a day</p> 
 ); 
}; 

const TimeErrorMessage = () => { 
 return ( 
   <p className="FieldError">Please choose the time</p> 
 ); 
}; 
const QuestErrorMessage = () => { 
 return ( 
   <p className="FieldError">Please enter number of quests</p> 
 ); 
}; 

const timeList = [
     "Choose time",
     "17:00",
     "18:00",
     "19:00",
     "20:00",
     "21:00",
     "22:00",
  ]

export const FormComponent = ({availableTimes,setAvailableTimes}) => {
  const [date, setDate] = useState({
    value: "yyyy-mm-dd",
    isTouched: false,
  });
  const [touch, setTouch] = useState(false)
  const [quest, setQuest] = useState('0');
  const [occasion, setOccasion] = useState('Occasion');

  const getIsFormValid = () => {
    return ( 
     date.value !== "yyyy-mm-dd" && 
     availableTimes !== "Choose time" && 
     quest !==  "0"
   ); 
  }

  const clearForm = () => { 
   setDate({
    value: "yyyy-mm-dd",
    isTouched: false,
  }); 
   setAvailableTimes("Choose Time");
   setTouch(false); 
   setQuest(""); 
   setOccasion("Occasion"); 
 }; 

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form Sumbitted!");
    clearForm(); 
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date<sup>*</sup></label>
      <input 
        type="date" 
        id="res-date"
        value={date.value} 
        onChange={(event) => setDate({...date, value: event.target.value})}
        onBlur={() => { 
               setDate({ ...date, isTouched: true });
             }} 
      />
      {date.isTouched && date.value === "yyyy-mm-dd" ?( 
             <DateErrorMessage /> 
           ) : null}
      <label htmlFor="res-time">Choose time<sup>*</sup></label>
      <select 
        id="res-time"
        value={availableTimes} 
        onChange={(event) => {
            setAvailableTimes(event.target.value);
            }}
        onBlur={() => { 
          setTouch(true)
        }} 
      >
          {timeList.map((time) => 
            <option value={time} key={time}>{time}</option>
          )}
      </select>
      {touch && availableTimes === "Choose time" ?( 
             <TimeErrorMessage /> 
           ) : null}
      <label htmlFor="guests">Number of guests<sup>*</sup></label>
      <input 
        type="number" 
        placeholder="0" 
        min="0" 
        max="10" 
        id="guests"
        value={quest}
        onChange={(event) => setQuest(event.target.value)}
        />
        {quest === "0" ?( 
             <QuestErrorMessage /> 
           ) : null}
      <label htmlFor="occasion">Occasion</label>
      <select 
        id="occasion"
        value={occasion} 
        onChange={(event) => setOccasion(event.target.value)}
        >
          <option>Occasion</option>
          <option>Birthday</option>
          <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" disabled={!getIsFormValid()} className='inputSubmit'/>
  </form>
  )
}
export default function Reservation() {
  const [availableTimes, setAvailableTimes] = useState("Choose Time");

  return (
    <section id="onlineReservation" className='reservation'>
      <h1>Online Reservation</h1>
      <FormComponent availableTimes={availableTimes} setAvailableTimes={setAvailableTimes}/>
    </section>
  )
}



