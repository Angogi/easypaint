import { useEffect, useState } from "react";
import styles from '../styles/DatePicker.module.css';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'

const DateComponent = () => {
  const date = new Date();

  date.setDate(1);

    console.log(date.getDate())

    const lastDay = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();
  
    const prevLastDay = new Date(
      date.getFullYear(),
      date.getMonth(),
      0
    ).getDate();

    console.log(lastDay)
    console.log(prevLastDay)
    
    const firstDayIndex = date.getDate()
    const months = [
    'enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
    ];

    const days = [];
    for(let x = firstDayIndex; x > 0; x--){
      days.push(<div className="prevDate">{prevLastDay - x }</div>)
    }

    for(let i=1; i<= lastDay; i++){
      days.push(<div>{i}</div>)
    }


 
  
  return (
    <div className={styles.dateContainer}>
      <div className={styles.calendar}>

        <div className={styles.month}>

          <div className={styles.prev}><AiOutlineArrowLeft/></div>

          <div className={styles.date}>
            <h1>Mayo</h1>
            <p>Fri May 29, 2021</p>
          </div>

          <div className={styles.next}><AiOutlineArrowRight/></div>

        </div>
        <div className={styles.weekdays}>
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>

        <div className={styles.days}>
          {days.map((day)=>{
            return(
                <>{day}</>
            )
          })}
        </div>

      </div>
    </div>
  );
};

export default DateComponent