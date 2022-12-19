import { v4 as uuid } from 'uuid';

import CalendaryContainerBox from "../CalendaryContainerBox/CalendaryContainerBox";
const CalendaryContainer = () => {

  const createCalendar = ({ locale, year }) => {
    // ----------------------------------------------------------------
    // Obtener los meses
    const months = [...Array(12).keys()];
    const intlMonths = new Intl.DateTimeFormat(locale, { month: 'long' });
    // ----------------------------------------------------------------
    const calendar = months.map(monthKey => {
      const date = new Date(year, monthKey);
      const monthName = intlMonths.format(date);
      const nextMonthIndex = monthKey + 1;
      const daysOfMonth = new Date(year, nextMonthIndex, 0).getDate();
      const startsOn = new Date(year, monthKey, 1).getDay()

      return {
        monthName,
        daysOfMonth,
        startsOn,
        year
      }
    })
    return calendar;
  }
  const getDaysWeek = ({ locale }) => {
    // Obtener los dias de la semana
    const weekDays = [...Array(7).keys()];
    const intlWeekDay = new Intl.DateTimeFormat(locale, { weekday: 'long' })
    const weekDaysNames = weekDays.map((weekDay) => {
      const date = new Date(2021, 10, weekDay + 1);
      const weekDayName = intlWeekDay.format(date);
      return weekDayName;
    })
    return weekDaysNames;
  }
  const years = [2022,2021];
  const calendarYear = years.map((year) => {
    return createCalendar({ locale: 'es', year })
  })

  return (
    <main >
      <ol>
        {
          calendarYear.map(year => {
            return (
              <li key={uuid()}>
                <h1 key={uuid()} className="text-center text-5xl font-bold">{year[0].year}</h1>
                {year.reverse().map((month, index) => {
                  const dates = { daysWeek: getDaysWeek('es'), ...month, numberMonth: index + 1  };
                  return <CalendaryContainerBox key={uuid()} {...dates} />
                })}
              </li>
            )
          })
        }
      </ol>
    </main>
  )
}
export default CalendaryContainer;