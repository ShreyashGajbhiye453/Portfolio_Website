import {Navbar} from './components/Navbar';
import {Outlet} from 'react-router-dom';
import {Footer} from './components/Footer';


export const AppLayout = () =>{
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
}