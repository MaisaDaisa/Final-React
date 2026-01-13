import { Route, Routes } from 'react-router';
import { Layout } from './components';
import { routes } from './config';
import { ToastProvider } from './context';

function App() {
    return (
        <ToastProvider>
            <Layout>
                <Routes>
                    <Route
                        element={<routes.HOME.component />}
                        path={routes.HOME.url}
                    />
                    <Route
                        element={<routes.BUILDER.component />}
                        path={routes.BUILDER.url}
                    />
                </Routes>
            </Layout>
        </ToastProvider>
    );
}

export default App;
