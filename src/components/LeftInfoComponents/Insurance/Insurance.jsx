import React from 'react'
import Heading from '../../commonComponents/Heading/Heading'
import "./Insurance.css"

export default function Insurance() {
  return (
    <div className='insurance-main-div'>
      <Heading headingName={"Insurance"} />
      
      <div className='dates-div grid grid-cols-2 pt-5'>
        <div className='expiry-date-div col-span-1'>
          <span className='date-of-expiry-heading'>Date of Expiry</span>
          <p className='expiry-date-p'>October 21, 2026</p>
        </div>
        <div className='card-details-div col-span-1'>
          <span className='card-details-heading'>Card Details</span>
          <p className='card-detais-p'>November 25, 2025</p>
        </div>
      </div>

      <div className='container mx-auto p-6'>
        <div className='btn-div text-center'>
          <a href="https://example.com">
            <span className='insurance-update-btn'>Update Insurance</span>
          </a>
        </div>
      </div>

    </div>
  )
}
