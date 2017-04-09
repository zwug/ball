import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Panels.css'

const PanelRehersals = () => (
  <div>
    <h2>Репетиции</h2>
    <p>
      Репетиции проходят по адресу:&nbsp;
      <a
        className={s.link}
        target="_blank"
        href="https://www.google.ru/maps/place/%D0%A5%D0%BE%D1%80%D0%BE%D1%88%D0%B5%D0%B2%D1%81%D0%BA%D0%BE%D0%B5+%D1%88.,+21,+%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0,+123007/@55.776739,37.5215443,15.64z/data=!4m5!3m4!1s0x46b5499dce286e5b:0xa87396074a345544!8m2!3d55.77614!4d37.529732"
      >
        Москва, Хорошёвское шоссе, 21 Школа №1288 (м. «Полежаевская).
      </a>
      &nbsp;Время начала репетиций: среда — 19:00, суббота — 18:00. Обратите внимание на то, что 12 апреля, 3 и 6 мая репетиций не будет.
    </p>
    <p>
      Для посещения репетиций потребуется сменная обувь. Также всем желающим, кто ещё не определился, мы предлагаем посетить пробную репетицию, где вы попробуете себя в танцах и решите, что надо идти! Цена такой репетиции — 150 рублей. В случае, если вы решите стать участником бала, цена снизится на эту сумму.
    </p>
    <p>
      Если вы хотите записаться на пробную репетицию, то пишите нам на&nbsp;
      <a className={s.link} href="mailto:info@tridevyatoe.org">
        info@tridevyatoe.org
      </a>!
    </p>
  </div>
)

export default withStyles(s)(PanelRehersals)
