import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import {NavLink} from'react-router-dom';

function ProductCard() {
    const { items, loading, error } = useSelector(state => state.card);
    const [sizeSelect, setSelect] = useState('');
    const [amount, setAmount] = useState(0);
    let card;

    console.log(items);

    const preloader = <div className='preloader' >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>;

    const sizeSelected = (id, e) => {
        setSelect(id);
    }

    const changeAmount = (act, e) => {
        let total;
        if(act === '-') {
        if(amount !== 0)    
        {total = amount-1} 
        else total=0;
        } else total= amount+1;
        setAmount(total)
    }

    if (typeof items === 'object') {
        card = <>
            <div className="title-product-card">{items.title}</div>
            <div className="content-product-card">
                <div className="image-product-card">
                    <img src={items.images[0]} className="card-image" alt={items.title}></img>
                </div>
                <div className="description-product-card">
                    <table>
                        <tbody>
                            <tr>
                                <th>Артикул</th>
                                <td>{items.sku}</td>
                            </tr>
                            <tr>
                                <th>Производитель</th>
                                <td>{items.manufacturer}</td>
                            </tr>
                            <tr>
                                <th>Цвет</th>
                                <td>{items.color}</td>
                            </tr>
                            <tr>
                                <th>материалы</th>
                                <td>{items.material}</td>
                            </tr>
                            <tr>
                                <th>Сезон</th>
                                <td>{items.season}</td>
                            </tr>
                            <tr>
                                <th>Повод</th>
                                <td>{items.reason}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="sizes-container">
                        <span className="sizes-title">Размер в наличии:</span>
                        {items.sizes.map(i => {
                            if (i.avalible)
                                return (<span key={nanoid()} className={(i.size === sizeSelect) ? "size-btn size-btn-select" : "size-btn"} onClick={(e) => sizeSelected(i.size, e)}>{i.size}</span>)
                        }
                        )}
                    </div>
                    <div className="block-inc-dec">
                        <span>Количество</span>
                        <div className="box-inc-dec">
                            <div className="dec" onClick={(e) => changeAmount('-', e)}>-</div>
                            <div className="amount">{amount}</div>
                            <div className="inc" onClick={(e) => changeAmount('+', e)}>+</div>
                        </div>
                    </div>
                    <NavLink className={(sizeSelect !== '') ? "btn-add-cart" : "btn-add-cart add-cart-none"} to={`/cart.html`}>В корзину</NavLink>
                </div>
            </div>
        </>
    }


    return (
        <section className="container-product-card">
            {loading ? preloader : false}
            {card}
        </section>
    )
}

export default ProductCard;