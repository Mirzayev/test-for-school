import { Table } from 'antd';
import { useTranslation } from "react-i18next";

const MyResult = () => {
    const { t } = useTranslation();
    const columns = [
        {
            title: t('my_result.date'),
            dataIndex: 'name',
        },
        {
            title: t('my_result.math_score'),
            dataIndex: 'math',
            sorter: {
                compare: (a, b) => a.chinese - b.chinese,
                multiple: 3,
            },
        },
        {
            title: t('my_result.physic'),
            dataIndex: 'physic',
            sorter: {
                compare: (a, b) => a.physic - b.physic,
                multiple: 2,
            },
        },
        {
            title: t('my_result.tongue_score'),
            dataIndex: 'tongue',
            sorter: {
                compare: (a, b) => a.tongue - b.tongue,
                multiple: 1,
            },
        },
    ];

    const data = [
        {
            key: '1',
            name: '10.09.2024',
            physic: 98,
            math: 60,
            tongue: 70,
        },
        {
            key: '2',
            name: '21.09.2024',
            physic: 98,
            math: 66,
            tongue: 89,
        },
        {
            key: '3',
            name: '23.09.2024',
            physic: 98,
            math: 90,
            tongue: 70,
        },
        {
            key: '4',
            name: '27.09.2024',
            physic: 88,
            math: 99,
            tongue: 89,
        },
    ];

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    return (
        <div>
            <h2 className={'flex justify-center my-4 font-bold text-xl'}>
                {t('my_result.my_result')}
            </h2>
            <Table className={'overflow-x-auto'} columns={columns} dataSource={data} onChange={onChange} />
        </div>
    );
};

export default MyResult;
