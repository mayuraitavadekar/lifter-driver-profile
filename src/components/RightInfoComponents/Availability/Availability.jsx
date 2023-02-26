import React from 'react'
import Heading from '../../commonComponents/Heading/Heading'
import "./Availability.css"

export default function Availability() {

  const weekdays = ["Son", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const availability = [
    {
      time: "6-9",
      timeblock: [0, 1, 1, 0, 0, 1, 1]
    },
    {
      time: "9-12",
      timeblock: [1, 0, 1, 1, 1, 0, 0]
    },
    {
      time: "12-3",
      timeblock: [0, 0, 1, 0, 0, 0, 1]
    },
    {
      time: "3-6",
      timeblock: [1, 1, 0, 1, 0 , 1, 1]
    }
  ];

  return (
    <div className='availability-main-div'>

        <Heading headingName={"Availability"} />

        <div className='timetable-main-div grid grid-rows-5'>
          <div className='grid grid-cols-8'>
            <div className='normal-white-div'></div>
            {weekdays.map((weekday, index) => (
              <div className='weekday-div'>{weekday}</div>
            ))}
          </div>

          {availability.map((avail) => {
              return (
                <div className='grid grid-cols-8'>
                  <div className='normal-white-div'>{avail.time}</div>
                  {
                     avail.timeblock.map((block) => {
                      return (
                        block === 0 ? 
                          <div className='available-div'></div> : 
                          <div className='not-available-div'></div>
                      )
                     })
                  }
                </div>
              )
            }
          )}
        </div>

    </div>
  )
}
