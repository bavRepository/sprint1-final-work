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
    {name: "1", count: 0, counterLimit: 5,
        isCounterNotChanged: true,},
    {name: "2", count: 1, counterLimit: 5,
        isCounterNotChanged: true,},
    {name: "3", count: 2, counterLimit: 5,
        isCounterNotChanged: true,},
    {name: "4", count: 3, counterLimit: 5,
        isCounterNotChanged: true,},
    {name: "5", count: 4, counterLimit: 5,
        isCounterNotChanged: true,},
    {name: "6", count: 5, counterLimit: 5,
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
                        return {...item, count: item.count + 1, isCounterNotChanged:false}
                }
                return item
        })
    })
    }
    const handleReset:(id:string)=>void = (id) => {
        setCounterData((counterData:CounterDataProps[]):CounterDataProps[] => {
            return counterData.map((item:CounterDataProps):CounterDataProps => {
                if (id === item.id) {
                    return {...item, count: 0, isCounterNotChanged: true}
                }
                return item
                })
        })
    }

  return (
    <div>{
        counterData.map(counter => {
            if (counter){
                return  <Counter key={counter.id} handleInc={()=>handleInc(counter.id)} count={counter.count} counterLimit={counter.counterLimit}  handleReset={()=>handleReset(counter.id)} isCounterNotChanged={counter.isCounterNotChanged}/>
            }
    })}
    </div>
  )
}

export default App
