import { Button, Input } from '@/ui';
import cn from 'classnames';
import s from './styles.module.scss';
import { socket } from '@/services';
import { LoginFormProps } from './props';

export const LoginForm = ({ className, ...props }: LoginFormProps): JSX.Element => {
    socket;
    return (
        <form className={cn(s.form, className)} {...props}>
            <Input placeholder='Room ID' />
            <Input placeholder='Nickname' />
            <Button type='submit'>Войти</Button>
        </form>
    );
};
