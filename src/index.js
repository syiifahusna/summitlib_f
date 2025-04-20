import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./fragment/Header";
import Footer from "./fragment/Footer";
import Home from "./home";
import Register from "./register";
import Login from "./login";
import Search from './search';
import Categories from './categories';
import Category from './category';
import NotFound from './notfound'
import Book from './book';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
        <Header></Header>
            <main className="container ">
                <App></App>
            </main>
        <Footer></Footer>
  
  </>
);

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/search" element={<Search />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/categories/:id" element={<Category />} />
                <Route path="/book/:id" element={<Book />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}
