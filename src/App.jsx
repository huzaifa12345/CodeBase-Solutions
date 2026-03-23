import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard'; // Is mein Link add karenge niche
import ProductDetail from './pages/ProductDetail';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { projects } from './data/projects';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-slate-900">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <section id="solutions" className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {projects.map((project) => (
                    <ProductCard key={project.id} project={project} />
                  ))}
                </div>
              </section>
              <Contact />
            </>
          } />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;