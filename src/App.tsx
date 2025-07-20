// import { useState } from 'react'
import Counter from "./components/counter/Counter.tsx";
import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import styled from "styled-components";

export type CounterDataProps = {
    count: number;
    counterLimit: number;
    id?: string;
}

let outerCounterData: CounterDataProps[] = [
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

outerCounterData = outerCounterData.map(item => {
    return {...item, id: uuidv4()}
})

function App() {

    const [counterData, setCounterData] = useState<CounterDataProps[]>(outerCounterData)

    const handleInc: (id: string | undefined)=>void = (id) => {
        setCounterData((counterData:CounterDataProps[]):CounterDataProps[] => {
            return counterData.map((item:CounterDataProps):CounterDataProps => {
                if (id === item.id) {
                        return {...item, count: item.count + 1}
                }
                return item
        })
    })
    }
    const handleReset:(id:string | undefined)=>void = (id) => {
        setCounterData((counterData:CounterDataProps[]):CounterDataProps[] => {
            return counterData.map((item:CounterDataProps):CounterDataProps => {
                if (id === item.id) {
                    return {...item, count: 0}
                }
                return item
                })
        })
    }

  return (
    <Container>{
        counterData.map(counter => {
                return  <Counter key={counter.id} handleInc={()=>handleInc(counter.id)} count={counter.count} counterLimit={counter.counterLimit}  handleReset={()=>handleReset(counter.id)}/>
    })}
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
