import {useState} from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
// import Logo from 'src/assets/images/Logo.jpg';
import {
    SignalFilled,
    TrophyFilled,
    ExclamationCircleFilled,
    StarOutlined,
    SettingFilled,
    SoundFilled,
    FileProtectOutlined,
    LogoutOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme} from 'antd';
import MyResult from "../../components/my-result/MyResult.jsx";
import Rating from "../../components/rating/Rating.jsx";
import About from "../../components/about/About.jsx";
import Test from "../../components/quiz/Test.jsx";
import Topbar from "../../components/topbar/Topbar.jsx";
import Setting from "../../components/setting/Setting.jsx";
import News from "../../components/news/News.jsx";
import {useTranslation} from "react-i18next";

const {Header, Content, Footer, Sider} = Layout;

function getItem(label, key, icon, children, path) {
    return {
        key,
        icon,
        children,
        label: <Link to={path}>{label}</Link>,
    };
}


const Home = () => {


    const {t} = useTranslation()

    const items = [
        getItem(t('menu.my_result'), '1', <TrophyFilled/>, null, "/"),
        getItem(t('menu.rating'), '2', <SignalFilled/>, null, "/rating"),
        getItem(t('menu.quiz'), 'sub1', <StarOutlined/>, [
            getItem(t('menu.mathematics'), '3', null, null, "/quiz/mathematics"),
            getItem(t('menu.physics'), '4', null, null, "/quiz/physics"),
            getItem(t('menu.mother_tongue'), '6', null, null, "/quiz/mother-tongue"),
            getItem(t('menu.history'), '7', null, null, "/quiz/history"),
        ]),
        getItem(t('menu.about'), '13', <ExclamationCircleFilled/>, null, "/about"),
        getItem(t('menu.setting'), '9', <SettingFilled/>, null, "/settings"),
        getItem(t('menu.help'), '10', <SoundFilled/>, null, "/help"),
        getItem(t('menu.news'), '11', <FileProtectOutlined/>, null, "/news"),
        getItem(t('menu.logout'), '12', <LogoutOutlined/>, null, "/logout"),
    ];

    const [collapsed, setCollapsed] = useState(false);
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();


    return (
        <Router>
            <Layout
                style={{
                    minHeight: '100vh',
                }}
            >
                <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                    <div style={{padding: '16px', textAlign: 'center'}}>
                        <img src='https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2667690/header.jpg?t=1725007623' alt="Logo" style={{width: '100%', height: 'auto'}}/>
                    </div>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items}/>
                </Sider>
                <Layout>
                    <Header
                        style={{
                            padding: 0,
                            background: colorBgContainer,
                            height: "auto"
                        }}
                    >
                        <Topbar/>
                    </Header>
                    <Content
                        style={{
                            margin: '0 16px',
                        }}
                    >

                        <div
                            style={{
                                padding: 24,
                                minHeight: 360,
                                background: colorBgContainer,
                                borderRadius: borderRadiusLG,
                                marginTop: 50,
                            }}
                        >
                            <Routes>
                                <Route path="/" element={<MyResult/>}/>
                                <Route path="/rating" element={<Rating/>}/>
                                <Route path="/about" element={<About/>}/>
                                <Route path="/news" element={<News/>}/>
                                <Route path="/settings" element={<Setting/>}/>
                                <Route path="/quiz/mathematics" element={<Test subject="Mathematics"/>}/>
                                <Route path="/quiz/physics" element={<Test subject="Physics"/>}/>
                                <Route path="/quiz/mother-tongue" element={<Test subject="Mother tongue"/>}/>
                                <Route path="/quiz/history" element={<Test subject="History"/>}/>
                            </Routes>
                        </div>
                    </Content>
                    <Footer
                        style={{
                            textAlign: 'center',
                        }}
                    >
                        Welcome to my website
                    </Footer>
                </Layout>
            </Layout>
        </Router>
    );
};

export default Home;
