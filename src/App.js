import './App.scss';
import logo from './assets/img/Logo.png'
import zImg from './assets/img/1.png'
import ad from './assets/img/Bitmap.png'

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <a href="#" className="logo">
              <img src={logo} alt="" className="logo__img"/>
          </a>
            <div data-uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky" className="navSticky">
                <div className="navContainer">
                    <nav className="nav uk-navbar-container">
                        <ul className="nav__list uk-navbar-nav">
                            <li className="nav__item"><a href="" className="nav__link">Features</a></li>
                            <li className="nav__item"><a href="" className="nav__link">Fashion</a></li>
                            <li className="nav__item"><a href="" className="nav__link">Music</a></li>
                            <li className="nav__item nav__item_active"><a href="" className="nav__link">Design</a></li>
                            <li className="nav__item"><a href="" className="nav__link">Travel</a></li>
                            <li className="nav__item"><a href="" className="nav__link">Style</a></li>
                            <li className="nav__item"><a href="" className="nav__link">People</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
      </header>
        <section>
            <div className="container">
                <div className="news">
                    <div className="newsBlock newsBlock_active">
                        <img src={zImg} alt="" className="newsBlock__img"/>
                        <h2 className="newsBlock__title">Arizona Ultimate Adventure – Grand Canyon & Beyond</h2>
                        <ul className="newsBlock__crumbs uk-breadcrumb">
                            <li><a href="">Travel</a></li>
                            <li><a href="">August 21 2017</a></li>
                        </ul>
                    </div>
                    <div className="news__left">
                        <div className="newsBlock">
                            <img src={zImg} alt="" className="newsBlock__img"/>
                            <h2 className="newsBlock__title">Arizona Ultimate Adventure – Grand Canyon & Beyond</h2>
                            <ul className="newsBlock__crumbs uk-breadcrumb">
                            <li><a href="">Travel</a></li>
                            <li><a href="">August 21 2017</a></li>
                        </ul>
                        </div>
                        <div className="newsBlock">
                            <img src={zImg} alt="" className="newsBlock__img"/>
                            <h2 className="newsBlock__title">Arizona Ultimate Adventure – Grand Canyon & Beyond</h2>
                            <ul className="newsBlock__crumbs uk-breadcrumb">
                            <li><a href="">Travel</a></li>
                            <li><a href="">August 21 2017</a></li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="container">
                <h2 className="title">The Latest</h2>
                <div className="newsLine">
                    <div className="uk-card uk-card-body newsBlock2 newsBlock2_active">
                        <img src={zImg} alt="" className="newsBlock2__img"/>
                        <h2 className="newsBlock2__title">Joshua Tree Overnight Adventure</h2>
                        <p className="newsBlock2__text">Aliquam gravida congue risus, ac sollicitudin risus dictum quis. Etiam urna libero, vehicula eget neque vel, congue blandit dui. Pellentesqu...
                        </p>
                        <ul className="newsBlock2__crumbs uk-breadcrumb">
                            <li><a className='breadcrumb breadcrumb_main' href="">Travel</a></li>
                            <li><a className='breadcrumb breadcrumb_second' href="">August 21 2017</a></li>
                        </ul>
                    </div>
                    <div className="uk-card uk-card-body newsBlock2 newsBlock2_active">
                        <img src={zImg} alt="" className="newsBlock2__img"/>
                        <h2 className="newsBlock2__title">Joshua Tree Overnight Adventure</h2>
                        <p className="newsBlock2__text">Aliquam gravida congue risus, ac sollicitudin risus dictum quis. Etiam urna libero, vehicula eget neque vel, congue blandit dui. Pellentesqu...
                        </p>
                        <ul className="newsBlock2__crumbs uk-breadcrumb">
                            <li><a className='breadcrumb breadcrumb_main' href="">Travel</a></li>
                            <li><a className='breadcrumb breadcrumb_second' href="">August 21 2017</a></li>
                        </ul>
                    </div>
                    <div className="uk-card uk-card-body newsBlock2 newsBlock2_active">
                        <img src={zImg} alt="" className="newsBlock2__img"/>
                        <h2 className="newsBlock2__title">Joshua Tree Overnight Adventure</h2>
                        <p className="newsBlock2__text">Aliquam gravida congue risus, ac sollicitudin risus dictum quis. Etiam urna libero, vehicula eget neque vel, congue blandit dui. Pellentesqu...
                        </p>
                        <ul className="newsBlock2__crumbs uk-breadcrumb">
                            <li><a className='breadcrumb breadcrumb_main' href="">Travel</a></li>
                            <li><a className='breadcrumb breadcrumb_second' href="">August 21 2017</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="slider">
                <div data-uk-slider="autoplay: true">
                    <div className="uk-slider-container">
                        <div className="buttons">
                            <button href="" data-uk-slidenav-previous data-uk-slider-item="previous"></button>
                            <button href="" data-uk-slidenav-next data-uk-slider-item='next'></button>
                        </div>
                        <ul className="uk-slider-items uk-grid">
                            <li>
                                <div className="newsBlock newsBlock_slide">
                                    <img src={zImg} alt="" className="newsBlock__img"/>
                                    <h2 data-uk-slider-parallax="x: 1000,0,0; opacity: 1,1,0" className="newsBlock__title">Arizona Ultimate Adventure – Grand Canyon & Beyond</h2>
                                    <p data-uk-slider-parallax="x: 500,0,0; opacity: 1,1,0" className="newsBlock__text">Ready for a real New Year’s resolution? Why not commit to setting your feet on a brand-new long-distance hiking trail?
                                    </p>
                                    <ul data-uk-slider-parallax="x: 200,0,0; opacity: 1,1,0" className="newsBlock__crumbs uk-breadcrumb">
                                        <li><a href="">Travel</a></li>
                                        <li><a href="">August 21 2017</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="newsBlock newsBlock_slide">
                                    <img src={zImg} alt="" className="newsBlock__img"/>
                                    <h2 data-uk-slider-parallax="x: 1000,0,0; opacity: 1,1,0" className="newsBlock__title">Arizona Ultimate Adventure – Grand Canyon & Beyond</h2>
                                    <p data-uk-slider-parallax="x: 500,0,0; opacity: 1,1,0" className="newsBlock__text">Ready for a real New Year’s resolution? Why not commit to setting your feet on a brand-new long-distance hiking trail?
                                    </p>
                                    <ul data-uk-slider-parallax="x: 200,0,0; opacity: 1,1,0" className="newsBlock__crumbs uk-breadcrumb">
                                        <li><a href="">Travel</a></li>
                                        <li><a href="">August 21 2017</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="newsBlock newsBlock_slide">
                                    <img src={zImg} alt="" className="newsBlock__img"/>
                                    <h2 data-uk-slider-parallax="x: 1000,0,0; opacity: 1,1,0" className="newsBlock__title">Arizona Ultimate Adventure – Grand Canyon & Beyond</h2>
                                    <p data-uk-slider-parallax="x: 500,0,0; opacity: 1,1,0" className="newsBlock__text">Ready for a real New Year’s resolution? Why not commit to setting your feet on a brand-new long-distance hiking trail?
                                    </p>
                                    <ul data-uk-slider-parallax="x: 200,0,0; opacity: 1,1,0" className="newsBlock__crumbs uk-breadcrumb">
                                        <li><a href="">Travel</a></li>
                                        <li><a href="">August 21 2017</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="newsBlock newsBlock_slide">
                                    <img src={zImg} alt="" className="newsBlock__img"/>
                                    <h2 data-uk-slider-parallax="x: 1000,0,0; opacity: 1,1,0" className="newsBlock__title">Arizona Ultimate Adventure – Grand Canyon & Beyond</h2>
                                    <p data-uk-slider-parallax="x: 500,0,0; opacity: 1,1,0" className="newsBlock__text">Ready for a real New Year’s resolution? Why not commit to setting your feet on a brand-new long-distance hiking trail?
                                    </p>
                                    <ul data-uk-slider-parallax="x: 200,0,0; opacity: 1,1,0" className="newsBlock__crumbs uk-breadcrumb">
                                        <li><a href="">Travel</a></li>
                                        <li><a href="">August 21 2017</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="newsBlock newsBlock_slide">
                                    <img src={zImg} alt="" className="newsBlock__img"/>
                                    <h2 data-uk-slider-parallax="x: 1000,0,0; opacity: 1,1,0" className="newsBlock__title">Arizona Ultimate Adventure – Grand Canyon & Beyond</h2>
                                    <p data-uk-slider-parallax="x: 500,0,0; opacity: 1,1,0" className="newsBlock__text">Ready for a real New Year’s resolution? Why not commit to setting your feet on a brand-new long-distance hiking trail?
                                    </p>
                                    <ul data-uk-slider-parallax="x: 200,0,0; opacity: 1,1,0" className="newsBlock__crumbs uk-breadcrumb">
                                        <li><a href="">Travel</a></li>
                                        <li><a href="">August 21 2017</a></li>
                                    </ul>
                                </div>
                            </li>

                        </ul>
                    </div>

                </div>
            </div>

        </section>
        <section>
            <div className="container">
                <h2 className="title">Latest Reviews</h2>
                <div className="newsRew">
                    <div className="newsBlock3 newsBlock3__active">
                        <img src={zImg} alt="" className="newsBlock3__img"/>
                        <h2 className="newsBlock3__title">Joshua Tree Overnight Adventure</h2>
                        <p className="newsBlock3__text">Aliquam gravida congue risus, ac sollicitudin risus dictum quis. Etiam urna libero, vehicula eget neque vel, congue blandit dui. Pellentesqu...
                        </p>
                        <ul className="newsBlock3__crumbs uk-breadcrumb">
                            <li><a className='breadcrumb breadcrumb_main' href="">Travel</a></li>
                            <li><a className='breadcrumb breadcrumb_second' href="">August 21 2017</a></li>
                        </ul>
                    </div>
                    <div className="newsRew__left">
                        <div className="newsBlock3">
                            <img src={zImg} alt="" className="newsBlock3__img"/>
                            <span className="newsBlock3__rating uk-label">6.4</span>
                            <h2 className=" newsBlock3__title">Joshua Tree Overnight Adventure</h2>
                            <ul className="newsBlock3__crumbs uk-breadcrumb">
                                <li><a className='breadcrumb breadcrumb_main' href="">Travel</a></li>
                                <li><a className='breadcrumb breadcrumb_second' href="">August 21 2017</a></li>
                            </ul>
                        </div>
                        <div className="newsBlock3">
                            <img src={zImg} alt="" className="newsBlock3__img"/>
                            <span className="newsBlock3__rating uk-label">6.4</span>
                            <h2 className=" newsBlock3__title">Joshua Tree Overnight Adventure</h2>
                            <ul className="newsBlock3__crumbs uk-breadcrumb">
                                <li><a className='breadcrumb breadcrumb_main' href="">Travel</a></li>
                                <li><a className='breadcrumb breadcrumb_second' href="">August 21 2017</a></li>
                            </ul>
                        </div>
                        <div className="newsBlock3">
                            <img src={zImg} alt="" className="newsBlock3__img"/>
                            <span className="newsBlock3__rating uk-label">6.4</span>
                            <h2 className=" newsBlock3__title">Joshua Tree Overnight Adventure</h2>
                            <ul className="newsBlock3__crumbs uk-breadcrumb">
                                <li><a className='breadcrumb breadcrumb_main' href="">Travel</a></li>
                                <li><a className='breadcrumb breadcrumb_second' href="">August 21 2017</a></li>
                            </ul>
                        </div>
                        <div className="newsBlock3">
                            <img src={zImg} alt="" className="newsBlock3__img"/>
                            <span className="newsBlock3__rating uk-label">6.4</span>
                            <h2 className=" newsBlock3__title">Joshua Tree Overnight Adventure</h2>
                            <ul className="newsBlock3__crumbs uk-breadcrumb">
                                <li><a className='breadcrumb breadcrumb_main' href="">Travel</a></li>
                                <li><a className='breadcrumb breadcrumb_second' href="">August 21 2017</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="container">
                <h2 className="title">Latest Articles</h2>
                <div className="newsArt">
                    <div className="newsList">
                        <div className="newsBlock4">
                            <img src={zImg} alt="" className="newsBlock4__img"/>
                            <div className="newsBlock4__content">
                                <h2 className="newsBlock4__title">Joshua Tree Overnight Adventure</h2>
                                <p className="newsBlock4__text">Aliquam gravida congue risus, ac sollicitudin risus dictum quis. Etiam urna libero, vehicula eget neque vel, congue blandit dui. Pellentesqu...
                                </p>
                                <ul className="newsBlock4__crumbs uk-breadcrumb">
                                    <li><a className='breadcrumb breadcrumb_main' href="">Travel</a></li>
                                    <li><a className='breadcrumb breadcrumb_second' href="">August 21 2017</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="newsBlock4">
                            <img src={zImg} alt="" className="newsBlock4__img"/>
                            <div className="newsBlock4__content">
                                <h2 className="newsBlock4__title">Joshua Tree Overnight Adventure</h2>
                                <p className="newsBlock4__text">Aliquam gravida congue risus, ac sollicitudin risus dictum quis. Etiam urna libero, vehicula eget neque vel, congue blandit dui. Pellentesqu...
                                </p>
                                <ul className="newsBlock4__crumbs uk-breadcrumb">
                                    <li><a className='breadcrumb breadcrumb_main' href="">Travel</a></li>
                                    <li><a className='breadcrumb breadcrumb_second' href="">August 21 2017</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="newsBlock4">
                            <img src={zImg} alt="" className="newsBlock4__img"/>
                            <div className="newsBlock4__content">
                                <h2 className="newsBlock4__title">Joshua Tree Overnight Adventure</h2>
                                <p className="newsBlock4__text">Aliquam gravida congue risus, ac sollicitudin risus dictum quis. Etiam urna libero, vehicula eget neque vel, congue blandit dui. Pellentesqu...
                                </p>
                                <ul className="newsBlock4__crumbs uk-breadcrumb">
                                    <li><a className='breadcrumb breadcrumb_main' href="">Travel</a></li>
                                    <li><a className='breadcrumb breadcrumb_second' href="">August 21 2017</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="newsBlock4">
                            <img src={zImg} alt="" className="newsBlock4__img"/>
                            <div className="newsBlock4__content">
                                <h2 className="newsBlock4__title">Joshua Tree Overnight Adventure</h2>
                                <p className="newsBlock4__text">Aliquam gravida congue risus, ac sollicitudin risus dictum quis. Etiam urna libero, vehicula eget neque vel, congue blandit dui. Pellentesqu...
                                </p>
                                <ul className="newsBlock4__crumbs uk-breadcrumb">
                                    <li><a className='breadcrumb breadcrumb_main' href="">Travel</a></li>
                                    <li><a className='breadcrumb breadcrumb_second' href="">August 21 2017</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="loadmore">
                            <span uk-icon="arrow-down"></span>
                            <span className="uk-text-small">LOAD MORE</span>
                        </div>
                    </div>
                    <div className="ad">
                        <img className='ad__img' src={ad} alt=""/>
                    </div>
                    <div  className="newsSlider">
                        <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1" data-uk-slideshow="animation: scale">
                            <ul className="uk-slideshow-items">
                                <li>
                                    <div className="newsBlock7">
                                        <img src={zImg} alt="" className="newsBlock7__img"/>
                                        <h2 className="newsBlock7__title">Arizona Ultimate Adventure – Grand Canyon & Beyond</h2>
                                        <ul className="newsBlock7__crumbs uk-breadcrumb">
                                            <li><a href="">Travel</a></li>
                                            <li><a href="">August 21 2017</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div className="newsBlock7">
                                        <img src={zImg} alt="" className="newsBlock7__img"/>
                                        <h2 className="newsBlock7__title">Arizona Ultimate Adventure – Grand Canyon & Beyond</h2>
                                        <ul className="newsBlock7__crumbs uk-breadcrumb">
                                            <li><a href="">Travel</a></li>
                                            <li><a href="">August 21 2017</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div className="newsBlock7">
                                        <img src={zImg} alt="" className="newsBlock7__img"/>
                                        <h2 className="newsBlock7__title">Arizona Ultimate Adventure – Grand Canyon & Beyond</h2>
                                        <ul className="newsBlock7__crumbs uk-breadcrumb">
                                            <li><a href="">Travel</a></li>
                                            <li><a href="">August 21 2017</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div className="newsBlock7">
                                        <img src={zImg} alt="" className="newsBlock7__img"/>
                                        <h2 className="newsBlock7__title">Arizona Ultimate Adventure – Grand Canyon & Beyond</h2>
                                        <ul className="newsBlock7__crumbs uk-breadcrumb">
                                            <li><a href="">Travel</a></li>
                                            <li><a href="">August 21 2017</a></li>
                                        </ul>
                                    </div>
                                </li>

                            </ul>
                            <button className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-previous data-uk-slideshow-item="previous"></button>
                            <button className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-next data-uk-slideshow-item="next"></button>
                        </div>

                    </div>
                    <div className="newsPost">
                        <h2 className="postTitle">TOP Posts</h2>
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
                                <h2 className="newsBlock5__title">Joshua Tree Overnight Adventure</h2>
                                <ul className="newsBlock5__crumbs uk-breadcrumb">
                                    <li><a className='breadcrumb breadcrumb_main' href="">Travel</a></li>
                                    <li><a className='breadcrumb breadcrumb_second' href="">August 21 2017</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="newsBlock5">
                            <img src={zImg} alt="" className="newsBlock5__img"/>
                            <div className="newsBlock5__content">
                                <h2 className="newsBlock5__title">Joshua Tree Overnight Adventure</h2>
                                <ul className="newsBlock5__crumbs uk-breadcrumb">
                                    <li><a className='breadcrumb breadcrumb_main' href="">Travel</a></li>
                                    <li><a className='breadcrumb breadcrumb_second' href="">August 21 2017</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="newsBlock5">
                            <img src={zImg} alt="" className="newsBlock5__img"/>
                            <div className="newsBlock5__content">
                                <h2 className="newsBlock5__title">Joshua Tree Overnight Adventure</h2>
                                <ul className="newsBlock5__crumbs uk-breadcrumb">
                                    <li><a className='breadcrumb breadcrumb_main' href="">Travel</a></li>
                                    <li><a className='breadcrumb breadcrumb_second' href="">August 21 2017</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="container">
                <div className="slider2 uk-position-relative uk-visible-toggle uk-light" tabIndex="-1" data-uk-slideshow="animation: push">

                    <ul className="uk-slideshow-items">
                        <li>
                            <div className="slider2__item">
                                <img className='slider2__img' src={zImg} alt=""/>
                                <h2 className="slider2__title">Joshua Tree Overnight Adventure</h2>
                                <p className="slider2__text">Aliquam gravida congue risus, ac sollicitudin risus dictum quis. Etiam urna libero, vehicula eget neque vel, congue blandit dui. Pellentesqu...
                                </p>
                                <ul className="slider2__crumbs uk-breadcrumb">
                                    <li><a className='breadcrumb breadcrumb_main' href="">Travel</a></li>
                                    <li><a className='breadcrumb breadcrumb_second' href="">August 21 2017</a></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="slider2__item">
                                <img className='slider2__img' src={zImg} alt=""/>
                                <h2 className="slider2__title">Joshua Tree Overnight Adventure</h2>
                                <p className="slider2__text">Aliquam gravida congue risus, ac sollicitudin risus dictum quis. Etiam urna libero, vehicula eget neque vel, congue blandit dui. Pellentesqu...
                                </p>
                                <button className="slider2__btn uk-button uk-button-default">learn more</button>
                                <ul className="slider2__crumbs uk-breadcrumb">
                                    <li><a className='breadcrumb breadcrumb_main' href="">Travel</a></li>
                                    <li><a className='breadcrumb breadcrumb_second' href="">August 21 2017</a></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="slider2__item">
                                <img className='slider2__img' src={zImg} alt=""/>
                                <h2 className="slider2__title">Joshua Tree Overnight Adventure</h2>
                                <p className="slider2__text">Aliquam gravida congue risus, ac sollicitudin risus dictum quis. Etiam urna libero, vehicula eget neque vel, congue blandit dui. Pellentesqu...
                                </p>
                                <ul className="slider2__crumbs uk-breadcrumb">
                                    <li><a className='breadcrumb breadcrumb_main' href="">Travel</a></li>
                                    <li><a className='breadcrumb breadcrumb_second' href="">August 21 2017</a></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="slider2__item">
                                <img className='slider2__img' src={zImg} alt=""/>
                                <h2 className="slider2__title">Joshua Tree Overnight Adventure</h2>
                                <p className="slider2__text">Aliquam gravida congue risus, ac sollicitudin risus dictum quis. Etiam urna libero, vehicula eget neque vel, congue blandit dui. Pellentesqu...
                                </p>
                                <ul className="slider2__crumbs uk-breadcrumb">
                                    <li><a className='breadcrumb breadcrumb_main' href="">Travel</a></li>
                                    <li><a className='breadcrumb breadcrumb_second' href="">August 21 2017</a></li>
                                </ul>
                            </div>
                        </li>

                    </ul>

                    <button className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-previous data-uk-slideshow-item="previous"></button>
                    <button className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-next data-uk-slideshow-item="next"></button>
                </div>
            </div>
        </section>
        <section>
            <div className="container">
                <div className="subscribe">
                    <h2 className="subscribe__title uk-heading-medium">Subscribe</h2>
                    <span className="subscribe__text uk-text-muted">Find out first about new and important news</span>
                    <div className="subscribe__form">
                        <input type="text" className="subscribe__input uk-input"/>
                        <button className="subscribe__btn uk-button uk-button-default">Subscribe</button>
                    </div>
                </div>
            </div>
        </section>
        <footer className="footer">
            <a href="#" className="logo">
                <img src={logo} alt="" className="logo__img"/>
            </a>
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
