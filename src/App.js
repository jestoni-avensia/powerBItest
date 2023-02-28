import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import PowerBIApi from './Pages/PowerBIApi';
import Books from './Pages/Books';
import Book from './Pages/Book';
import NewBook from './Pages/NewBook';
import Layout from './Layout';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <>
    <nav>
        <ul>
          <li>
              <Link to="/">Home</Link>
          </li>
          <li>
              <Link to="/AboutUs">About Us</Link>
          </li>
           {/*<li>
              <Link to="/Books">Books</Link>
           </li>*/}
          <li>
            <Link to="/API">Api</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/AboutUs" element={<AboutUs />}></Route>
        <Route path="/Books" element={<Layout />}>
          <Route index element={<Books />}></Route>
          <Route path=":id" element={<Book />}></Route>
          <Route path="new" element={<NewBook />}></Route>
        </Route>
        <Route path="/API" element={<PowerBIApi />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      
    </>
  );
}

export default App;
