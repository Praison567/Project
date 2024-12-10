import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

function Layout(){
    return(
        <div>
            <Header />
            <section>
                <article>
                    <Outlet />
                </article>
            </section>
            <Footer />
        </div>
    )
}
export default Layout;