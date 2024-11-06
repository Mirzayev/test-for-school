import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import {
    SignalFilled,
    TrophyFilled,
    ExclamationCircleFilled,
    StarOutlined,
    SettingFilled,
    FolderAddOutlined ,
    SoundFilled,
    FileProtectOutlined,
    LogoutOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme, Modal } from 'antd'; // Modal ni import qildik
import MyResult from "../../components/my-result/MyResult.jsx";
import Rating from "../../components/rating/Rating.jsx";
import About from "../../components/about/About.jsx";
import Topbar from "../../components/topbar/Topbar.jsx";
import Setting from "../../components/setting/Setting.jsx";
import News from "../../components/news/News.jsx";
import { useTranslation } from "react-i18next";
import History from '../../components/science/history/History.jsx';
import Mathematics from '../../components/science/mathematics/Mathematics.jsx';
import Physics from '../../components/science/physics/Physics.jsx';
import MotherTongue from '../../components/science/mother-tongue/MotherTongue.jsx';

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children, path, onClick) {
    return {
        key,
        icon,
        children,
        label: (
            <span onClick={onClick}>
                <Link to={path}>{label}</Link>
            </span>
        ),
    };
}

const Home = () => {
    const { t } = useTranslation();
    const [collapsed, setCollapsed] = useState(false);
    const [visible, setVisible] = useState(false); // Modal holatini saqlash
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const handleLogout = (e) => {
        e.preventDefault(); // Sahifani yangilanishini to'xtatish
        setVisible(true); // Modalni ko'rsatish
    };

    const handleOk = () => {
        // Logout funksiyasini shu yerda bajarish (masalan, sesiyani to'xtatish)
        setVisible(false); // Modalni yopish
    };

    const handleCancel = () => {
        setVisible(false); // Modalni yopish
    };
  
    const items = [
        getItem(t('menu.my_result'), '1', <TrophyFilled />, null, "/"),
        getItem(t('menu.rating'), '2', <SignalFilled />, null, "/rating"),
        getItem(t('menu.quiz'), 'sub1', <StarOutlined />, [
            getItem(t('menu.mathematics'), '3', null, null, "/mathematics"),
            getItem(t('menu.physics'), '4', null, null, "/physics"),
            getItem(t('menu.mother_tongue'), '6', null, null, "/mother-tongue"),
            getItem(t('menu.history'), '7', null, null, "/history"),
        ]),
        getItem(t('menu.about'), '13', <ExclamationCircleFilled />, null, "/about"),
        // getItem(t('menu.setting'), '9', <SettingFilled />, null, "/settings"),
        // getItem(t('menu.createTest'), '10', <FolderAddOutlined />, null, "/help"),
        getItem(t('menu.news'), '11', <FileProtectOutlined />, null, "/news"),
        getItem(t('menu.logout'), '12', <LogoutOutlined />, null, "#", handleLogout), 
        
    ];

    return (
        <Router>
            <Layout
                style={{
                    minHeight: '100vh',
                }}
            >
                <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                    <div style={{ padding: '16px', textAlign: 'center' }}>
                        <img src='https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2667690/header.jpg?t=1725007623' alt="Logo" style={{ width: '100%', height: 'auto' }} />
                    </div>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
                </Sider>
                <Layout style={{overflowX:'scroll'}}>
                    <Header
                        style={{
                            padding: 0,
                            background: colorBgContainer,
                            height: "auto"
                        }}
                    >
                        <Topbar />
                    </Header>
                    <Content
                        style={{
                            margin: '0 16px',
                        }}
                    >
                        <div
                            style={{
                                padding: 10,
                                minHeight: 360,
                                background: colorBgContainer,
                                borderRadius: borderRadiusLG,
                                marginTop: 50,
                            }}
                        >
                            <Routes>
                                <Route path="/" element={<MyResult />} />
                                <Route path="/rating" element={<Rating />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/news" element={<News />} />
                                <Route path="/news" element={<News />} />
                                <Route path="/settings" element={<Setting />} />
                                <Route path="/mathematics" element={<Mathematics subject="Mathematics" />} />
                                <Route path="/physics" element={<Physics subject="Physics" />} />
                                <Route path="/mother-tongue" element={<MotherTongue subject="Mother tongue" />} />
                                <Route path="/history" element={<History subject="History" />} />
                                <Route path="/logout" element={<News />} />
                            </Routes>

                            {/* Modal komponenti */}
                            <Modal
                                title="Logout Confirmation"
                                visible={visible}
                                onOk={handleOk}
                                onCancel={handleCancel}
                            >
                                <p>Are you sure you want to log out?</p>
                            </Modal>
                        </div>
                    </Content>
                    <Footer
                        style={{
                            textAlign: 'center',
                        }}
                    >
                        Welcome to my platform
                    </Footer>
                </Layout>
            </Layout>
        </Router>
    );
};

export default Home;
