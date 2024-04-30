import {createBrowserRouter,RouterProvider,Route,createRoutesFromElements} from 'react-router-dom';
import Internet from '../pages/internet';
import Electricity from '../pages/Electricity/Electricity.jsx';
import Layout from '../components/Layout';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout/>}>
            <Route path='/internet' element={<Internet/>}/>
            <Route path='/electricity' element={<Electricity/>}/>
        </Route>
    )
)
export default function AppRoutes(){
    return(
        <RouterProvider router={router}/>
    )
}