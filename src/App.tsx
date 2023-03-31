import './App.css';
import About from './components/about';
import Blog from './components/blog';
import Faqs from './components/faqs';
import Footer from './components/footer';
import NavBar from './components/navbar';
import ProductList from './components/productlist';

function App() {
 
  return (
    <div >
   <NavBar/>
   <ProductList/>
   <Blog/>
   <About/>
   <Faqs/>
   <Footer/>
  </div>
  );
}

export default App;
