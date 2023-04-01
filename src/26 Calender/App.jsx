import React from 'react'
import Calendar from 'react-calendar'
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css'
const App = () => {
    let [date, setDate] = useState(new Date())

    let onChange = date => {
        setDate(date)
        console.log(date);
        console.log(typeof date);
    }
  return (
    <section>
          <div>
              <p>{date.getHours()}:{date.getMinutes()}:{ date.getSeconds() }</p>
        </div>
       <div>
          <Calendar onChange={onChange} value={date} />
          <p>{ date.toString()}</p>
      </div>
    </section>
  );
}

export default App


// ===================
// ! DatePicker
// import React from "react";
// import { useState } from "react";
// import "react-calendar/dist/Calendar.css";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const App = () => {
//     const [startDate, setStartDate] = useState(new Date());
//     return (
//       <div>
//         <DatePicker
//           selected={startDate}
//           onChange={(date) => setStartDate(date)}
//         />
//       </div>
//     );
// };

// export default App;

