import React from 'react';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


const Item = ({ item }) => {
    return (
        <div className=" mt-5 col-lg-3">
            <Card style={{ width: '18rem' }}>
                <Link to={`/item/${item.id}`}> <Card.Img variant="top" src={item.image} /></Link>
                <Card.Body>
                    <Card.Title key={item.title}><strong>{item.title}</strong></Card.Title>
                    <Card.Text key={item.description}>
                        {item.description}
                    </Card.Text>
                    <div key={item.price}><p className="text-center h5"> ${item.price}</p></div>


                    <Link to={`/item/${item.id}`}><Button variant="primary">Ver artículo</Button></Link>

                    {/* <div className="row">
                        <ItemCount buyButton='agregar al carrito' />
                    </div> */}
                </Card.Body>
            </Card>
        </div>

    )
}
export default Item
