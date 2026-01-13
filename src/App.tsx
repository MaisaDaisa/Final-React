import { Route, Routes } from 'react-router';
import { Layout } from './components';
import { routes } from './config';
import { DialogProvider, TeamProvider, ToastProvider } from './context';

function App() {
    return (
        <TeamProvider>
            <ToastProvider>
                <DialogProvider>
                    <Layout>
                        <Routes>
                            {Object.values(routes).map((route) => (
                                <Route
                                    element={<route.component />}
                                    path={route.url}
                                />
                            ))}
                        </Routes>
                    </Layout>
                </DialogProvider>
            </ToastProvider>
        </TeamProvider>
    );
}

export default App;
