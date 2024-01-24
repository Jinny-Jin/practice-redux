import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Counter from './pages/practice1/Practice1';
import Todo from './pages/practice2/Practice2';


export default function Router () {
    return(
        <BrowserRouter>
            <Routes>
            <Route path='/' element={<Counter />} />
            <Route path='/2' element={<Todo/>} />
            </Routes>
        </BrowserRouter>
        )
}