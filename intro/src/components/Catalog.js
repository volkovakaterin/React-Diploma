/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { fetchCategories, fetchProducts, goSearchCatalog, fetchLoadMore, searchingInCatalog} from '../redux/actionCreators';
import {useSelector, useDispatch} from 'react-redux';

function Catalog() {
  const itemsCategories = useSelector(state=>state.categories.items); // список категорий
  const itemsProducts = useSelector(state=>state.products.items); // список товаров
  const lengthItemsProducts = itemsProducts.length; // длина списка товаров
  const productsStore = useSelector(state=>state.products); // productsReducer
  const [invisible, setInvisible] = useState(productsStore.catalogSearch); // видимость инпута поиска в каталоге
  const [searchForm, setSearch] = useState(productsStore.valueSearch); // значение поля поиска
  const [loadingMoreVisible, setLoadingMore] = useState(productsStore.loadingMoreVisible); // видимость кнопки Загрузить еще
  const [select, setSelect] = useState('11') // выбранная категория
  console.log(productsStore);
  const dispatch = useDispatch();
  let products;
  let categories;

    

  useEffect(() => {
    fetchCategories(dispatch); // запрос на список категорий
    fetchProducts(dispatch, select); // запрос на список товаров в зависимости от категории
    dispatch(goSearchCatalog(false)); // меняет headerSearch, запрещает переход на страницу каталога из шапки
    setSearch(productsStore.valueSearch); //меняет значение поля поиска
    setLoadingMore(productsStore.loadingMoreVisible); // меняет видимость кнопки Загрузить еще
  }, [dispatch, productsStore.loadingMoreVisible, productsStore.valueSearch, select])

 const activeCategories=(id, e)=>{
  console.log(id);
    e.preventDefault();
    setSelect(id);// меняет категорию каталога
    fetchProducts(dispatch, id); // запрос на список товаров в зависимости от категории
    setLoadingMore('');// показывает кнопку Загрузить еще
 }

 const searching =(e)=>{
  e.preventDefault();
  console.log(searchForm);
  searchingInCatalog(dispatch, searchForm, select);
 }
  
  if(typeof itemsCategories === 'object') {
    categories = itemsCategories.map(item => (
    <li key={item.id} className="nav-item">
    <a href="#" className={(item.id === select) ? 'nav-link active' : 'nav-link'} onClick={(e)=>activeCategories(item.id, e)}>{item.title}</a>
  </li>
  ))
  }

  if(typeof itemsProducts === 'object'){products = itemsProducts.map(item=>(
    <div key = {item.id} className="col-4">
                <div className="card catalog-item-card">
                  <img src= {item.images[0]}
                    className="card-img-top img-fluid" alt={item.title}></img>
                  <div className="card-body">
                    <p className="card-text">{item.title}</p>
                    <p className="card-text">{item.price}</p>
                    <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
                  </div>
                </div>
              </div>
  ))}
    return(
    <main className="container">
      <section className="catalog">
            <h2 className="text-center">Каталог</h2>
            <form className={`catalog-search-form form-inline ${invisible}`} onSubmit={e=>searching(e)}>
              <input className="form-control" placeholder="Поиск" onChange={e=>setSearch(e)}  value={searchForm}></input>
            </form>
            <ul className="catalog-categories nav justify-content-center">
              {/* <li className="nav-item">
                <a className="nav-link active" href="#">Все</a>
              </li> */}
              {categories}
            </ul>
            <div className="row-catalog">
              {products}
            </div>
            <div className="text-center">
              <button className={`btn btn-outline-primary ${loadingMoreVisible}`} onClick={(e)=>fetchLoadMore(dispatch, e, lengthItemsProducts, select)}>Загрузить ещё</button>
            </div>
          </section>
    </main>
        
    )
}

export default Catalog;