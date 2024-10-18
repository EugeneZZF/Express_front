import React from "react";
import styles from "./Footer_block.module.css";
import { Link } from "react-router-dom";

export default function Footer_block() {
  return (
    <footer>
      <div className={styles.footer_blocks}>выф</div>
      <div className={styles.footer_content}>
        <div className={styles.footer_up_cont}>
          <div className={styles.footer_link}>
            <Link className={styles.footer_site_link}>Главная</Link>
            <Link className={styles.footer_site_link}>Ресурсы</Link>
            <Link className={styles.footer_site_link}>Публикации</Link>
          </div>
          <div className={styles.footer_title}>
            <p className={styles.footer_title_p}>
              Если у вас есть вопросы или предложения, не стесняйтесь обращаться
              к нам:
            </p>
          </div>
          <div className={styles.footer_social_media_cont}>
            <div className={styles.footer_media}>
              <img
                className={styles.footer_media_img}
                src="\images\Layout\media_1.svg"
              ></img>
              <p className={styles.footer_media_p}>support@prexpress.io</p>
            </div>
            <div className={styles.footer_media}>
              <img
                className={styles.footer_media_img}
                src="\images\Layout\media_2.svg"
              ></img>
              <p className={styles.footer_media_p}>Telegram</p>
            </div>
          </div>
          <div className={styles.footer_link_2}>
            <Link to={"./privacy-policy"} className={styles.footer_site_link}>
              Политика конфиденциальности
            </Link>
            <Link className={styles.footer_site_link}>
              Лицензионный договор
            </Link>
          </div>
        </div>
        <div className={styles.footer_line}></div>
        <div className={styles.copyright_cont}>
          <p className={styles.copyright_p}>
            Copyright © 2023 PR Express. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
