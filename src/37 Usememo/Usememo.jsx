import React, { useMemo, useState } from 'react'

const UseMemo = () => {
      let [count1, setCount1] = useState(0);
      let [count2, setCount2] = useState(0);

      let counter1 = () => {
            setCount1(count1 + 1);
      };
        let counter2 = () => {
          setCount2(count2 + 1);
      };
      // let isEven = () => {
      //       let i = 0;
      //       while (i < 400000000) {
      //             i++;
      //       }
      //             return (count1 % 2 === 0)
      //       }
      let isEven = useMemo(() => {
        let i = 0;
        while (i < 400000000) {
          i++;
        }
        return count1 % 2 === 0;
      },[count1]);

  return (
        <div>
              <button onClick={counter1}>Count1 : {count1}</button>
              {isEven?'EvenNumber':'OddNumber'}
              <br /><br />
              <button onClick={counter2}>Count2 : { count2}</button>
        </div>
  )
}

export default UseMemo