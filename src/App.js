import './App.css';
import logo from './assets/img/Logo.png'
import zImg from './assets/img/1.png'

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <a href="#" className="logo">
              <img src={logo} alt="" className="logo__img"/>
          </a>
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item"><a href="" className="nav__link">Features</a></li>
                    <li className="nav__item"><a href="" className="nav__link">Fashion</a></li>
                    <li className="nav__item"><a href="" className="nav__link">Music</a></li>
                    <li className="nav__item"><a href="" className="nav__link">Design</a></li>
                    <li className="nav__item"><a href="" className="nav__link">Travel</a></li>
                    <li className="nav__item"><a href="" className="nav__link">Style</a></li>
                    <li className="nav__item"><a href="" className="nav__link">People</a></li>
                </ul>
            </nav>
        </div>
      </header>
        <section>
            <div className="container">
                <div className="news">
                    <div className="newsBlock newsBlock_active">
                        <img src={zImg} alt="" className="newsBlock__img"/>
                        <h2 className="newsBlock__title">Arizona Ultimate Adventure – Grand Canyon & Beyond</h2>
                        <span className="newsBlock__crumbs">Travel   /   August 21 2017</span>
                    </div>
                    <div className="newsBlock">
                        <img src={zImg} alt="" className="newsBlock__img"/>
                        <h2 className="newsBlock__title">Arizona Ultimate Adventure – Grand Canyon & Beyond</h2>
                        <span className="newsBlock__crumbs">Travel   /   August 21 2017</span>
                    </div>
                    <div className="newsBlock">
                        <img src={zImg} alt="" className="newsBlock__img"/>
                        <h2 className="newsBlock__title">Arizona Ultimate Adventure – Grand Canyon & Beyond</h2>
                        <span className="newsBlock__crumbs">Travel   /   August 21 2017</span>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="container">
                <h2 className="title">The Latest</h2>
                <div className="newsLine">
                    <div className="newsBlock2 newsBlock2_active">
                        <img src={zImg} alt="" className="newsBlock2__img"/>
                        <h2 className="newsBlock__title newsBlock2__title">Joshua Tree Overnight Adventure</h2>
                        <p className="newsBlock__text newsBlock2__text">Aliquam gravida congue risus, ac sollicitudin risus dictum quis. Etiam urna libero, vehicula eget neque vel, congue blandit dui. Pellentesqu...
                        </p>
                        <span className="newsBlock__crumbs newsBlock2__crumbs">Travel   /   August 21 2017</span>
                    </div>
                    <div className="newsBlock2">
                        <img src={zImg} alt="" className="newsBlock2__img"/>
                        <h2 className="newsBlock__title newsBlock2__title">Joshua Tree Overnight Adventure</h2>
                        <p className="newsBlock__text newsBlock2__text">Aliquam gravida congue risus, ac sollicitudin risus dictum quis. Etiam urna libero, vehicula eget neque vel, congue blandit dui. Pellentesqu...
                        </p>
                        <span className="newsBlock__crumbs newsBlock2__crumbs">Travel   /   August 21 2017</span>
                    </div>
                    <div className="newsBlock2">
                        <img src={zImg} alt="" className="newsBlock2__img"/>
                        <h2 className="newsBlock__title newsBlock2__title">Joshua Tree Overnight Adventure</h2>
                        <p className="newsBlock__text newsBlock2__text">Aliquam gravida congue risus, ac sollicitudin risus dictum quis. Etiam urna libero, vehicula eget neque vel, congue blandit dui. Pellentesqu...
                        </p>
                        <span className="newsBlock__crumbs newsBlock2__crumbs">Travel   /   August 21 2017</span>
                    </div>
                </div>
            </div>
        </section>
        <section>
            slider
        </section>
        <section>
            <div className="container">
                <h2 className="title">Latest Reviews</h2>
                <div className="newsRew">
                    <div className="newsBlock3 newsBlock3__active">
                        <img src={zImg} alt="" className="newsBlock3__img"/>
                        <span className="newsBlock3__rating">6.4</span>
                        <h2 className="newsBlock__title newsBlock3__title">Joshua Tree Overnight Adventure</h2>
                        <p className="newsBlock__text newsBlock3__text">Aliquam gravida congue risus, ac sollicitudin risus dictum quis. Etiam urna libero, vehicula eget neque vel, congue blandit dui. Pellentesqu...
                        </p>
                        <span className="newsBlock__crumbs newsBlock3__crumbs">Travel   /   August 21 2017</span>
                    </div>
                    <div className="newsBlock3">
                        <img src={zImg} alt="" className="newsBlock3__img"/>
                        <span className="newsBlock3__rating">6.4</span>
                        <h2 className="newsBlock__title newsBlock3__title">Joshua Tree Overnight Adventure</h2>
                        <p className="newsBlock__text newsBlock3__text">Aliquam gravida congue risus, ac sollicitudin risus dictum quis. Etiam urna libero, vehicula eget neque vel, congue blandit dui. Pellentesqu...
                        </p>
                        <span className="newsBlock__crumbs newsBlock3__crumbs">Travel   /   August 21 2017</span>
                    </div>
                    <div className="newsBlock3">
                        <img src={zImg} alt="" className="newsBlock3__img"/>
                        <span className="newsBlock3__rating">6.4</span>
                        <h2 className="newsBlock__title newsBlock3__title">Joshua Tree Overnight Adventure</h2>
                        <p className="newsBlock__text newsBlock3__text">Aliquam gravida congue risus, ac sollicitudin risus dictum quis. Etiam urna libero, vehicula eget neque vel, congue blandit dui. Pellentesqu...
                        </p>
                        <span className="newsBlock__crumbs newsBlock3__crumbs">Travel   /   August 21 2017</span>
                    </div>
                    <div className="newsBlock3">
                        <img src={zImg} alt="" className="newsBlock3__img"/>
                        <span className="newsBlock3__rating">6.4</span>
                        <h2 className="newsBlock__title newsBlock3__title">Joshua Tree Overnight Adventure</h2>
                        <p className="newsBlock__text newsBlock3__text">Aliquam gravida congue risus, ac sollicitudin risus dictum quis. Etiam urna libero, vehicula eget neque vel, congue blandit dui. Pellentesqu...
                        </p>
                        <span className="newsBlock__crumbs newsBlock3__crumbs">Travel   /   August 21 2017</span>
                    </div>
                    <div className="newsBlock3">
                        <img src={zImg} alt="" className="newsBlock3__img"/>
                        <span className="newsBlock3__rating">6.4</span>
                        <h2 className="newsBlock__title newsBlock3__title">Joshua Tree Overnight Adventure</h2>
                        <p className="newsBlock__text newsBlock3__text">Aliquam gravida congue risus, ac sollicitudin risus dictum quis. Etiam urna libero, vehicula eget neque vel, congue blandit dui. Pellentesqu...
                        </p>
                        <span className="newsBlock__crumbs newsBlock3__crumbs">Travel   /   August 21 2017</span>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="container">
                <h2 className="title">Latest Articles</h2>
                <div className="newsArt">
                    <div className="newsList">
                        <div className="newsBlock4 newsBlock_active">
                            <img src={zImg} alt="" className="newsBlock4__img newsBlock__img"/>
                            <div className="newsBlock4__content">
                                <h2 className="newsBlock__title newsBlock4__title">Joshua Tree Overnight Adventure</h2>
                                <p className="newsBlock__text newsBlock4__text">Aliquam gravida congue risus, ac sollicitudin risus dictum quis. Etiam urna libero, vehicula eget neque vel, congue blandit dui. Pellentesqu...
                                </p>
                                <span className="newsBlock4__rating">6.4</span>
                            </div>
                        </div>
                        <div className="newsBlock4">
                            <img src={zImg} alt="" className="newsBlock4__img newsBlock__img"/>
                            <div className="newsBlock4__content">
                                <h2 className="newsBlock__title newsBlock4__title">Joshua Tree Overnight Adventure</h2>
                                <p className="newsBlock__text newsBlock4__text">Aliquam gravida congue risus, ac sollicitudin risus dictum quis. Etiam urna libero, vehicula eget neque vel, congue blandit dui. Pellentesqu...
                                </p>
                                <span className="newsBlock4__rating">6.4</span>
                            </div>
                        </div>
                        <div className="newsBlock4">
                            <img src={zImg} alt="" className="newsBlock4__img newsBlock__img"/>
                            <div className="newsBlock4__content">
                                <h2 className="newsBlock__title newsBlock4__title">Joshua Tree Overnight Adventure</h2>
                                <p className="newsBlock__text newsBlock4__text">Aliquam gravida congue risus, ac sollicitudin risus dictum quis. Etiam urna libero, vehicula eget neque vel, congue blandit dui. Pellentesqu...
                                </p>
                                <span className="newsBlock4__rating">6.4</span>
                            </div>
                        </div>
                        <div className="newsBlock4">
                            <img src={zImg} alt="" className="newsBlock4__img newsBlock__img"/>
                            <div className="newsBlock4__content">
                                <h2 className="newsBlock__title newsBlock4__title">Joshua Tree Overnight Adventure</h2>
                                <p className="newsBlock__text newsBlock4__text">Aliquam gravida congue risus, ac sollicitudin risus dictum quis. Etiam urna libero, vehicula eget neque vel, congue blandit dui. Pellentesqu...
                                </p>
                                <span className="newsBlock4__rating">6.4</span>
                            </div>
                        </div>
                    </div>
                    <div className="ad">
                        reklama
                    </div>
                    <div className="newsSlider">
                        slider
                    </div>
                    <div className="newsPost">
                        <div className="newsBlock5_active">
                            <img src={zImg} alt="" className="newsBlock5__img_active"/>
                            <div className="newsBlock5__content_active">
                                <h2 className="newsBlock__title newsBlock5__title_active">Joshua Tree Overnight Adventure</h2>
                                <p className="newsBlock__text newsBlock5__text_active">Aliquam gravida congue risus, ac sollicitudin risus dictum quis. Etiam urna libero, vehicula eget neque vel, congue blandit dui. Pellentesqu...
                                </p>
                            </div>
                        </div>
                        <div className="newsBlock5">
                            <img src={zImg} alt="" className="newsBlock5__img"/>
                            <div className="newsBlock5__content">
                                <h2 className="newsBlock__title newsBlock5__title">Joshua Tree Overnight Adventure</h2>
                                <p className="newsBlock__text newsBlock5__text">Aliquam gravida congue risus, ac sollicitudin risus dictum quis. Etiam urna libero, vehicula eget neque vel, congue blandit dui. Pellentesqu...
                                </p>
                            </div>
                        </div>
                        <div className="newsBlock5">
                            <img src={zImg} alt="" className="newsBlock5__img"/>
                            <div className="newsBlock5__content">
                                <h2 className="newsBlock__title newsBlock5__title">Joshua Tree Overnight Adventure</h2>
                                <p className="newsBlock__text newsBlock5__text">Aliquam gravida congue risus, ac sollicitudin risus dictum quis. Etiam urna libero, vehicula eget neque vel, congue blandit dui. Pellentesqu...
                                </p>
                            </div>
                        </div>
                        <div className="newsBlock5">
                            <img src={zImg} alt="" className="newsBlock5__img"/>
                            <div className="newsBlock5__content">
                                <h2 className="newsBlock__title newsBlock5__title">Joshua Tree Overnight Adventure</h2>
                                <p className="newsBlock__text newsBlock5__text">Aliquam gravida congue risus, ac sollicitudin risus dictum quis. Etiam urna libero, vehicula eget neque vel, congue blandit dui. Pellentesqu...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="container">
                <div>slider</div>
            </div>
        </section>
        <section>
            <div className="container">
                <h2 className="title">Latest Stories</h2>
                <div className="newsStor">
                    <div className="newsBlock6">
                        <h2 className="newsBlock__title newsBlock6__title">Joshua Tree Overnight Adventure</h2>
                        <p className="newsBlock__text newsBlock6__text">Aliquam gravida congue risus, ac sollicitudin risus dictum quis. Etiam urna libero, vehicula eget neque vel, congue blandit dui. Pellentesqu...
                        </p>
                        <span className="newsBlock__crumbs newsBlock6__crumbs">Travel   /   August 21 2017</span>
                    </div>
                    <div className="newsBlock6">
                        <h2 className="newsBlock__title newsBlock6__title">Joshua Tree Overnight Adventure</h2>
                        <p className="newsBlock__text newsBlock6__text">Aliquam gravida congue risus, ac sollicitudin risus dictum quis. Etiam urna libero, vehicula eget neque vel, congue blandit dui. Pellentesqu...
                        </p>
                        <span className="newsBlock__crumbs newsBlock6__crumbs">Travel   /   August 21 2017</span>
                    </div>
                    <div className="newsBlock6">
                        <h2 className="newsBlock__title newsBlock6__title">Joshua Tree Overnight Adventure</h2>
                        <p className="newsBlock__text newsBlock6__text">Aliquam gravida congue risus, ac sollicitudin risus dictum quis. Etiam urna libero, vehicula eget neque vel, congue blandit dui. Pellentesqu...
                        </p>
                        <span className="newsBlock__crumbs newsBlock6__crumbs">Travel   /   August 21 2017</span>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="container">
                <div className="container">
                    <h2 className="title">Subscribe</h2>
                    <span className="subtitle">Find out first about new and important news</span>
                    <div className="subscribe">
                        <input type="text" className="subscribe__input"/>
                        <button className="subscribe__btn">Subscribe</button>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="container">
                video
            </div>
        </section>
        <section>
            photos
        </section>
        <footer className="footer">
            <a href="#" className="logo">
                <img src={logo} alt="" className="logo__img"/>
            </a>
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item"><a href="" className="nav__link">Features</a></li>
                    <li className="nav__item"><a href="" className="nav__link">Fashion</a></li>
                    <li className="nav__item"><a href="" className="nav__link">Music</a></li>
                    <li className="nav__item"><a href="" className="nav__link">Design</a></li>
                    <li className="nav__item"><a href="" className="nav__link">Travel</a></li>
                    <li className="nav__item"><a href="" className="nav__link">Style</a></li>
                    <li className="nav__item"><a href="" className="nav__link">People</a></li>
                </ul>
            </nav>
            <div className="social">
                social
            </div>
            <div className="copyrigth">
                copyrigth
            </div>
        </footer>
    </div>
  );
}

export default App;
