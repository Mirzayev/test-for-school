


import { Table } from 'antd';
import {useTranslation} from 'react-i18next'
const Rating = () => {

    const { t } = useTranslation();
    const columns = [
        {
            title: t('my_result.place'),
            dataIndex: 'number',
            key: 'number',
            width: 90,
        },
        {
            title: t('my_result.name'),
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
            width: 150,
        },

        {
            title: t('my_result.math_score'),
            dataIndex: 'mathematics',
            key: 'mathematics',
            ellipsis: true,
            width: 120,
        },
        {
            title: t('my_result.physic'),
            dataIndex: 'physics',
            key: 'physics',
            ellipsis: true,
            width: 120,

        },
        {
            title: t('my_result.tongue_score'),
            dataIndex: 'mother_tongue',
            key: 'mother_tongue',
            ellipsis: true,
            width: 120,

        },
        {
            title: t('my_result.math_score'),
            dataIndex: 'mathematic',
            key: 'mathematic',
            ellipsis: true,
            width: 120,

        },
        {
            title: t('my_result.history'),
            dataIndex: 'history',
            key: 'history',
            ellipsis: true,
            width: 120,

        },
    ];
    const data = [
        {
            key: '1',
            name: 'Temurbek Mirzayev',
            number: 1,
            mathematics: 93,
            physics: 63,
            mathematic: 11,
            history: 11,
            mother_tongue: 11

        },
        {
            key: '2',
            name: 'Javlon Usmonov',
            number: 2,
            mathematics: 87,
            physics: 58,
            mathematic: 11,
            history: 2.2,
            mother_tongue: 4.4

        },
        {
            key: '3',
            number: 3,
            name: 'Yahyobek Qodirov',
            mathematics: 83,
            physics: 50,
            mathematic: 11,
            history: 5.5,
            mother_tongue: 7.7

        },
        {
            key: '4',
            number: 4,
            name: 'Botirov Ma\'ruf',
            mathematics: 83,
            physics: 50,
            mathematic: 11,
            history: 7.7,
            mother_tongue: 5.5

        },
        {
            key: '5',
            number: 5,
            name: 'Yahyobek Qodirov',
            mathematics: 83,
            physics: 50,
            mathematic: 11,
            history: 9.9,
            mother_tongue: 4.4

        },
    ];

    return (
        <div>
            <h3 className={'flex justify-center text-xl font-bold my-4'}>{t('my_result.all_student')}</h3>
            <Table className={'overflow-x-auto'} columns={columns} dataSource={data}/>
        </div>
    )
}
export default Rating;