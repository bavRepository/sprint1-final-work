import { S } from "./Display_styles";

const Display = ({count, isLimit}:{count:number, isLimit:boolean}) => {
    return (
        <S.Display $isLastNum={isLimit}>
            <p>{count}</p>
        </S.Display>
    );
};

export default Display;