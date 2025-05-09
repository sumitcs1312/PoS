import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ProductList from './ProductList';
import Cart from './Cart';
import Checkout from './Checkout';
import './styles/app.css';

const App: React.FC = () => {
    return (
        <Router>
            <div className="app">
                <Header />
                <Switch>
                    <Route path="/" exact component={ProductList} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/checkout" component={Checkout} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
};

export default App;