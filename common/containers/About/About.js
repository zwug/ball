import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './About.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { members, slides } from './config'
import Member from '../../components/Member/Member'
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
}];

const About = ({}) => (
  <div>
    <Header/>
    <div className={s.container}>
      <h1>О нас</h1>
      <div className={s.carouselContainer}>
        <Carousel
          slidesToShow={1}
          cellAlign="center"
          decorators={Decorators}
          slideWidth={0.75}
          cellSpacing={200}
          initialSlideHeight={200}
        >
          {slides.map((slide, index) => (
            <img key={index} src={slide} alt="о нас"/>
          ))}
        </Carousel>
      </div>
      {members.map((member, key) => {
        const reverse = key % 2 === 1;
        return <Member key={key} reverse={reverse} {...member}/>
      })}
    </div>
    <Footer />
  </div>
)

export default withStyles(s)(About)
