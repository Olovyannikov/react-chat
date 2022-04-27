import { LoginForm } from '@/components';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { getAuth } from '@/store/models/auth';
import { isAuth } from '@/store/models/auth/selectors';
import { Container } from '@/ui';
import { socket, chatApi } from '@/services';
import { IRoomModel } from 'client/models/IRoom.model';
import { useEffect } from 'react';
import s from './Index.module.scss';

export const Index = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const isAuthState = useAppSelector(isAuth);
    const [getRoomsValues, { isLoading }] = chatApi.useFetchRoomValuesMutation();

    useEffect(() => {
        (window as any).socket = socket;
        socket.on('room/joined', (users) => {
            console.log('New User!', users);
        });
    }, []);

    const onLoggedInHandler = (obj: IRoomModel) => {
        if (!isLoading) {
            dispatch(getAuth(obj));
            socket.emit('room/join', obj);
        }
    };

    return (
        <section className={s.app}>
            <Container>
                {isAuthState && <h2>Hello!</h2>}
                {!isAuthState && (
                    <LoginForm className={s.login} getValues={getRoomsValues} loggedHandler={onLoggedInHandler} isLoading={isLoading} />
                )}
            </Container>
        </section>
    );
};
