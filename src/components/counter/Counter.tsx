import {S} from './Counter_Styles.ts';
import Button from "./Button/Button.tsx";
import Display from "./Display/Display.tsx";


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
            <Display count={count}/>
            <S.ControlMenuWrapper>
                <Button handleClick={handleInc} title={'inc'} disabled={count === counterLimit}/>
                <Button handleClick={handleReset} title={'reset'} disabled={!(count > 0)}/>
            </S.ControlMenuWrapper>
        </S.ContentWrapper>
    );
};

export default Counter;