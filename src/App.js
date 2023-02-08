import './App.css';
import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import CountDown from "./components/Timer";
import logo from './image/logo.png'
import kraev from './image/kraev_2.png'
import olonov from './image/Olonov.png'
import shemelin from './image/Shemelin.png'
import baldova from './image/Baldova.png'
import  service_1 from  './image/1.png'
import  service_2 from  './image/2.png'
import  service_3 from  './image/3.png'
import  service_4 from  './image/4.png'
import  service_5 from  './image/5.png'
import  service_6 from  './image/6.png'
import  service_7 from  './image/7.png'
import  service_8 from  './image/8.png'
import  icon_t from  './image/Icon_t.png'

const defaultState = {
    center: [56.304570, 44.073252],
    zoom: 15
}

function App() {

    return (
        <div className="App">
            <div className='Container-fluid-red'>
                <div className='Container'>
                    <div className='Header'>
                        <div className='Header-logo'>
                            <img src={logo}/>
                        </div>
                        <div className='Header-nav'>
                            <ul className='Header-nav-ul'>
                                <li>ГЛАВНАЯ</li>
                                <li>О КЛУБЕ</li>
                                <li>УСЛУГИ</li>
                                <li>ГАЛЕРЕЯ</li>
                                <li>КОМАНДА</li>
                                <li>КОНТАКТЫ</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Container-fluid-black'>
                <div className='Container'>
                    <div className='Main'>
                        <div className='Main-title'>
                            <h1>TTPROFI</h1>

                            <h2>КЛУБ НАСТОЛЬНОГО ТЕННИСА<br/>
                                В НИЖНЕМ НОВГОРОДЕ</h2>
                            <hr align="left"/>

                            <h3>+7 (910) 393-27-27 - Групповые и индивидуальные тренировки <br/>
                                +7 (915) 944-78-34 - Аренда стола, детские тренировки</h3>
                            <div className='Main-title-btn'>
                                <button className='Main-title-btn-registration'>РЕГИСТРАЦИЯ НА ТУРНИРЫ</button>
                                <a href="https://vk.com/ttprofinn" target="_blank">
                                    <button className='Main-title-btn-vk'>ГРУППА VK</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='Section'>
                <div className='Container'>
                    <h2>УСЛУГИ</h2>
                    <div className='Services-ul'>
                        <ul className='Services-ul-items'>
                            <li className='Services-ul-items-item'>
                                <img src={service_1}/>
                                <h4>Тренировка - игра на счет</h4>
                                <div className='Services-ul-items-item-p'>
                                    <p>1300 ₽</p>
                                </div>
                            </li>
                            <li className='Services-ul-items-item'>
                                <img src={service_2}/>
                                <h4>Разбор матча</h4>
                                <div className='Services-ul-items-item-p'>
                                    <p>400 ₽</p>
                                </div>
                            </li>
                            <li className='Services-ul-items-item'>
                                <img src={service_3}/>
                                <h4>Детские групповые тренировки</h4>
                                <div className='Services-ul-items-item-p'>
                                    <p>400 ₽</p>
                                </div>
                            </li>
                            <li className='Services-ul-items-item'>
                                <img src={service_4}/>
                                <h4>Взрослые групповые тренировки начального уровня в “TTPROFI”</h4>
                                <div className='Services-ul-items-item-p'>
                                    <p>600 ₽</p>
                                </div>
                            </li>
                            <li className='Services-ul-items-item'>
                                <img src={service_5}/>
                                <h4>Организация турнира</h4>
                                <div className='Services-ul-items-item-p'>
                                    <p>15000 ₽</p>
                                </div>
                            </li>
                            <li className='Services-ul-items-item'>
                                <img src={service_6}/>
                                <h4>Аренда стола</h4>
                                <div className='Services-ul-items-item-p'>
                                    <p>300 ₽</p>
                                </div>
                            </li>
                            <li className='Services-ul-items-item'>
                                <img src={service_7}/>
                                <h4>Тренер на турнир</h4>
                                <div className='Services-ul-items-item-p'>
                                    <p>1300 ₽</p>
                                </div>
                            </li>
                            <li className='Services-ul-items-item'>
                                <img src={service_8}/>
                                <h4>Взрослые групповые тренировки продвинутого уровня в “TTPROFI”</h4>

                                <div className='Services-ul-items-item-p'>
                                    <p>600 ₽</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className='Section Border-top Background-wheat'>
                <div className='Container'>
                    <h2>ТУРИНИРЫ</h2>
                    <div className='Tournier-ul'>
                        <ul className='Tournier-ul-items'>
                            <li className='Tournier-ul-items-item'>
                                <h3>MAX 270</h3>
                                <h4>Осталось 10 мест</h4>
                                <img src={icon_t}/>
                                <CountDown days={1} hours={1} minutes={45}/>
                                <button>Зарегистрироваться</button>
                            </li>
                            <li className='Tournier-ul-items-item'>
                                <h3>MAX 450</h3>
                                <h4>Осталось 10 мест</h4>
                                <img src={icon_t}/>
                                <CountDown days={1} hours={1} minutes={45}/>
                                <button>Зарегистрироваться</button>
                            </li>
                            <li className='Tournier-ul-items-item'>
                                <h3>TEAM TOURNAMENT</h3>
                                <h4>Осталось 10 мест</h4>
                                <img src={icon_t}/>
                                <CountDown days={1} hours={1} minutes={45}/>
                                <button>Зарегистрироваться</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='Section Border-top'>
                <div className='Container'>
                    <h2>ТРЕНЕРСКИЙ СОСТАВ</h2>
                    <div className='Coach-ul'>
                        <ul className='Coach-ul-items'>
                            <li className='Coach-ul-items-item'>
                                <img src={kraev}/>
                                <h3>Краев Валерий</h3>
                                <text>Главный тренер. Тренер групповых, индивидуальных тренировок</text>
                                <text>Уровень: Мастер спорта</text>
                            </li>
                            <li className='Coach-ul-items-item'>
                                <img src={olonov}/>
                                <h3>Олонов Александр</h3>
                                <text>Тренер групповых, индивидуальных тренировок</text>
                                <text>Уровень: Мастер спорта</text>
                            </li>
                            <li className='Coach-ul-items-item'>
                                <img src={shemelin}/>
                                <h3>Шемелин Егор</h3>
                                <text>Тренер групповых, индивидуальных тренировок</text>
                                <text>Уровень: Кандидат в мастера спорта</text>
                            </li>
                            <li className='Coach-ul-items-item'>
                                <img src={baldova}/>
                                <h3>Балдова Надежда</h3>
                                <text>Тренер начального обучения. Групповые, индивидульные тренировки</text>
                                <text>Уровень: Кандидат в мастера спорта</text>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='Section Border-top Background-black Margin-bottom-none'>
                <div className='Container'>
                    <footer>
                        <div className='footer-contacts'>
                            <h3>КОНТАКТЫ</h3>
                            <div className='footer-contacts-email'>
                                <h4>Email:</h4>
                                <text>Поддержка: ваша-почта@mail.ru</text>
                            </div>
                            <div className='footer-contacts-phone'>
                                <h4>ТЕЛЕФОН:</h4>
                                <text>+7 (800) 0000-000</text>
                            </div>
                            <div className='footer-contacts-address'>
                                <h4>Адрес:</h4>
                                <text>г.Нижний Новгород, ул.Деловая 20А, <br/> 2 этаж</text>
                            </div>
                        </div>
                        <div className='footer-logo'>
                            <img src={logo}/>
                        </div>
                        <div className='footer-maps'>
                            <YMaps>
                                <Map defaultState={defaultState} width="100%">
                                    <Placemark geometry={[56.304570, 44.073252]}/>
                                </Map>
                            </YMaps>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
}

export default App;
