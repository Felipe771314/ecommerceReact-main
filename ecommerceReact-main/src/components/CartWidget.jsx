import React from 'react';
import buyIcon from '../components/images/buy-icon.png';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'



const CartWidget = () => {
    return (
        <Button className="mr-3" href="#"><Link to={`/cart`}><img src={buyIcon} alt="buy icon" width="23px" /></Link></Button>
    );
}


export default CartWidget;