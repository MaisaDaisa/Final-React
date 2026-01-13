import { type PropsWithChildren } from 'react';
import Header from './Header';

const Layout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <Header />
            <main className="mt-3 px-10">{children}</main>
        </>
    );
};

export default Layout;
