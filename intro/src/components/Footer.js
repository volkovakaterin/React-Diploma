import React, { useEffect, useState } from 'react';
//import logo from '../img/header-logo.png';
import {nanoid} from 'nanoid';
import {NavLink} from'react-router-dom';
// import About from './About';
// import Contacts from './Contacts';
// import Catalog from './Catalog';

function Footer() {
    const [select, setSelect] = useState('');

    const links = [
        {link: '/catalog.html', name: 'Каталог', key: nanoid()},
        {link: '/about.html', name: 'О магазине', key: nanoid()},
        {link: '/contacts.html', name: 'Контакты', key: nanoid()},

    ];
  
    const activeLink = (link, e) => {
    setSelect(link);
    } 
    const navigation = links.map((element) =>
    <li key={element.key} className="nav-item">
     <NavLink key={element.key} className={(element.link === select) ? 'nav-item-active nav-item nav-link' : 'nav-item nav-link'} to={element.link}  onClick={(e)=>activeLink(element.link, e)}>{element.name}</NavLink>   
    </li>
     );
    return(
        <>
        <footer className="container bg-light footer">
      <div className="row row-footer">
        <div className="col">
          <section>
            <h5>Информация</h5>
            <ul className="nav flex-column">
              {navigation}  
            </ul>
          </section>
        </div>
        <div className="col">
          <section>
            <h5>Принимаем к оплате:</h5>
            <div className="footer-pay">
              <div className="footer-pay-systems footer-pay-systems-paypal"></div>
              <div className="footer-pay-systems footer-pay-systems-master-card"></div>
              <div className="footer-pay-systems footer-pay-systems-visa"></div>
              <div className="footer-pay-systems footer-pay-systems-yandex"></div>
              <div className="footer-pay-systems footer-pay-systems-webmoney"></div>
              <div className="footer-pay-systems footer-pay-systems-qiwi"></div>
            </div>
          </section>
          <section>
            <div className="footer-copyright">2009-2019 © BosaNoga.ru — модный интернет-магазин обуви и аксессуаров.
              Все права защищены.Доставка по всей России!
            </div>
          </section>
        </div>
        <div className="col text-right">
          <section className="footer-contacts">
            <h5>Контакты:</h5>
            <a className="footer-contacts-phone" href="tel:+7-495-790-35-03">+7 495 79 03 5 03</a>
            <span className="footer-contacts-working-hours">Ежедневно: с 09-00 до 21-00</span>
            <a className="footer-contacts-email" href="mailto:office@bosanoga.ru">office@bosanoga.ru</a>
            <div className="footer-social-links">
              <div className="footer-social-link footer-social-link-twitter"></div>
              <div className="footer-social-link footer-social-link-vk"></div>
            </div>
          </section>
        </div>
      </div>
    </footer>
</>
    )
}

export default Footer;