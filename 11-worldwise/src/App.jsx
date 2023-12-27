import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Product from './pages/Product';
import HomePage from './pages/HomePage';
import Pricing from './pages/Pricing';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './pages/AppLayout';
import CityList from './components/CityList';
import CountryList from './components/CountryList';
import City from './components/City';
import Form from './components/Form';

function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const BASE_URL= "http://localhost:8000";

  useEffect(function () {
    async function getCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();

        setCities(data);
      } catch (err) {
        alert('Data kuota tidak tersedia');
      } finally {
        setIsLoading(false);
      }
    }

    getCities();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<Navigate replace to="cities"/>}/>
          <Route path="cities" element={<CityList cities={cities} isLoading={isLoading}/>}/>
          <Route path="cities/:id" element={<City cities={cities}/>}/>
          <Route path="countries" element={<CountryList cities={cities} isLoading={isLoading}/>}/>
          <Route path="form" element={<Form/>}/>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


// CEK LAGI CARA PENGGUNAAN OUTLET
