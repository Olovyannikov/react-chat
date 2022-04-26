import { LoginForm } from '@/components';
import { Container } from '@/ui';
import s from './Index.module.scss';

export const Index = (): JSX.Element => {
    return (
        <section className={s.app}>
            <Container>
                <LoginForm className={s.login} />
            </Container>
        </section>
    );
};
