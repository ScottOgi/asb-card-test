import { Layout, Menu, Row, Col } from "antd"
import { ArrowLeftOutlined } from '@ant-design/icons'
import { NavLink, Routes, Route } from "react-router-dom"
import RegisterCard from "../page/register-card-form"
import MenuPage from "../page/menu"
import css from './nav-style.module.css'


const Navigation = () => {
    return (
        <Layout>
            <Layout.Header
                style={{
                    position: 'fixed',
                    zIndex: 1,
                    width: '100%'
                }}>
                <Row justify='space-between'>
                    <Col>
                        <Menu mode='horizontal' defaultSelectedKeys={['1']}>
                            <Menu.Item key='1'><NavLink to="/"><ArrowLeftOutlined/></NavLink></Menu.Item>
                            <Menu.Item key='2'><NavLink to="/MenuPage">Menu</NavLink></Menu.Item>
                        </Menu>
                    </Col>
                </Row>
            </Layout.Header>
            <Layout.Content className={css['site-layout']} style={{ padding: '0 50px', marginTop: 64 }}>
                <div className={css['site-layout-background']} style={{ padding: 24, minHeight: 380 }}>
                    <Routes>
                        <Route path="/" element={<RegisterCard/>} />
                        <Route path="/MenuPage" element={<MenuPage />} />
                    </Routes>
                </div>
            </Layout.Content>
        </Layout>
    )
}

export default Navigation