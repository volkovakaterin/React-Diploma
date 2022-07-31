import React, { useEffect, useState, useRef } from 'react';
import logo from '../img/header-logo.png';
import {nanoid} from 'nanoid';
import {NavLink, Navigate} from'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {goSearchCatalog, visibleSearchCatalog, catalogRender} from '../redux/actionCreators';
import banner from '../img/banner.jpg';

function Header() {
  const headerSearch= useSelector(state=>state.products.headerSearch);
  const storeProducts = useSelector(state=>state.products)
  const dispatch = useDispatch();  
  const links = [
        {link: '/', name: 'Главная', key: nanoid()},
        {link: '/catalog.html', name: 'Каталог', key: nanoid()},
        {link: '/about.html', name: 'О магазине', key: nanoid()},
        {link: '/contacts.html', name: 'Контакты', key: nanoid()},

    ];
  
  const [invisible, setInvisible] = useState('invisible'); //видимость поля поиска в шапке
  const [searchForm, setSearch] = useState(''); // значение поля поиска
  const [select, setSelect] = useState(''); //выбранная и актуальная страница 
  const [catalogRenderState, setCatalogRender] = useState(false) //страница каталога была или не была отрисована
  const latestHeaderSearch = useRef('');
  latestHeaderSearch.current = useSelector(state=>state.products.headerSearch)// (видимость инпута поиска в шапке сайта) разрешение на переход в поиск каталога из поиска шапки
  useEffect(() => {
    setCatalogRender(storeProducts.catalogRender) 
  }, [headerSearch, storeProducts.catalogRender])


  const activeLink = (link, e) => {
    setSelect(link);
    }

  const openSearch = () => {
    if(invisible === 'invisible') {setInvisible('')} // если поиск не виден, показать его
         else if(searchForm.trim() !== '') { // если в поиске есть значение
            console.log('поиск');
            dispatch(goSearchCatalog(true)); // меняет headerSearch, разрешает переход на страницу каталога
            dispatch(visibleSearchCatalog('block', searchForm)) // показывает поиск в каталоге и передает в него значение
            setInvisible('invisible'); //скрывает поиск в шапке
            setSearch(''); // очищает значение поиска
            } else setInvisible('invisible')// иначе скрывает поле
    } 
  console.log(catalogRenderState);
  if(latestHeaderSearch.current && catalogRenderState === false) { // если разрешён переход в каталог и он не отрисован
    console.log("переход");
    dispatch(catalogRender(true));// каталог отрисован
    return <Navigate to="/catalog.html"/>
  } 
  const menu = links.map((element) =>
    <li key={element.key} className="nav-item">
     <NavLink key={element.key} className={(element.link === select) ? 'menu__item menu__item-active nav-link' : 'menu__item nav-link'} to={element.link}  onClick={(e)=>activeLink(element.link, e)}>{element.name}</NavLink>   
    </li>
     );
  return (
    <>
    <header className="container">
        <div className="row">
            <div className="col">
                <nav className="navbar navbar-expand-sm navbar-light bg-light">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="Bosa Noga"></img>
                    </a>

                    <div className="collapase navbar-collapse" id="navbarMain">
                        <ul className="navbar-nav mr-auto">
                            {menu}
                        </ul>
                        <div className='header-pics-search'>
                            <form data-id="search-form" className= {`header-controls-search-form form-inline ${invisible}`}>
                                <input className="form-control" placeholder="Поиск" onChange={e=>setSearch(e.target.value)} value={searchForm}></input>
                            </form>
                            <div className="header-controls-pics">
                                <div data-id="search-expander" className="header-controls-pic header-controls-search" onClick={() => openSearch()}></div>
                                {/* <!-- Do programmatic navigation on click to /cart.html --> */}
                                <div className="header-controls-pic header-controls-cart">
                                    <div className="header-controls-cart-full">1</div>
                                    <div className="header-controls-cart-menu"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="banner">
                    <img src={banner} className="img-fluid" alt="К весне готовы!"></img>
                    <h2 className="banner-header">К весне готовы!</h2>
                </div>
            </div>
        </div>
    </header>
    </>
  );
}

export default Header;
