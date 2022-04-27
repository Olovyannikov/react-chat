import { Button, Input, Spinner } from '@/ui';
import cn from 'classnames';
import { SyntheticEvent, useRef } from 'react';
import s from './styles.module.scss';
import { LoginFormProps } from './props';

export const LoginForm = ({ loggedHandler, getValues, className, isLoading, ...props }: LoginFormProps): JSX.Element => {
    const formRef = useRef<HTMLFormElement>(null);

    const onSubmitHandler = async (e: SyntheticEvent) => {
        e.preventDefault();

        const formData = formRef.current && new FormData(formRef.current);
        const values = formData && Object.fromEntries(formData.entries());

        if (values && Object.values(values).includes('')) {
            alert('Не все поля заполнены');
        } else {
            if (getValues && values && loggedHandler) {
                getValues(values);
                loggedHandler(values);
            }
        }
    };

    return (
        <form className={cn(s.form, className)} ref={formRef} onSubmit={onSubmitHandler} {...props}>
            <Input placeholder='Room ID' name='roomId' />
            <Input placeholder='Nickname' name='name' />
            <Button disabled={isLoading} type='submit'>
                {isLoading && (
                    <div className={s.loading}>
                        Вход... <Spinner />
                    </div>
                )}
                {!isLoading && 'Вход'}
            </Button>
        </form>
    );
};
