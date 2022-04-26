import cn from 'classnames';
import { ButtonProps } from './props';
import s from './styles.module.scss';

export const Button = ({
    className, children, size = 'md', variant = 'contained', color = 'primary', type = 'button', icon = false, ...props
}: ButtonProps): JSX.Element => {
    return (<button
        className={ cn(s.btn, s[size], s[variant], s[color], icon && s.icon, className) }
        type={ type }
        { ...props }
    >
        { children }
    </button>);
};
