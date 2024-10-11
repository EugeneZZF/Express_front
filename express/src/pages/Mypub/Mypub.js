import React, { useState } from 'react';
import styles from './Mypub.module.css';
import Checkbox from '../Landing/comp_landing/Checkbox';

const allArchiveData = [
    {
        id: '008892',
        sum: '1250',
        title: 'Подготовка к презентации продукта',
        date: '05.04.2020',
        time: '09:30:45',
        resources: ['presentationTeam', 'fdds'],
        status_num: 3,
        status: 'in-review',
    },
    {
        id: '008893',
        sum: '1500',
        title: 'Маркетинговая кампания',
        date: '06.04.2020',
        time: '11:15:00',
        resources: ['marketingDept', 'budgeting'],
        status_num: 1,
        status: 'planned',
    },
    {
        id: '008894',
        sum: '1750',
        title: 'Исследование рынка',
        date: '07.04.2020',
        time: '14:30:25',
        resources: ['researchTeam', 'dataAnalysis'],
        status_num: 2,
        status: 'in-progress',
    },
    {
        id: '008895',
        sum: '2000',
        title: 'Разработка нового продукта',
        date: '08.04.2020',
        time: '09:45:10',
        resources: ['devTeam', 'design'],
        status_num: 3,
        status: 'in-review',
    },
    {
        id: '008896',
        sum: '1600',
        title: 'Обучение сотрудников',
        date: '09.04.2020',
        time: '13:00:00',
        resources: ['hrDept', 'trainingMaterials'],
        status_num: 1,
        status: 'planned',
    },
    {
        id: '008897',
        sum: '1850',
        title: 'Участие в конференции',
        date: '10.04.2020',
        time: '10:20:30',
        resources: ['eventTeam', 'sponsorship'],
        status_num: 3,
        status: 'in-review',
    },
    {
        id: '008898',
        sum: '1700',
        title: 'Редизайн сайта',
        date: '11.04.2020',
        time: '15:40:45',
        resources: ['webTeam', 'uxDesign'],
        status_num: 2,
        status: 'in-progress',
    },
    {
        id: '008899',
        sum: '1550',
        title: 'Внедрение CRM-системы',
        date: '12.04.2020',
        time: '16:50:20',
        resources: ['crmTeam', 'itDept'],
        status_num: 1,
        status: 'planned',
    },
    {
        id: '008900',
        sum: '1950',
        title: 'Кампус прослушивания клиентов',
        date: '13.04.2020',
        time: '09:10:15',
        resources: ['customerService', 'feedbackAnalysis'],
        status_num: 2,
        status: 'in-progress',
    },
    {
        id: '008901',
        sum: '2050',
        title: 'Модернизация оборудования',
        date: '14.04.2020',
        time: '11:22:35',
        resources: ['techDept', 'procurement'],
        status_num: 3,
        status: 'in-review',
    },
    {
        id: '008902',
        sum: '1650',
        title: 'Социальные медиа-кампании',
        date: '15.04.2020',
        time: '13:37:50',
        resources: ['socialMediaTeam', 'contentCreation'],
        status_num: 2,
        status: 'in-progress',
    },
    {
        id: '008903',
        sum: '1800',
        title: 'Оптимизация рабочих процессов',
        date: '16.04.2020',
        time: '12:45:00',
        resources: ['opsTeam', 'efficiencyAnalysis'],
        status_num: 1,
        status: 'planned',
    },
];

export default function Mypub() {
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
                    <h1 className={styles.first_line_h1}>Мои публикации</h1>
                    <div className={styles.first_line_end_cont}>
                        <div className={styles.checkbox_cont}>
                            <Checkbox checked={selectAll} onChange={handleSelectAll} /> Выбрать все
                        </div>
                        <div className={styles.inst}>
                            <img className={styles.inst_img} src='\images\Mypub\inst.svg' alt="instruction" />
                        </div>
                    </div>
                </div>
                <div className={styles.second_line_title}>
                    <p className={styles.second_line_p_1}>Заголовок</p>
                    <p className={styles.second_line_p_2}>Сумма</p>
                    <p className={styles.second_line_p_3}>Дата / Время</p>
                    <p className={styles.second_line_p_4}>Ресурсы</p>
                    <p className={styles.second_line_p_5}>ID</p>
                    <p className={styles.second_line_p_6}>Статус</p>
                    <p className={styles.second_line_p_7}>Действие</p>
                    
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
                    <p className={styles.card_sum}>{card.sum} $</p>
                    <p className={styles.card_data}>{`${card.date}/ ${card.time}`}</p>
                    <p className={styles.card_res}>Ресурс 1</p>
                    <p className={styles.card_id}>№ {card.id}</p>
                    <div className={styles.status_cont}>
                        <img className={styles.status_img} src={`/images/Mypub/status_${card.status_num}.svg`} alt={`status ${card.status_num}`} />
                    </div>
                    <img className={styles.card_btn} src='/images/Mypub/inst.svg' alt="action button" />
                    </div>
                    ))}
            </div>
            {showCount < allArchiveData.length && (
                <div className={styles.load_more} onClick={loadMore}>Показать еще</div>
            )}
        </div>
    );
}