import { FaTimes } from 'react-icons/fa';
import sublinks from './data';
import { useGlobalContext } from './Context';
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className="sidebar">
      <div className="sidebar-container">
        <button className="close-btn">
          <FaTimes></FaTimes>
        </button>
        <div className="sidebar-links">
          {sublinks.map((item) => {
            const { links, page, pageId } = item;
            console.log(page);
            return (
              <article key={pageId}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((link) => {
                    const { id, label, icon, url } = link;
                    return (
                      <a key={id} href={url}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
