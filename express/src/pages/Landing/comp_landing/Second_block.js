import React from 'react'
import styles from './Second_block.module.css'

export default function Second_block() {
  return (
    <div className={styles.cont}>
        <div className={styles.title_cont}>
            <p className={styles.title_p}>ПОЧЕМУ</p>
            <div className={styles.choose}>
                ВЫБИРАЮТ
            </div>
            <p className={styles.title_p}>НАС?</p>
        </div>
        <div className={styles.main_cont}>
            <div className={styles.left_side}>
                <div className={styles.little_card}>
                    <img className={styles.stars_little}
                        src='\images\main\stars.svg'
                    ></img>
                    <h1 className={styles.little_card_h1}>Качество</h1>
                    <p className={styles.little_card_p}>Мы тщательно проверяем каждую публикацию на соответствие стандартам качества и актуальности</p>
                </div>
                <div className={styles.middle_card}>
                    <img className={styles.middle_img_1} src='\images\main\middle_card_1.svg'></img>
                    <img className={styles.middle_img_2} src='\images\main\middle_card_2.svg'></img>
                    <img className={styles.middle_img_3} src='\images\main\middle_card_3.svg'></img>
                    <img className={styles.middle_img_4} src='\images\main\middle_card_4.svg'></img>
                    <h1 className={styles.middle_card_h1}>Доступность</h1>
                    <p className={styles.middle_card_p}>Наши цены самые конкурентоспособные на рынке. Мы предлагаем различные пакеты услуг, чтобы удовлетворить потребности каждого клиента</p>
                </div>                
            </div>
            <div className={styles.right_side}>
                <p className={styles.right_side_p}><span className={styles.p_bold}>PR Express</span> - это платформа для массовой публикации статей и пресс-релизов. Мы помогаем компаниям и индивидуальным предпринимателям донести свои идеи до максимально широкой аудитории, обеспечивая быстрое и качественное распространение информации.</p>
                <div className={styles.bottom_side}>
                    <div className={styles.bot_left_side}>
                        <div className={styles.large_card}>
                            <img className={styles.large_card_img} src='\images\main\large_card.svg'></img>
                            <h1 className={styles.large_card_h1}>Широкий охват</h1>
                            <p className={styles.large_card_p}>Ваша публикация будет распространена более чем на 100 новостных сайтов России и зарубежья</p>
                        </div>
                    </div>
                    <div className={styles.bot_right_side}>
                        <div className={styles.little_card}>
                            <img className={styles.little_card_img_1} src='\images\main\right_little_1.svg'></img>
                            <h1 className={styles.middle_card_h1}>Скорость</h1>
                            <p className={styles.middle_card_p}>Наши процессы оптимизированы для обеспечения максимальной скорости публикации. Ваш пресс-релиз или статья будет опубликована в кратчайшие сроки</p>
                        </div>
                        <div className={styles.little_card}>
                            <img className={styles.little_card_img_2} src='\images\main\right_little_2.svg'></img>
                            <h1 className={styles.middle_card_h1}>Анонимность</h1>
                            <p className={styles.middle_card_p}>Наши процессы оптимизированы для обеспечения максимальной скорости публикации. Ваш пресс-релиз или статья будет опубликована в кратчайшие сроки</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.line}></div>
    </div>
  )
}
