import {S} from './Counter_Styles.ts';
const Counter = () => {
    return (
        <S.ContentWrapper>
            <S.Display>
                <S.Count>5</S.Count>
            </S.Display>
            <S.ControlMenuWrapper>
                <S.Button>inc</S.Button>
                <S.Button>reset</S.Button>
            </S.ControlMenuWrapper>
        </S.ContentWrapper>
    );
};

export default Counter;