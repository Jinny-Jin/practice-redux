import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Counter from './pages/practice1/Practice1';


export default function Router () {
    return(
        <BrowserRouter>
            <Routes>
            <Route path='/' element={<Counter />} />
            </Routes>
        </BrowserRouter>
        )
}