import React, { useState } from "react";
import styles from "./Catalog.module.css";
import Checkbox from "../../Landing/comp_landing/Checkbox";

export default function Catalog() {
  const [value, setValue] = useState([10, 10000]);
  const min = 0;
  const max = 100000;
  const cardData = {
    name_card: "Название",
    category: "Новости",
    language: true,
    link: "http://example.com",
    status: 1,
  };

  const [priceRange, setPriceRange] = useState([10, 100000]);
  const [checkboxes, setCheckboxes] = useState({
    all: false,
    category1: false,
    category2: false,
    category3: false,
    category4: false,
  });

  const [cards, setCards] = useState(
    Array.from({ length: 50 }, (_, index) => ({
      ...cardData,
      id: index,
    }))
  );

  const [visibleCards, setVisibleCards] = useState(10);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const handleShowMore = () => {
    setVisibleCards((prev) => prev + 10);
  };

  const handlePriceChange = (value) => {
    setPriceRange(value);
  };

  const handleAllChange = () => {
    const newValue = !checkboxes.all;
    setCheckboxes({
      all: newValue,
      category1: newValue,
      category2: newValue,
      category3: newValue,
      category4: newValue,
    });
  };

  const handleCheckboxChange = (name) => {
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [name]: !prevCheckboxes[name],
    }));
  };

  const toggleCategoryOpen = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  return (
    <div className={styles.cont}>
      <div className={styles.catalog}>
        <div className={styles.title_catalog}>
          <p>Выбор языка</p>
          <img src="/images/Resources/plus.svg" alt="plus icon" />
        </div>
        <div className={styles.line_1}></div>
        <div className={styles.set_language_catalog}>
          <p className={styles.language_p}>Выбор языка</p>
          <div className={styles.language_option}>
            <input
              type="radio"
              id="russian"
              name="language"
              value="russian"
              defaultChecked
              className={styles.radio_button}
            />
            <label htmlFor="russian" className={styles.language_label}>
              <span className={styles.custom_radio}></span>Русский
              <img
                src="/images/Resources/ru_flag.svg"
                alt="Russian flag"
                className={styles.flag}
              />
            </label>
          </div>
          <div className={styles.language_option}>
            <input
              type="radio"
              id="english"
              name="language"
              value="english"
              className={styles.radio_button}
            />
            <label htmlFor="english" className={styles.language_label}>
              <span className={styles.custom_radio}></span>Английский
              <img
                src="/images/Resources/en_flag.svg"
                alt="English flag"
                className={styles.flag}
              />
            </label>
          </div>
        </div>

        <div className={styles.category_choose}>
          <div className={styles.category_cont}>
            <p className={styles.category_p} onClick={toggleCategoryOpen}>
              Выбор категории{" "}
              {isCategoryOpen ? (
                <img
                  className={`${styles.arrow} ${styles.open}`}
                  src="\images\Catalog\arrow.svg"
                />
              ) : (
                <img className={styles.arrow} src="\images\Catalog\arrow.svg" />
              )}
            </p>
          </div>
          <div className={styles.category_line}></div>
          <div
            className={`${styles.category_list} ${
              isCategoryOpen ? styles.open : ""
            }`}
          >
            <div className={styles.Checkbox_cnt}>
              <Checkbox checked={checkboxes.all} onChange={handleAllChange} />
              <span onClick={handleAllChange}>Выбрать все</span>
            </div>
            <div className={styles.Checkbox_cnt}>
              <Checkbox
                checked={checkboxes.category1}
                onChange={() => handleCheckboxChange("category1")}
              />
              <span>Категория такая-то</span>
            </div>
            <div className={styles.Checkbox_cnt}>
              <Checkbox
                checked={checkboxes.category2}
                onChange={() => handleCheckboxChange("category2")}
              />
              <span>Категория такая-то</span>
            </div>
            <div className={styles.Checkbox_cnt}>
              <Checkbox
                checked={checkboxes.category3}
                onChange={() => handleCheckboxChange("category3")}
              />
              <span>Категория такая-то, в две строки</span>
            </div>
            <div className={styles.Checkbox_cnt}>
              <Checkbox
                checked={checkboxes.category4}
                onChange={() => handleCheckboxChange("category4")}
              />
              <span>Категория такая-то</span>
            </div>
          </div>
        </div>

        <button className={styles.add_btn}>Добавить ресурс</button>
      </div>
      <div className={styles.right_side}>
        <div className={styles.search_info}>
          <div className={styles.serach_first_info}>
            <p className={styles.search_header_name_1}>Название</p>
            <p className={styles.search_header_name_2}>Категории</p>
            <p className={styles.search_header_name_3}>Язык</p>
            <p className={styles.search_header_name_4}>Ссылка</p>
            <p className={styles.search_header_name_5}>Статус</p>
            <p className={styles.search_header_name_6}>Действия</p>
          </div>
          {cards.slice(0, visibleCards).map((card) => (
            <div key={card.id} className={styles.card_resurses}>
              <div className={styles.card_line}></div>
              <p className={styles.card_name}>{card.name_card}</p>
              <p className={styles.card_category}>{card.category}</p>
              {card.language ? (
                <img
                  className={styles.language_flag_card}
                  src="\images\Resources\ru_flag.svg"
                  alt="ru flag"
                />
              ) : (
                <img
                  className={styles.language_flag_card}
                  src="\images\Resources\en_flag.svg"
                  alt="en flag"
                />
              )}
              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link_card}
              >
                <img src="/images/Resources/link_ico.svg" alt="link icon"></img>
              </a>
              <img
                className={styles.status_img}
                src="\images\Resources\status_1.svg"
                alt="status icon"
              ></img>
              <div className={styles.card_cont}>
                <a className={styles.card_info}>
                  <img
                    src="\images\Resources\card_info.svg"
                    alt="info icon"
                  ></img>
                </a>
                <a className={styles.card_delete}>
                  <img
                    src="\images\Resources\card_trash.svg"
                    alt="delete icon"
                  ></img>
                </a>
                <a className={styles.card_red}>
                  <img
                    src="\images\Resources\card_red.svg"
                    alt="edit icon"
                  ></img>
                </a>
              </div>
            </div>
          ))}
        </div>
        {visibleCards < cards.length && (
          <button className={styles.load_more} onClick={handleShowMore}>
            Показать еще
          </button>
        )}
      </div>
    </div>
  );
}
