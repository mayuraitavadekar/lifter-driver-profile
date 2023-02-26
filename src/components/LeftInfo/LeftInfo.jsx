import DriverInfo from '../LeftInfoComponents/DriverInfo/DriverInfo'
import Insurance from '../LeftInfoComponents/Insurance/Insurance'
import VechicleDetails from '../LeftInfoComponents/VehicleDetails/VechicleDetails'

import "./LeftInfo.css"

export default function LeftInfo() {
  return (
    <div className='main-leftInfo w-[50%] lg:w-full'>
      <DriverInfo />
      <VechicleDetails />
      <Insurance />
    </div>
  )
}
