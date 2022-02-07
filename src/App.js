import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services';
import Products from './pages/Products/Products';
import SignUp from './pages/SignUp/SignUp'
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
	<Router>
		<GlobalStyle />
		<ScrollToTop />
		<Navbar />
		<Routes>
			<Route exact path='/' element={<Home/>} />
			<Route exact path='/services' element={<Services/>} />
			<Route exact path='/products' element={<Products/>} />
			<Route exact path='/sign-up' element={<SignUp/>} />
		</Routes>
		<Footer />
	</Router>
  );
}

export default App;
