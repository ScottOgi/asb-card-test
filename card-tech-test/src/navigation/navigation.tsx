import { Layout, Menu, Row, Col } from "antd"
import { ArrowLeftOutlined } from '@ant-design/icons'
import { NavLink, Routes, Route, useLocation } from "react-router-dom"
import RegisterCard from "../page/register-card-form"
import MenuPage from "../page/menu"
import css from './nav-style.module.css'
import { RegisteredPage } from "../page/registered"

const { Header, Content } = Layout

const Navigation = () => {
    return (
        <Layout>
            <Header
                style={{
                    position: 'fixed',
                    zIndex: 1,
                    width: '100%'
                }}>
                <Row justify='space-between'>
                    <Col>
                        <Menu mode='horizontal' defaultSelectedKeys={['1']}>
                            <Menu.Item key='1'><NavLink to="/MenuPage">Menu</NavLink></Menu.Item>
                        </Menu>
                    </Col>
                </Row>
            </Header>
            <Content className={css['site-layout']} style={{ padding: '0 50px', marginTop: 64 }}>
                <div className={css['site-layout-background']} style={{ padding: 24, minHeight: 380 }}>
                    <Routes>
                        <Route path="/" element={<RegisterCard/>} />
                        <Route path="/MenuPage" element={<MenuPage />} />
                        <Route path="/Registered" element={<RegisteredPage />} />
                    </Routes>
                </div>
            </Content>
        </Layout>
    )
}

export default Navigation