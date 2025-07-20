import {S} from "../Counter_Styles.ts";

type ButtonProps = {
    handleClick?: (id:string) => void;
    title: string;
    disabled?: boolean;
}



const Button = ({ title,handleClick, disabled}: ButtonProps) => {
   
    return (

        // @ts-expect-error I have no idea why is this fn requires e.handle
        <S.Button onClick={handleClick} disabled={disabled}>{title}</S.Button>
    );
};

export default Button;