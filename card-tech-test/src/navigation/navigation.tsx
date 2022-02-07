import { Layout, Menu, Row, Col, PageHeader, Typography } from "antd"
import { ArrowLeftOutlined, BackwardOutlined, MenuOutlined } from '@ant-design/icons'
import { NavLink, Routes, Route, useLocation } from "react-router-dom"
import RegisterCard from "../page/register-card-form"
import MenuPage from "../page/menu"
import css from './nav-style.module.css'

const { Header, Content, Footer } = Layout

const Navigation = () => {
    let isMenuActive = useLocation().pathname === '/'

    return (
        <Layout>
            <Header
                style={{backgroundColor: 'wheat'}}>
                    { isMenuActive ? 
                    <NavLink to={'/MenuPage'}><MenuOutlined /></NavLink> : 
                    <NavLink to={'/'}><ArrowLeftOutlined/></NavLink> }
            </Header>
            <Layout>
            <Content className={css['site-layout']} style={{ padding: '0 50px', marginTop: 64 }}>
                <div className={css['site-layout-background']} style={{ padding: 24, minHeight: 380 }}>
                    <Routes>
                        <Route path="/" element={<RegisterCard/>} />
                        <Route path="/MenuPage" element={<MenuPage />} />
                    </Routes>
                </div>
            </Content>
            </Layout>
            <Footer
                style={{height:'100%'}}>

            </Footer>
        </Layout>
    )
}

export default Navigation