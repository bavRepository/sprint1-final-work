import {S} from "./Button_styles.ts";

type ButtonProps = {
    handleClick: () => void;
    title: string;
    disabled: boolean;
}



export const Button = ({ title,handleClick, disabled}: ButtonProps) => {
   
    return (
        <S.Button onClick={handleClick} disabled={disabled}>{title}</S.Button>
    );
};

