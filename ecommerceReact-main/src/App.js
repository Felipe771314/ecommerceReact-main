import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import Navbarr from './components/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartProvider } from './contexts/CartContext';


// import ItemDetail from './components/ItemDetail';
// import CartWidget from './components/CartWidget';
// import Cart from './components/Cart';


function App() {
	return (
		<CartProvider >

			<BrowserRouter>
				<body>
					<header>
						<Navbarr />
					</header>
					<Switch>
						<Route exact path='/'>
							<ItemListContainer />
							{/* <Home /> */}
						</Route>
						<Route exact path='/category/:id'>
							<ItemListContainer />
						</Route>
						<Route path='/item/:itemId'>
							<ItemDetailContainer />
						</Route>



					</Switch>

				</body>

			</BrowserRouter>
		</CartProvider>
	);
}




export default App;



