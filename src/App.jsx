import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Testimonials from './components/Testimonials/Testimonials';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import About from "./components/About/About";
import './index.css';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/scholarship'); 
        if (!response.ok) {
          throw new Error('The API is not responding, please ensure the Node server is running');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Fetch Error:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center text-purple-600 font-bold">
       loading....
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="flex h-screen items-center justify-center text-red-500 font-bold">
        error: {error || "لم يتم العثور على بيانات"}
      </div>
    );
  }

  return (
    <div className="bg-white">
      <Navbar />
  
      <Hero data={data.scholarship} />
      <About data={data.scholarship} />
      <Testimonials data={data.scholarship} />
      <FAQ data={data} />
      <Footer data={data.scholarship} />
    </div>
  );
}

export default App;
