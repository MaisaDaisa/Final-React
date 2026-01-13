import { Route, Routes } from 'react-router';
import './App.css';
import { Layout } from './components';
import { Home } from './pages';
function App() {
    return (
        <Layout>
            <Routes>
                <Route index element={<Home />} path="/" />
            </Routes>
        </Layout>
    );
}

export default App;
