

export default function HeadingWithCSV({
    headingName
}) {
  return (
    <div>
        <div className='heading-div grid grid-cols-2 items-center'>
        <div className='heading-title-div col-span-1'>
          <span>{headingName}</span>
        </div>
        <div className='csv-div col-span-1 text-right'>
          <span className='csv-span'>csv</span>
        </div>
    </div>
    </div>
  )
}
