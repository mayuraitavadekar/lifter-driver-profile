import {useState} from 'react'
import "./Header.css"

// import material ui icon
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '../Drawer/Drawer' ;
import { IconButton } from '@mui/material';

export default function Header() {

  const [drawerDisplay, setDrawerDisplay] = useState("hidden");

  function handleClick(e) {
    e.preventDefault();
    if(drawerDisplay === "hidden")
    {
      setDrawerDisplay("visible");
    }
    else if(drawerDisplay === "visible")
    {
      setDrawerDisplay("hidden");
    }
  }

  return (
    <div>
      
      <div className='main-heading-div'>
        <div className='left-menu-icon'>
          <IconButton onClick={handleClick}>  
            <MenuIcon className="menu-icon" />
          </IconButton> 
        </div>
        <div className='main-heading-div'>
          <span className='heading'>Lifter Driver Profile</span>
        </div>

        <Drawer drawerDisplay={drawerDisplay} />
      
      </div>
    </div>
  )
}
