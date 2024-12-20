import { BrowserRouter, Routes, Route } from "react-router-dom";
import Electronics from './electronics';
import Jewelary from './jewelary';
import Mens from './mens';
import Womens from './womens';
import Layout from './layout';
import Content from './content';
import Signin from "./signin";
import Signup from "./signup";
function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Content />} />
                        <Route path='electronics' element={<Electronics />} />
                        <Route path='jewelery' element={<Jewelary />} />
                        <Route path="men's clothing" element={<Mens />} />
                        <Route path="women's clothing" element={<Womens />} />
                        <Route path='signin' element={<Signin />}/>
                        <Route path='signup' element={<Signup />}/>

                    </Route>
                </Routes>
            </BrowserRouter>

        </div>
    )
}
export default Router;