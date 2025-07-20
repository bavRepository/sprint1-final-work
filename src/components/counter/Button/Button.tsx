import {S} from "../Counter_Styles.ts";

type ButtonProps = {
    handleReset?: () => void;
    handleInc?: () => void;
    title: string;
    disabled: boolean;
}
const Button = ({ title,handleInc, disabled, handleReset}: ButtonProps) => {
    return (
        <S.Button onClick={handleInc ? handleInc : handleReset} disabled={disabled}>{title}</S.Button>
    );
};

export default Button;