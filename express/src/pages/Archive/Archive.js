import React, { useState } from 'react';
import styles from './Archive.module.css';
import Checkbox from '../Landing/comp_landing/Checkbox';

const allArchiveData = [
    { id: '008888', title: 'Да, потускнели светлые лики икон', date: '01.01.2020', time: '15:30:23' },
    { id: '009999', title: 'Свет утренний', date: '02.01.2020', time: '10:45:00' },
    { id: '010101', title: 'Загадки детства', date: '03.01.2020', time: '12:30:45' },
    { id: '020202', title: 'Тишина ночи', date: '04.01.2020', time: '22:15:20' },
    { id: '030303', title: 'Весенний дождь', date: '05.01.2020', time: '14:20:30' },
    { id: '040404', title: 'Летний ветер', date: '06.01.2020', time: '16:42:10' },
    { id: '050505', title: 'Осенний лист', date: '07.01.2020', time: '18:35:50' },
    { id: '060606', title: 'Зимний холод', date: '08.01.2020', time: '13:25:00' },
    { id: '070707', title: 'Весенняя радуга', date: '09.01.2020', time: '11:11:11' },
    { id: '080808', title: 'Летняя ночь', date: '10.01.2020', time: '22:45:05' },
    { id: '090909', title: 'Осенняя грусть', date: '11.01.2020', time: '17:15:35' },
    { id: '101010', title: 'Зимняя сказка', date: '12.01.2020', time: '19:45:45' },
    { id: '111111', title: 'Новогодний сюрприз', date: '13.01.2020', time: '20:20:20' },
    { id: '121212', title: 'Праздник весны', date: '14.01.2020', time: '15:10:10' },
];

export default function Archive() {
    const [showCount, setShowCount] = useState(6);
    const [selected, setSelected] = useState(Array(allArchiveData.length).fill(false));
    const [selectAll, setSelectAll] = useState(false);

    const handleCheckboxChange = (index) => {
        const newSelected = [...selected];
        newSelected[index] = !newSelected[index];
        setSelected(newSelected);
    };

    const handleSelectAll = () => {
        const newSelectAll = !selectAll;
        setSelectAll(newSelectAll);
        setSelected(Array(allArchiveData.length).fill(newSelectAll));
    };

    const loadMore = () => {
        setShowCount((prevCount) => prevCount + 6);
    };

    const getCardStyle = (index) => {
        const isChecked = selected[index];
        const previousChecked = selected[index - 1];
        const nextChecked = selected[index + 1];

        if (isChecked && previousChecked && nextChecked) {
            return { borderRadius: '0px 0px 0px 0px', background: '#F9F9F9' };
        } else if (isChecked && previousChecked) {
            return { borderRadius: '0px 0px 20px 20px', background: '#F9F9F9' };
        } else if (isChecked && nextChecked) {
            return { borderRadius: '20px 20px 0px 0px', background: '#F9F9F9' };
        } else if (isChecked) {
            return { borderRadius: '20px 20px 20px 20px', background: '#F9F9F9' };
        }
        return {};
    };

    return (
        <div className={styles.cont}>
            <div className={styles.archive}>
                <div className={styles.first_lint}>
                    <h1 className={styles.first_line_h1}>Архив</h1>
                    <div className={styles.first_line_end_cont}>
                        <div className={styles.checkbox_cont}>
                            <Checkbox checked={selectAll} onChange={handleSelectAll} /> Выбрать все
                        </div>
                        <div className={styles.inst}>
                            <img className={styles.inst_img} src='\images\Archive\Group 6977.png' alt="instruction" />
                        </div>
                    </div>
                </div>
                <div className={styles.second_line_title}>
                    <p className={styles.second_line_p_1}>Заголовок</p>
                    <p className={styles.second_line_p_2}>Дата / Время</p>
                    <p className={styles.second_line_p_3}>ID</p>
                    <p className={styles.second_line_p_4}>Действие</p>
                </div>
                {allArchiveData.slice(0, showCount).map((card, index) => (
                    <div 
                        className={styles.card}
                        key={index}
                        style={getCardStyle(index)}
                    >
                        <div className={styles.checbox_cont_card}>
                            <Checkbox checked={selected[index]} onChange={() => handleCheckboxChange(index)} />
                        </div>
                        <p className={styles.card_name}>{card.title}</p>
                        <p className={styles.card_data}>{`${card.date} / ${card.time}`}</p>
                        <p className={styles.card_id}>№ {card.id}</p>
                        <img className={styles.card_btn} src='\images\Archive\Group 6977.png' alt="action button" />
                    </div>
                ))}
            </div>
            {showCount < allArchiveData.length && (
                <div className={styles.load_more} onClick={loadMore}>Показать еще</div>
            )}
        </div>
    );
}