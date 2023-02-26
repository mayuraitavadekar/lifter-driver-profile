import AdminNotes from '../RightInfoComponents/AdminNotes/AdminNotes'
import Availability from '../RightInfoComponents/Availability/Availability'
import IssueLog from '../RightInfoComponents/IssueLog/IssueLog.tsx'
import PaymentHistory from '../RightInfoComponents/PaymentHistory/PaymentHistory.tsx'
import "./RightInfo.css"

export default function RightInfo() {
  return (
    <div className='main-rightInfo w-[50%] pl-[25px] lg:w-full lg:pl-[0%]'>
      <AdminNotes />
      <Availability />
      <PaymentHistory />
      <IssueLog />
    </div>
  )
}
