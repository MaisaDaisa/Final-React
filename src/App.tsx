import { Route, Routes } from 'react-router';
import './App.css';
import { Layout } from './components';
import { ToastProvider } from './context';
import { Home } from './pages';
function App() {
    return (
        <ToastProvider>
            <Layout>
                <Routes>
                    <Route index element={<Home />} path="/" />
                </Routes>
            </Layout>
        </ToastProvider>
    );
}

export default App;
