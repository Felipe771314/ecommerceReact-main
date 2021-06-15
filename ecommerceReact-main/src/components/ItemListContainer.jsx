import React, { useState, useEffect } from 'react'
import ItemList from './ItemList';
import Data from '../stock.json'
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import logo from '../components/images/stock/logoPLA.png';


const ItemListContainer = () => {

  const [items, setItems] = useState([])

  const [loader, setLoader] = useState(false);

  const { id } = useParams();


  useEffect(() => {
    const filter = id ? Data.filter(item => item.type === id) : Data
    const getItems = new Promise(resolve => {
      setLoader(true);
      setTimeout(() => {
        resolve(
          filter
        )
      }, 2000)
    })

    id
      ? getItems.then(res => {
        setItems(res);
        setLoader(false);
      })
      : getItems.then(res => {
        setItems(res);
        setLoader(false);
      });
  }, [id])
  return (
    <>
      <div className="container">
        {loader && <Spinner className='d-flex justify-center' animation="grow" role="status">
          <span className="sr-only mx-auto"><img
            src={logo}
            width="150px"
            className="d-inline-block align-top"
            alt="logoPLA"
          /></span>
        </Spinner>}
        {!loader && <ItemList items={items} />}

      </div>
    </>
  )
}
export default ItemListContainer;