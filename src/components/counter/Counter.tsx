import {S} from './Counter_Styles.ts';
import Display from "../display/Display.tsx";
import { Button } from "../common/button/Button.tsx";


type CounterProps = {
    handleInc: ()=>void;
    handleReset: ()=>void;
    count: number;
    counterLimit: number;
}

const Counter = (props:CounterProps ) => {
    const {handleInc, count,handleReset,counterLimit} = props;

    return (
        <S.ContentWrapper>
            <Display count={count} isLimit={count === counterLimit}/>
            <S.ControlMenuWrapper>
                <Button handleClick={handleInc} title={'inc'} disabled={count === counterLimit}/>
                <Button handleClick={handleReset} title={'reset'} disabled={!(count > 0)}/>
            </S.ControlMenuWrapper>
        </S.ContentWrapper>
    );
};

export default Counter;