import React from "react";
import Slider from "react-slick";
import styles from "./Foirth_block.module.css";
import { useState } from "react";
// import styles1 from "./Third_block.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    name: "Антон Кучер",
    text: "Как принято считать, действия представителей оппозиции являются только методом политического участия и объективно рассмотрены соответствующими инстанциями. А также явные признаки победы институционализации, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут подвергнуты целой серии независимых исследований",
  },
  {
    name: "Елизавета Кудрявцева",
    text: "Не следует, однако, забывать, что существующая теория играет определяющее значение для первоочередных требований. Современные технологии достигли такого уровня, что реализация намеченных плановых заданий предопределяет высокую востребованность глубокомысленных рассуждений",
  },
  {
    name: "Алексей Алексеев",
    text: "Господа, внедрение современных методик требует от нас анализа вывода текущих активов. Кстати, элементы политического процесса, превозмогая сложившуюся непростую экономическую ситуацию, описаны максимально подробно",
  },
];

const Review = ({ name, text }) => (
  <div className={styles.review}>
    <div className={styles.stars}>
      <img src="\images\main\stars2.svg" alt="star" className={styles.star} />
    </div>
    <h3>{name}</h3>
    <p>{text}</p>
  </div>
);

const Foirth_block = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: (
      <img src="right-arrow.png" alt="next" className={styles.arrow} />
    ),
    prevArrow: <img src="left-arrow.png" alt="prev" className={styles.arrow} />,
  };

  return (
    <div className={styles.container}>
      <div className={styles.sliderContainer}>
        <div className={styles.otz}>
          <p>ОТЗЫВЫ</p>
          <div className={styles.cont_p_otz}>НАШИХ</div>
          <p>КЛИЕНТОВ</p>
        </div>
        <Slider {...settings} className={styles.slickList}>
          {reviews.map((review, index) => (
            <Review key={index} {...review} />
          ))}
        </Slider>
      </div>
      <div className={styles.otz2}>
        <p>часто</p>
        <div className={styles.cont_p_otz}>задаваемые</div>
        <p>вопросы</p>
      </div>
      <div className={styles.accordion}>
        <div className={`${styles.accordionItem} ${styles.top_accordionitem}`}>
          <div
            className={styles.accordionTitle}
            onClick={() => handleToggle(0)}
          >
            <h2>01</h2>
            <div className={styles.accordionItem_cont}>
              <span>ВЫБЕРИТЕ ПАКЕТ</span>
              <img
                className={`${styles.accordion_arrow} ${
                  activeIndex === 0 ? styles.rotate : ""
                }`}
                src="/images/main/accord_arrow2.svg"
                alt="arrow"
              />
            </div>
          </div>
          <div
            className={`${styles.accordionContent} ${
              activeIndex === 0 ? styles.active : ""
            }`}
          >
            <div className={styles.content_cont}>
              Ознакомьтесь с нашими тарифами и выберите тот, который подходит
              именно вам
            </div>
          </div>
        </div>
        <div className={styles.accordionItem}>
          <div
            className={styles.accordionTitle}
            onClick={() => handleToggle(1)}
          >
            <h2>02</h2>
            <div className={styles.accordionItem_cont}>
              <span>ПОДГОТОВЬТЕ МАТЕРИАЛ</span>
              <img
                className={`${styles.accordion_arrow} ${
                  activeIndex === 1 ? styles.rotate : ""
                }`}
                src="/images/main/accord_arrow.svg"
                alt="arrow"
              />
            </div>
          </div>
          <div
            className={`${styles.accordionContent} ${
              activeIndex === 1 ? styles.active : ""
            }`}
          >
            <div className={styles.content_cont}>
              ContentContentContentContent
            </div>
          </div>
        </div>
        <div className={styles.accordionItem}>
          <div
            className={styles.accordionTitle}
            onClick={() => handleToggle(2)}
          >
            <h2>03</h2>
            <div className={styles.accordionItem_cont}>
              <span>ОТПРАВЬТЕ НАМ</span>
              <img
                className={`${styles.accordion_arrow} ${
                  activeIndex === 2 ? styles.rotate : ""
                }`}
                src="/images/main/accord_arrow.svg"
                alt="arrow"
              />
            </div>
          </div>
          <div
            className={`${styles.accordionContent} ${
              activeIndex === 2 ? styles.active : ""
            }`}
          >
            <div className={styles.content_cont}>
              ContentContentContentContent
            </div>
          </div>
        </div>
        <div className={styles.accordionItem}>
          <div
            className={styles.accordionTitle}
            onClick={() => handleToggle(3)}
          >
            <h2>04</h2>
            <div className={styles.accordionItem_cont}>
              <span>ПУБЛИКАЦИЯ</span>
              <img
                className={`${styles.accordion_arrow} ${
                  activeIndex === 3 ? styles.rotate : ""
                }`}
                src="/images/main/accord_arrow.svg"
                alt="arrow"
              />
            </div>
          </div>
          <div
            className={`${styles.accordionContent} ${
              activeIndex === 3 ? styles.active : ""
            }`}
          >
            <div className={styles.content_cont}>
              ContentContentContentContent
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foirth_block;
