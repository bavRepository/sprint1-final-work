import Counter from './Counter.tsx';

import Display from "../display/Display.tsx";
import { S } from './Counter_Styles.ts';
import {Button} from "../common/button/Button.tsx";
import {action} from "storybook/actions";
import {useState} from "react";

export default {
    title: "Counter",
    component: Counter
}

const callback1 = action('no')

export const DefaultCounter = () => {

    // const Counter = (props:CounterProps ) => {
    //     const {handleInc, count,handleReset,counterLimit} = props;
    const [count, setCount] = useState(0)
        return (
            <S.ContentWrapper>
                <Display count={count} isLimit={false}/>
                <S.ControlMenuWrapper>
                    <Button handleClick={()=> {setCount(count+1)}} title={'inc'} disabled={false}/>
                    <Button handleClick={callback1} title={'reset'} disabled={false}/>
                </S.ControlMenuWrapper>
            </S.ContentWrapper>
        );
    };

