import { getImage } from "../../firebase";
import { useEffect, useState } from 'react';

const CalendaryBox = ({ startsOn, day , numberMonth , year }) => {
  function addLeadingZero(number) {
    return number.toString().padStart(2, '0');
  }
  const conditional = day === 1;
  const colStartClass = conditional ? `${startsOn}` : '';
  const [url, setUrl] = useState('')
  useEffect(() => {
    getImage({nameImage:`${addLeadingZero(day)}-${addLeadingZero(numberMonth)}-${year}`}).then(res =>{
      if (res !== undefined) {
        setUrl(res.data().url)
      }
    })
  }, []);
  return (
    <li
      style={
        {
          backgroundImage: `url(${url})`,
          gridColumnStart: colStartClass
        }
      }
      className={`w-full flex items-end pb-1 bg-center bg-cover border h-full md:h-28 rounded-sm hover:brightness-75 `} >
        <h2 className={`text-[8px] ${url !== '' ? "text-white" : "text-black"}  `} >{`${day}-${numberMonth}-${year}`}</h2>
    </li>
  )
}

export default CalendaryBox;