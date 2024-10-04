import {  Dropdown, Space } from 'antd';
import user from '../../assets/images/user.jpg'
import {useTransition} from "react";

const Profil = () => {

    const [t,i18n] = useTransition()

    const items = [
        {
            key: '1',
            label: (
                <a href="" className={''}>Temurbek Mirzayev</a>
            ),
        },
        {
            key: '2',
            label: (
                <a href="">View </a>
            ),
        },
        {
            key: '3',
            label: (
                <a href="">Settings</a>
            ),
        },
    ];

    return(
        <Space direction="vertical">
            <Space wrap>


                <Dropdown
                    menu={{
                        items,
                    }}
                    placement="bottomRight"
                >
                    <img className={'w-12 h-12 rounded-full object-cover cursor-pointer mt-4'} src={user} alt=""/>
                </Dropdown>
            </Space>

        </Space>
    )
};
export default Profil;