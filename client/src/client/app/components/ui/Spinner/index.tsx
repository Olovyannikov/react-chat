import { SpinnerProps } from './props';
import s from './styles.module.scss';

export const Spinner = ({ ...props }: SpinnerProps): JSX.Element => {
    return (
        <svg className={s.spinner} width='65px' height='65px' viewBox='0 0 66 66' xmlns='http://www.w3.org/2000/svg' {...props}>
            <circle className={s.path} fill='none' strokeWidth='6' strokeLinecap='round' cx='33' cy='33' r='30'></circle>
        </svg>
    );
};
