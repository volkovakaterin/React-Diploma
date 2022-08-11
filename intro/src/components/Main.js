import React, { useEffect, useState } from 'react';
import Catalog from './Catalog';
import { fetchSales } from '../redux/actionCreators';
import { useSelector, useDispatch } from 'react-redux';

function Main() {
  const { items, loading, error } = useSelector(state => state.topSales);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchSales(dispatch);
  }, [dispatch])

  const products = items.map(item => (
    <div key={item.id} className="sales-item-card">
      <img src={item.images[0]}
        className="card-img-top img-fluid" alt="Босоножки 'MYER'"></img>
      <div className="card-body">
        <p className="card-text">{item.title}</p>
        <p className="card-text">{item.price}</p>
        <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
      </div>
    </div>
  ))

  const preloader = <div className='preloader' >
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>;

  return (
    <>
      <main className="container">
        <div className="row">
          <div className="col">
            <section className="top-sales">
              <h2 className="text-center">Хиты продаж!</h2>
              {loading ? preloader : false}
              <div className='sales-cards-container'>
                {products}
              </div>
            </section>
            <Catalog />
          </div>
        </div>
      </main>
    </>
  )
}

export default Main;