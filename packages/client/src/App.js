import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Calculator from './components/calculator';
import Home from './components/home';
import Services from './components/services';
import Authentication from './components/authentication';
import OurTeam from './components/our_team';
import GetCallBack from './components/getCallBack';
import AbouteUs from './components/abaute_us';
import Error from './components/error';
import Goods from './components/goods';
import ShowProduct from './components/show_product';
import Layout from './Layout';

const App = () => {
  let definedLanguage;
  if (navigator.language === 'am') {
    definedLanguage = '/am';
  } else if (navigator.language === 'ru') {
    definedLanguage = '/ru';
  } else {
    definedLanguage = '/en';
  }

  const language = localStorage.getItem('check-language') ? localStorage.getItem('check-language') : definedLanguage;
  const [adminButtonState, setAdminButtonState] = useState(false);
  const adminButtonAndPage = adminButtonState ? <Authentication /> : <Home />;

  if (!localStorage.getItem('check-language')) {
    localStorage.setItem('check-language', document.location.pathname);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to={`${language}`} />} />
        <Route path=':lang' element={<Layout setAdminButtonState={setAdminButtonState} />}>
          <Route index element={<Home />} />
          <Route path='aboute_us' element={<AbouteUs />} />
          <Route path='calculate' element={<Calculator />} />
          <Route path='inventory' element={<Goods />} />
          <Route path='show_product' element={<ShowProduct />} />
          <Route path='our_team' element={<OurTeam />} />
          <Route path='services' element={<Services />} />
          <Route path='order_a_call' element={<GetCallBack />} />
          <Route path='adm' element={{ adminButtonAndPage }} />
          <Route path='*' element={<Error />} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
