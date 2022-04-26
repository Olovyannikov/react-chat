import { InputProps } from './props';
import s from './styles.module.scss';

export const Input = ({...props}: InputProps): JSX.Element => {
    return (
        <input className={s.input} {...props}/>
    );
};
