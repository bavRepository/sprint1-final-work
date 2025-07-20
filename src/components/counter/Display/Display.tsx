import { S } from "../Counter_Styles";

const Display = ({count}:{count:number}) => {
    return (
        <S.Display>
            <p>{count}</p>
        </S.Display>
    );
};

export default Display;