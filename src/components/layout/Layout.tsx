import { type PropsWithChildren } from 'react';
import Header from './Header';

const Layout = ({ children }: PropsWithChildren) => {
    return (
        <div className="grid min-h-screen grid-rows-[auto_1fr]">
            <Header />
            <main className="mt-3 h-full px-10">{children}</main>
        </div>
    );
};

export default Layout;
