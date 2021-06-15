import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../components/images/stock/logoPLA.png';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom'


const background = {
	backgroundColor: '#000000'
};

const Navbarr = () => {
	return (
		<Navbar style={background} expand="lg">
			<div className="container d-flex justify-content-between">
				<NavLink exact to='/' activeClassName=' active home'>
					<Navbar.Brand >
						<img
							src={logo}
							width="150px"
							className="d-inline-block align-top"
							alt="logo"
						/>
					</Navbar.Brand>
				</NavLink>
				<Nav className="justify-content-end" activeKey="/home">

					<Navbar.Collapse id="basic-navbar-nav">
						<Nav.Item>
							<Nav.Link>
								<DropdownButton id="dropdown-item-button" title="Categorías">
									<Dropdown.Item as="button"><NavLink exact to='/category/Cocina' activeClassName=' active category'>Cocina</NavLink></Dropdown.Item>
									<Dropdown.Item as="button"><NavLink exact to='/category/Interior' activeClassName=' active category'>Interior</NavLink></Dropdown.Item>
									<Dropdown.Item as="button"><NavLink exact to='/category/Objetos' activeClassName=' active home'>Objetos</NavLink></Dropdown.Item>
								</DropdownButton>
							</Nav.Link>
						</Nav.Item>

						<Nav.Item>
							<Nav.Link exact to='/cart' activeClassName='active cart'>
								<CartWidget />
							</Nav.Link>
						</Nav.Item>


					</Navbar.Collapse>
				</Nav>
			</div>
		</Navbar>
	);
};

export default Navbarr;

