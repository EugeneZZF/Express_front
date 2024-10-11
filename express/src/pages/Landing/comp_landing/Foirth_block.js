import React, { useState } from 'react';
import styles from './Foirth_block.module.css';

const Foirth_block = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const reviews = [
        {
            name: "Антон Кучер",
            text: "Как принято считать, действия представителей оппозиции являются только методом политического участия и объективного рассмотрения соответствующих институтам. А также явные признаки победы институционализации, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут подвергнуты целой серии независимых исследований.",
            rating: 5
        },
        {
            name: "Елизавета Кудрявцева",
            text: "Не следует, однако, забывать, что существующая теория играет определяющее значение для первоочередных требований. Современные технологии достигли такого уровня, что реализация намеченных плановых заданий предопределяет высокую востребованность глубокомысленных рассуждений.",
            rating: 4
        },
        {
            name: "Алексей Алексеев",
            text: "Господа, внедрение современных методов требует от нас анализа вывода текущих активов. Кстати, элементы политического процесса, превозмогая сложившуюся непростую экономическую ситуацию, описаны максимально подробно.",
            rating: 4
        },
        {
            name: "Алексей Алексеев",
            text: "Господа, внедрение современных методов требует от нас анализа вывода текущих активов. Кстати, элементы политического процесса, превозмогая сложившуюся непростую экономическую ситуацию, описаны максимально подробно.",
            rating: 4
        },
        {
            name: "Алексей Алексеев",
            text: "Господа, внедрение современных методов требует от нас анализа вывода текущих активов. Кстати, элементы политического процесса, превозмогая сложившуюся непростую экономическую ситуацию, описаны максимально подробно.",
            rating: 4
        }
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
    };

    return (
        <div className={styles.slider_container}>
            <div className={styles.slider} style={{ transform: `translateX(-${currentIndex * 1300}px)` }}>
                {reviews.map((review, index) => (
                    <div className={styles.slide} key={index}>
                        <div className={styles.review_card}>
                            <h3>{review.name}</h3>
                            <p>{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</p>
                            <p>{review.text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.navigation}>
                <button className={styles.nav_button} onClick={prevSlide}>❮</button>
                <button className={styles.nav_button} onClick={nextSlide}>❯</button>
            </div>
        </div>
    );
};

export default Foirth_block;
