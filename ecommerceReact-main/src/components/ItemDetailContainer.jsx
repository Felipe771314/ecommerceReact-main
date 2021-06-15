import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import Data from '../stock.json'
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const { itemId } = useParams();


    useEffect(() => {
        const filter = Data.filter(item => item.id === +itemId)

        const getItems = new Promise((resolve) => {
            setTimeout(() => {
                resolve(
                    filter[0]
                )
            }, 1000)
        })


        getItems.then((result) => {
            setItem(result)
            return;
        })

    }, [itemId])



    return (
        <>
            <ItemDetail item={item}></ItemDetail>
        </>
    )
}



export default ItemDetailContainer