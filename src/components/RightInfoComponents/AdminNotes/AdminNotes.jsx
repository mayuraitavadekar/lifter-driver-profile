import React from 'react'
import Heading from '../../commonComponents/Heading/Heading'
import "./AdminNotes.css"

export default function AdminNotes() {
  return (
    <div className='admin-notes-main-div'>

      <Heading headingName={"Admin Notes"} />

      <div className='admin-notes-div'>
        <div className='note-div truncate'>
          <span className='note-span'>Call John tomorrow to get insurance update.</span>
        </div>
        <div className='note-div truncate'>
          <span className='note-span'>Go to garage for trunk repair.</span>
        </div>
        <div className='note-div truncate'>
          <span className='note-span'>Send $550 to Jamie.</span>
        </div>
      </div>
    </div>
  )
}
