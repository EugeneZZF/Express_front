import React, { useState } from "react";
import styles from "./Mains.module.css";
import Checkbox from "../Landing/comp_landing/Checkbox";
import DoubleRangeSlider from "../../components/elements/DoubleRangeSlider";
import {
  CoreResourceServiceClient,
  CreateResourceRequest,
} from "../../generated/resource_grpc_web_pb";
import ReactSlider from "react-slider";

export default function Mains() {
  const clientResource = new CoreResourceServiceClient(
    "https://core.prexpress.pro/",
    null,
    null
  );
  const accesskey = localStorage.getItem("tokenKey");

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

  const handleShowMore = () => {
    setVisibleCards((prev) => prev + 10);
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

  // Adding useState for each input field in the .catalog block
  const [resourceLanguage, setResourceLanguage] = useState("russian");
  const [resourceName, setResourceName] = useState("1");
  const [resourceUri, setResourceUri] = useState("2.com");
  const [resourceDescription, setResourceDescription] = useState("Discription");
  const [resourceWalletId, setResourceWalletId] = useState("usdt_trc20");
  const [resourcePraice, setResourcePrise] = useState(12, 5);
  const [resourceLogin, setResourceLogin] = useState("1");
  const [resourcePassword, setResourcePassword] = useState("112233");
  const [resourcetoken, setResourceToken] = useState("565");
  const [errors, setErrors] = useState({});

  const validateInputs = () => {
    const errors = {};
    if (!resourceName) errors.resourceName = "Resource name is required";
    if (!resourceUri) errors.resourceUri = "Resource URI is required";
    if (!resourceDescription)
      errors.resourceDescription = "Resource description is required";
    if (!resourceLogin) errors.resourceLogin = "Resource login is required";
    if (!resourcePassword)
      errors.resourcePassword = "Resource password is required";
    return errors;
  };

  const handleCreateResource = async (e) => {
    e.preventDefault();
    const inputErrors = validateInputs();

    if (Object.keys(inputErrors).length === 0) {
      try {
        const request = new CreateResourceRequest();
        request.setName(resourceName);
        request.setDescription(resourceDescription);
        request.setLanguage(resourceLanguage === "russian" ? 0 : 1);
        request.setUri(resourceUri);
        request.setLogin(resourceLogin);
        request.setPassword(resourcePassword);
        request.setResourcePraice(resourcePraice); // или как у вас реализовано получение цены
        // request.setWalletId(resourceWalletId);
        // Предположим, что resource_categories это список категорий
        const selectedCategories = [];
        Object.keys(checkboxes).forEach((categoryName) => {
          if (checkboxes[categoryName] && categoryName !== "all") {
            selectedCategories.push(categoryName);
          }
        });

        if (typeof request.setWalletId === "function") {
          request.setWalletId(resourceWalletId);
        } else {
          console.warn(
            "setWalletId is not a function. Please check your proto definition."
          );
        }

        const metadata = {
          Authorization: `Bearer ${accesskey}`,
        };

        const response = await new Promise((resolve, reject) => {
          clientResource.createResource(request, metadata, (err, response) => {
            if (err) {
              reject(err);
            } else {
              resolve(response);
            }
          });
        });

        const responseObject = response.toObject
          ? response.toObject()
          : response;
        console.log("Resource creation successful: ", responseObject);
      } catch (err) {
        console.error(`Resource creation failed: ${err.message}`);
      }
    } else {
      setErrors(inputErrors);
    }
  };

  return (
    <div className={styles.cont}>
      <div className={styles.catalog}>
        <div className={styles.title_catalog}>
          <p>Добавить новый ресурс</p>
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
              checked={resourceLanguage === "russian"}
              onChange={(e) => setResourceLanguage(e.target.value)}
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
              checked={resourceLanguage === "english"}
              onChange={(e) => setResourceLanguage(e.target.value)}
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
        <div className={styles.name_res}>
          <p className={styles.name_p}>Укажите название ресурса</p>
          <input
            className={styles.name_input}
            placeholder="Название ресурса"
            value={resourceName}
            onChange={(e) => setResourceName(e.target.value)}
          ></input>
        </div>
        <div className={styles.link_site}>
          <p className={styles.lint_p}>Ссылка на сайт</p>
          <input
            className={styles.name_input}
            placeholder="www.fgima.ru"
            value={resourceUri}
            onChange={(e) => setResourceUri(e.target.value)}
          ></input>
        </div>
        <div className={styles.discription_site}>
          <p className={styles.lint_p}>Описание сайта</p>
          <textarea
            className={styles.name_textarea}
            placeholder="Сайт у НВС отличный"
            value={resourceDescription}
            onChange={(e) => setResourceDescription(e.target.value)}
          ></textarea>
        </div>
        <div className={styles.choose_wallet}>
          <p className={styles.lint_p}>Выбор кошелька для оплаты</p>
          <select
            className={styles.wallet_select}
            value={resourceWalletId}
            onChange={(e) => setResourceWalletId(e.target.value)}
          >
            <option className={styles.options} value="usdt_trc20">
              USDT TRC-20
            </option>
            <option className={styles.options} value="btc">
              Bitcoin
            </option>
            <option className={styles.options} value="eth">
              Ethereum
            </option>
            <option className={styles.options} value="usdt_erc20">
              USDT ERC-20
            </option>
          </select>
        </div>
        <div className={styles.stoim}>
          <p className={styles.lint_p}>Желаемая стоимость публикации</p>
          {/* <div className={styles.double_cont}>
            <DoubleRangeSlider
              value={value}
              min={min}
              max={max}
              setValue={setValue}
            />
          </div> */}
          <input
            className={styles.stoim_input}
            placeholder="13.5$"
            value={resourceUri}
            onChange={(e) => setResourceUri(e.target.value)}
          ></input>
        </div>
        <form onSubmit={handleCreateResource}>
          <div className={styles.link_site}>
            <p className={styles.lint_p}>Токен</p>
            <input
              type="text"
              className={styles.name_input}
              placeholder="Токен"
              value={resourcetoken}
              onChange={(e) => setResourceToken(e.target.value)}
            />
          </div>
          <div className={styles.link_site}>
            <p className={styles.lint_p}>Логин</p>
            <input
              type="text"
              className={styles.name_input}
              placeholder="Логин"
              value={resourceLogin}
              onChange={(e) => setResourceLogin(e.target.value)}
            />
          </div>
          <div className={styles.link_site}>
            <p className={styles.lint_p}>Пароль</p>
            <input
              type="password"
              className={styles.name_input}
              placeholder="Пароль"
              value={resourcePassword}
              onChange={(e) => setResourcePassword(e.target.value)}
            />
          </div>
          <div className={styles.sort}>
            <p>Сортировать по:</p>
            <div className={styles.category_choose}>
              <Checkbox
                label="Все"
                isChecked={checkboxes.all}
                onChange={handleAllChange}
              />
              <Checkbox
                label="Категория 1"
                isChecked={checkboxes.category1}
                onChange={() => handleCheckboxChange("category1")}
              />
              <Checkbox
                label="Категория 2"
                isChecked={checkboxes.category2}
                onChange={() => handleCheckboxChange("category2")}
              />
              <Checkbox
                label="Категория 3"
                isChecked={checkboxes.category3}
                onChange={() => handleCheckboxChange("category3")}
              />
              <Checkbox
                label="Категория 4"
                isChecked={checkboxes.category4}
                onChange={() => handleCheckboxChange("category4")}
              />
            </div>
          </div>
          <button type="submit" className={styles.add_btn}>
            Создать ресурс
          </button>
        </form>
        {Object.keys(errors).map((errorKey) => (
          <p key={errorKey} className={styles.error}>
            {errors[errorKey]}
          </p>
        ))}
      </div>
      <div className={styles.right_side}>
        <div className={styles.search_info}>
          <div className={styles.card_catalog}>
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
                  <img
                    src="/images/Resources/link_ico.svg"
                    alt="link icon"
                  ></img>
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
