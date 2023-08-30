// import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import './index.css';
// import './Register.css';
// import ProductList from './components/ProductList';
// import ProductDetails from './components/ProductDetails';
// import Header from './components/Header';
// import Cart from './components/Cart';
// import Register from './components/Register';
// import About from './components/About';
// import Contact from './components/Contact';
// import Pagenotfound from './components/Pagenotfound';
// import Policy from './components/Policy';
// import Footer from './components/Footer';

// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Login from './components/login';


// function App() {
//   return (
//     <Router>
//       <div className="app-container">
//         <h1 className="toppp">🛒ASIF'S SHOP</h1>
//         <ToastContainer />
//         <Header />
//         <Footer />
//         <Switch>
//           <Route exact path="/" component={ProductList} />
//           <Route path="/product/:productId" component={ProductDetails} />
//           <Route path="/cart" component={Cart} />
//           <Route path="/register" component={Register} />
//            <Route path="/login" component={Login} />
//           <Route path="/about" component={About} />
//           <Route path="/contact" component={Contact} />
//           <Route path="/policy" component={Policy} />
//           <Route path="/*" component={Pagenotfound} />
//         </Switch>
//         </div>
//     </Router>
//   );
// }

// export default App;














// App.js
// import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { AuthProvider } from './components/AuthContext';
// import './index.css';
// import './Register.css';
// import ProductList from './components/ProductList';
// import ProductDetails from './components/ProductDetails';
// import Header from './components/Header';
// import Cart from './components/Cart';
// import Register from './components/Register';
// import About from './components/About';
// import Contact from './components/Contact';
// import Pagenotfound from './components/Pagenotfound';
// import Policy from './components/Policy';
// import Footer from './components/Footer';

// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Login from './components/login';

// function App() {
//   return (
//     <Router>
//       <AuthProvider>
//         <div className="app-container">
//           <h1 className="toppp">🛒ASIF'S SHOP</h1>
//           <ToastContainer />
//           <Header />
//           <Footer />
//           <Switch>
//             <Route exact path="/" component={ProductList} />
//             <Route path="/product/:productId" component={ProductDetails} />
//             <Route path="/cart" component={Cart} />
//             <Route path="/register" component={Register} />
//             <Route path="/login" component={Login} />
//             <Route path="/about" component={About} />
//             <Route path="/contact" component={Contact} />
//             <Route path="/policy" component={Policy} />
//             <Route path="/*" component={Pagenotfound} />
//           </Switch>
//         </div>
//       </AuthProvider>
//     </Router>
//   );
// }

// export default App;








// index.js (or App.js, or your main JavaScript file)
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext';
import './index.css';
import './Register.css';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Header from './components/Header';
import Cart from './components/Cart';
import Register from './components/Register';
import About from './components/About';
import Contact from './components/Contact';
import Pagenotfound from './components/Pagenotfound';
import Policy from './components/Policy';
import Footer from './components/Footer';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/login';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="app-container">
          <h1 className="toppp">🛒ASIF'S SHOP</h1>
          <ToastContainer />
          <Header />
          <Footer />
          <Switch>
            <Route exact path="/" component={ProductList} />
            <Route path="/product/:productId" component={ProductDetails} />
            <Route path="/cart" component={Cart} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/policy" component={Policy} />
            <Route path="/*" component={Pagenotfound} />
          </Switch>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
