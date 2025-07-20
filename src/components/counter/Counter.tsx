import {S} from './Counter_Styles.ts';
import Button from "./Button/Button.tsx";
import Display from "./Display/Display.tsx";


type CounterProps = {
    handleInc: (id:string)=>void;
    handleReset: ()=>void;
    isCounterNotChanged: boolean;
    count: number;
}

const Counter = (props:CounterProps) => {

    const {handleInc, count,handleReset,isCounterNotChanged} = props;

    return (
        <S.ContentWrapper>
            <Display count={count}/>
            <S.ControlMenuWrapper>
                <Button handleInc={handleInc} title={'inc'} disabled={false}/>
                <Button handleReset={handleReset} title={'reset'} disabled={isCounterNotChanged}/>
            </S.ControlMenuWrapper>
        </S.ContentWrapper>
    );
};

export default Counter;