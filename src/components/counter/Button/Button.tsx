import {S} from "../Counter_Styles.ts";

type ButtonProps = {
    handleReset?: () => void;
    handleInc?: () => void;
    title: string;
    enable: boolean;
}
const Button = ({ title,handleInc, enable, handleReset}: ButtonProps) => {
    return (
        <S.Button onClick={handleInc ? handleInc : handleReset} disabled={enable}>{title}</S.Button>
    );
};

export default Button;