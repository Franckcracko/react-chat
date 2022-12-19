import { v4 as uuid } from 'uuid';
import CalendaryBox from "../CalendaryBox/CalendaryBox";


const CalendaryContainerBox = ({monthName, numberMonth ,daysOfMonth, startsOn, year, daysWeek }) => {
  const totalDays = [...Array(daysOfMonth).keys()];
  return (
    <div className="h-80 mb-5 ">
      <h2 className="text-center text-2xl font-semibold">{monthName.toUpperCase()}</h2>
      <ol className="mb-12 list-none h-[95%] w-full grid justify-center grid-cols-[repeat(7,1fr)]">
        {
          daysWeek.map((dayName) =>{
            return <li key={uuid()} className="text-center flex items-end justify-center pb-2 font-medium"> <h1 className="md:text-lg text-[0.5rem]">{dayName.toUpperCase()}</h1> </li>    
          })
        }
        {
          totalDays.map(day => {
            return <CalendaryBox key={uuid()} year={year} numberMonth={numberMonth} startsOn={startsOn} day={day + 1} />
          })
        }
      </ol>
    </div>
  )
}
export default CalendaryContainerBox;