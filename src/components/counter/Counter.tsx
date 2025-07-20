import {S} from './Counter_Styles.ts';
import Button from "./Button/Button.tsx";
import Display from "./Display/Display.tsx";


type CounterProps = {
    handleInc: (id:string)=>void;
    handleReset: (id:string)=>void;
    isCounterNotChanged: boolean;
    count: number;
    counterLimit: number;
}

const Counter = (props:CounterProps) => {

    const {handleInc, count,handleReset,isCounterNotChanged ,counterLimit} = props;

    return (
        <S.ContentWrapper>
            <Display count={count}/>
            <S.ControlMenuWrapper>
                <Button handleClick={handleInc} title={'inc'} disabled={count > counterLimit - 1}/>
                <Button handleClick={handleReset} title={'reset'} disabled={isCounterNotChanged}/>
            </S.ControlMenuWrapper>
        </S.ContentWrapper>
    );
};

export default Counter;