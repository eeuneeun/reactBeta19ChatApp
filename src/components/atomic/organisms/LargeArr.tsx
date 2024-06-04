import * as React from 'react';

// # useMemo 테스트를 하기위한 함수
export function LargeArr () {
    const [arr, setArr] = React.useState([0]) 
  
    // 베열에 숫자를 넣는 함수
    async function pushNumber() {
        const tmpArr = []
        for(let i=1; i <= 10000 ; i++){
            tmpArr.push(i)
            setArr([
                ...arr,
                ...tmpArr
            ])

            console.log("pushNumber", i)
        }

    }
  
    // 계산에 비용이 아주 많이 드는 함수
    async function exopensiveCalculate(arr:number[], number:number){
      await pushNumber()
      
      await arr.map((item)=>{
        const result = item + number
        console.log("add", result)
      })
     
      return "ok"
    }
    const plusNumberOne = React.useMemo(async() => await exopensiveCalculate(arr, 1), []);

    
  return (
    <ul>
      {
        arr.map((item, idx)=>(
            <li key={item+idx}> {item} </li>
        ))
      }
      {plusNumberOne}
    </ul>
  );
}
