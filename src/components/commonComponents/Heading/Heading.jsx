import "./Heading.css"

export default function Heading({
    headingName
}) {
  return (
    <div className='heading-div grid grid-cols-2 items-center'>
        <div className='heading-title-div col-span-1'>
          <span>{headingName}</span>
        </div>
    </div>
  )
}
