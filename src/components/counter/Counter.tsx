import {S} from './Counter_Styles.ts';
import {useState} from "react";
import Button from "./Button/Button.tsx";
import Display from "./Display/Display.tsx";


type CounterProps = {
    count: number;
    counterLimit: number;
    isCounterNotChanged: boolean;
}

const counterObj: CounterProps = {
    count: 0,
    counterLimit: 5,
    isCounterNotChanged: true,
}



const Counter = () => {

    const [counter, setCounter] = useState<CounterProps>(counterObj)

    const handleInc:()=>void = () => {
        setCounter((counter) => ({...counter, isCounterNotChanged: true, count: counter.count + 1}))
        }

    const handleReset = () =>{
        setCounter(counter => ({...counter, isCounterNotChanged: false, count: 0}))
    }

    return (
        <S.ContentWrapper>
            <Display count={counter.count}/>
            <S.ControlMenuWrapper>
                <Button handleInc={handleInc} title={'inc'} enable={counter.count > 4}/>
                <Button handleReset={handleReset} title={'reset'} enable={counter.isCounterNotChanged}/>
            </S.ControlMenuWrapper>
        </S.ContentWrapper>
    );
};

export default Counter;