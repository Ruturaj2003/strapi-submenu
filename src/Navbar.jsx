import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './Context';
import NavLinks from './NavLinks';

const Navbar = () => {
  const { pageId, openSidebar, setPageId } = useGlobalContext();
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('nav-link')) {
      setPageId(null);
    }
    // console.log(pageId);
  };
  return (
    <nav onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <h3 className="logo">strapi</h3>
        <button className="toggle-btn" onClick={openSidebar}>
          <FaBars></FaBars>
        </button>
        <NavLinks></NavLinks>
      </div>
    </nav>
  );
};
export default Navbar;
