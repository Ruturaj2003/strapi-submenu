import { useGlobalContext } from './Context';
import Hero from './Hero';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Submenu from './Submenu';

const App = () => {
  return (
    <main>
      <Navbar></Navbar>
      <Hero></Hero>
      <Sidebar></Sidebar>
      <Submenu></Submenu>
    </main>
  );
};
export default App;
