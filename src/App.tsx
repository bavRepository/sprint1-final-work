// import { useState } from 'react'
import Counter from "./components/counter/Counter.tsx";
import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import styled from "styled-components";

export type CounterDataProps = {
    count: number;
    counterLimit: number;
}

const outerCounterData: CounterDataProps[] = [
    {count: 0, counterLimit: 5,
       },
    {count: 1, counterLimit: 5,
        },
    {count: 2, counterLimit: 5
        },
    {count: 3, counterLimit: 5,
      },
    {count: 4, counterLimit: 5,
       },
    {count: 5, counterLimit: 5,
       },
]

const arrayToDict = (arr:CounterDataProps[])=>{
    const obj: Record<string, CounterDataProps> = {
    }
    arr.forEach(item=> {
        obj[uuidv4()] = item
    })
    return obj
}

const counterDataList = arrayToDict(outerCounterData)

function App() {
    const [counterData, setCounterData] = useState<Record<string, CounterDataProps>>(counterDataList)

    const handleInc = (id: string) => {
        setCounterData((counterData) => {
            const newObj =  {...counterData }
            newObj[id] = {...counterData.id, count: counterData[id].count + 1}
            return newObj
        })
    }

    const handleReset = (id: string) => {
        setCounterData((counterData) => {
            const newObj =  {...counterData }
            newObj[id] = {...counterData.id, count: 0}
            return newObj
        })
    }

    return (
        <Container>
            {Object.keys(counterData).map((key) => {
                return <Counter key={key} handleInc={() => handleInc(key)} count={counterData[key].count} counterLimit={counterData[key]. counterLimit} handleReset={() => handleReset(key)}/>})
            }
        </Container>

    )
}

const Container = styled.div`
    max-width: 1400px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 440px));
    align-items: center;
    justify-content: center;
    gap: 30px;
`

export default App
