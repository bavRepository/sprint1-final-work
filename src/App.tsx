import Counter from "./components/counter/Counter.tsx";
import { type ReactNode, useState} from "react";
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
        setCounterData((counterData)=> {
            const newObj =  {...counterData}
            newObj[id] = {...counterData[id], count: counterData[id].count + 1}
            return newObj
        })
    }

    const handleReset = (id: string) => {
        setCounterData((counterData) => {
            const newObj =  {...counterData }
            newObj[id] = {...counterData[id], count: 0}
            return newObj
        })

    }

    const renderCounterHtmlElements:(arr:Record<string, CounterDataProps>)=>ReactNode[] = (arr) => {
        const arrayOfKeysWithId = Object.keys(arr)
        return arrayOfKeysWithId.map((id) => {
            return <Counter key={id}
                            handleInc={() => handleInc(id)}
                            count={counterData[id].count}
                            counterLimit={counterData[id].counterLimit}
                            handleReset={() => handleReset(id)}
            />})
    }

    const elements = renderCounterHtmlElements(counterDataList)

    return (
        <Container>
            {elements}
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
