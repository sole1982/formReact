import { Outlet, Link } from "react-router-dom";


const Layout = () => {
  return (
    <>
  
     
  <nav class="navbar bg-body-primary bg-dark">
  <div class="container-fluid justify-content-start">
  
    <Link to="/" className="p-3 text-bg-dark" style={{ textDecoration: 'none' }} >Inicio</Link>
    <Link to="/contact" className=" text-bg-dark " style={{ textDecoration: 'none' }} >Contacto</Link>
  </div>
</nav>
     

      <Outlet />
    </>
  )
};
export default Layout;