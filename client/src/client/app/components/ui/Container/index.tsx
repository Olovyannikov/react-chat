import cn from 'classnames';
import {ContainerProps} from './props';
import s from './styles.module.scss';

export const Container = ({className, children, ...props}: ContainerProps): JSX.Element => {
    return (
        <div className={cn(s.container, className)} {...props}>
            {children}
        </div>
    );
};
