import "./Drawer.css"

// import icons
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

export default function Drawer({
  drawerDisplay
}) {

  return (
    <div>
        <div className={`${drawerDisplay === "visible" ? "main-drawer-div-visible" : "main-drawer-div-hidden"}`}>
            <div className='setting-icon'>
                <SettingsIcon />
            </div>
            <div className='avatar-div'>
              <div className='avatar'></div>
            </div>
            <div className='driver-name-div'>
              <span className='driver-name'>George Smith</span>
            </div>

            <div className='menu-option-div'>
                <div className='menu-option-wrapper'>
                  <div className='menu-option'>
                    <div className='option-icon'>
                      <AppsIcon />
                    </div>
                    <div className='option-name'>
                      <span>Dashboard</span>
                    </div>
                  </div>

                  <div className='menu-option'>
                    <div className='option-icon'>
                      <MonetizationOnIcon />
                    </div>
                    <div className='option-name'>
                      <span>Pricing</span>
                    </div>
                  </div>

                  <div className='menu-option'>
                    <div className='option-icon'>
                      <MoreTimeIcon />
                    </div>
                    <div className='option-name'>
                      <span>Rides</span>
                    </div>
                  </div>

                  <div className='menu-option'>
                    <div className='option-icon'>
                      <AccountBoxIcon />
                    </div>
                    <div className='option-name'>
                      <span>Customers</span>
                    </div>
                  </div>

                  <div className='menu-option'>
                    <div className='option-icon'>
                      <ModeEditIcon />
                    </div>
                    <div className='option-name'>
                      <span>Issue Log</span>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}
