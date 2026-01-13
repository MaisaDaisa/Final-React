import { Route, Routes } from 'react-router';
import { Layout } from './components';
import { ToastProvider } from './context';
import { Builder, Home } from './pages';

function App() {
    return (
        <ToastProvider>
            <Layout>
                <Routes>
                    <Route index element={<Home />} path="/" />
                    <Route index element={<Builder />} path="/builder" />
                </Routes>
            </Layout>
        </ToastProvider>
    );
}

export default App;
