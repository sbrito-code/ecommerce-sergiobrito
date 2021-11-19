import React, {useState} from 'react';

const ItemCount = (props) => {
    const [stock,setStock] = useState(props.stock);
    const [unidades,setUnidades] = useState(0);

    const handleStock={
        sumaStock:()=>{
            if (stock === 0){
                alert('no hay stock')
            }
            else{
                setUnidades(unidades+1);
                setStock(stock-1);
            }
        },
        restaStock:()=>{
            if (unidades === 0){
                alert('no hay stock')
            }
            else{
                setUnidades(unidades-1);
                setStock(stock+1)
            }
        }
    }

    return(
        <div>
            <div className="ButtonCountCart">
                <button onClick={handleStock.restaStock} disabled={unidades === 0}>-</button>
                <p>{unidades}</p>
                <button onClick={handleStock.sumaStock} disabled={stock === 0}>+</button>
            </div>
            <div>
                <p>Stock disponible: {stock}</p>
            </div>
            <div>
                <button onClick={()=>props.onAdd({unidades})}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;