import { useGlobalContext } from './Context';
import sublinks from './data';
import { useRef } from 'react';
const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext();
  const currentPage = sublinks.find((item) => {
    if (item.pageId === pageId) {
      return item;
    }
    return false;
  });

  const handleMouseLeave = (e) => {
    const submenu = submenuContainer.current;
    const { left, right, bottom } = submenu.getBoundingClientRect();
    const { clientX, clientY } = e;
    if (clientX < left - 1 || clientX > right - 1 || clientY > bottom) {
      setPageId(null);
    }
  };

  const submenuContainer = useRef(null);

  return (
    <div className={currentPage ? 'submenu show-submenu' : 'submenu'}>
      <h5>{currentPage?.page}</h5>
      <div
        onMouseLeave={handleMouseLeave}
        className="submenu-links"
        style={{
          gridTemplateColumns:
            currentPage?.links?.length > 3 ? '1fr 1fr' : '1fr',
        }}
        ref={submenuContainer}
      >
        {currentPage?.links?.map((link) => {
          const { id, url, label, icon } = link;
          return (
            <a key={id} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default Submenu;
