import {S} from "../Counter_Styles.ts";

type ButtonProps = {
    handleClick: () => void;
    title: string;
    disabled?: boolean;
}



const Button = ({ title,handleClick, disabled}: ButtonProps) => {
   
    return (

        <S.Button onClick={handleClick} disabled={disabled}>{title}</S.Button>
    );
};

export default Button;