import { Route, Routes } from 'react-router';
import { Layout } from './components';
import { routes } from './config';
import { DialogProvider, ToastProvider } from './context';

function App() {
    return (
        <ToastProvider>
            <DialogProvider>
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
            </DialogProvider>
        </ToastProvider>
    );
}

export default App;
