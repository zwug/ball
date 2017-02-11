import React, { PropTypes, Component } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Gallery.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { events } from './config'
import Carousel from 'nuka-carousel'

const Decorators = [{
  component: (props) => (
    <button className={s.button} onClick={props.previousSlide}>
      {'◀'}
    </button>
  ),
  position: 'CenterLeft'
},{
  component: (props) => (
    <button className={s.button} onClick={props.nextSlide}>
      {'▶'}
    </button>
  ),
  position: 'CenterRight'
}]

class Gallery extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className={s.container}>
          <h1>Галерея</h1>
          {events.map((event, index) => (
            <div key={index}>
              <h2 className={s.eventTitle}>{event.title}</h2>
              <div className={s.carouselContainer}>
                <Carousel
                  cellAlign="center"
                  cellSpacing={200}
                  decorators={Decorators}
                  initialSlideHeight={200}
                  slidesToShow={1}
                  slideWidth={0.9}
                >
                  {event.slides.map((slide, slideIndex) => (
                    <img key={slideIndex} src={slide} onLoad={() => {window.dispatchEvent(new Event('resize'))}}/>
                  ))}
                </Carousel>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(s)(Gallery)
