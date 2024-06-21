
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Blog from './Blog';


const AppRouter = () => (
<div>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/blog" exact component={Blog} />
  </Routes>
</div>
);

export default AppRouter;
