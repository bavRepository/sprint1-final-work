// import { useState } from 'react'
import Counter from "./components/counter/Counter.tsx";
import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

export type CounterDataProps = {
    name: string;
    count: number;
    counterLimit: number;
    isCounterNotChanged: boolean;
    id?: string;
}

let outerCounterData: CounterDataProps[] = [
    {name: "1", count: 1, counterLimit: 5,
        isCounterNotChanged: true,},
    {name: "2", count: 2, counterLimit: 5,
        isCounterNotChanged: true,},
    {name: "3", count: 3, counterLimit: 5,
        isCounterNotChanged: true,},
    {name: "4", count: 4, counterLimit: 5,
        isCounterNotChanged: true,},
    {name: "5", count: 5, counterLimit: 5,
        isCounterNotChanged: true,},
]

outerCounterData = outerCounterData.map(item => {
    return {...item, id: uuidv4()}
})

function App() {

    const [counterData, setCounterData] = useState<CounterDataProps[]>(outerCounterData)

    const handleInc:(id:string)=>void = (id) => {
        setCounterData((counterData:CounterDataProps[]):CounterDataProps[] => {
            return counterData.map((item:CounterDataProps):CounterDataProps => {
            if (id === item.id) {
                if (item.count === 4){
                    return {...item, count: item.count + 1, isCounterNotChanged:false}
                }
                return {...item, count: item.count + 1}
            }
            return item
        })
    })
    }
    const handleReset = () =>{
        setCounterData(counterData => {
            return counterData.map(item => {
                return  {...item, count: 0, isCounterNotChanged: true}
            })
        })
    }

  return (
    <div>{
        counterData.map(counter => {
            if (counter){
                return  <Counter key={counter.id} handleInc={()=>handleInc(counter.id)} count={counter.count} handleReset={handleReset}/>
            }
    })}
    </div>
  )
}

export default App
