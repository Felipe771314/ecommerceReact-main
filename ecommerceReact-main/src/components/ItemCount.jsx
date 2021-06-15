import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from 'react-bootstrap/Button';



const ItemCount = ({ value, stock, addOn, buyButton }) => {

    let [counter, setCounter] = useState(parseInt(value));


  
    const handleAdd = (e) => setCounter((c) => c + 1);

    
    const handleSubstract = (e) => setCounter((c) => c - 1);

    const agregar = () => {
        addOn(counter)
    }

    return (
        <>
            <div>
                <div className="row d-flex justify-content-between p-3">
                    <div className="col-3">
                        <Button disabled={counter <= 1} variant="outline-primary" onClick={handleSubstract} ><RemoveIcon fontSize="medium" /></Button>
                    </div>

                    <div className="col-3">
                        <Button className="text-center align-center" disabled variant="outline-primary"  >{counter}</Button>
                        {/* <span className="text-center" variant="outline-primary" >{counter}</span> */}
                    </div>

                    <div className="col-3">
                        <Button disabled={counter >= stock} variant="outline-primary" onClick={handleAdd}> <AddIcon fontSize="medium" /></Button>
                    </div>
                </div>
                <div className="row">
                    <Button disabled={counter < 1} type='button' className="mt-3 " variant="primary" onClick={agregar}>{buyButton}</Button>
                </div>

            </div>
        </>
    );

}

export default ItemCount;

