import { useState } from "react"
import { Layout, } from "antd"
import { ArrowLeftOutlined, MenuOutlined } from '@ant-design/icons'
import { NavLink, Routes, Route } from "react-router-dom"
import RegisterCard from "../page/register-card-form"
import MenuPage from "../page/menu"
import css from './nav-style.module.css'

const { Header, Content, Footer } = Layout

export const Navigation = () => {
    const [isMenuActive, toggleMenu] = useState<boolean>(false)

    const menuToggle = () => {
        toggleMenu(!isMenuActive)
    }

    return (
        <Layout
            style={{ height: '100%' }}>
            <Header 
                aria-label="header"
                style={{ backgroundColor: 'wheat' }}>
                {isMenuActive ?
                    <NavLink aria-label="back" to={'/'} style={{ color: 'black' }} onClick={menuToggle}><ArrowLeftOutlined /></NavLink> :
                    <NavLink to={'/MenuPage'} style={{ color: 'black' }} onClick={menuToggle}><MenuOutlined aria-label="menu" /></NavLink>}
            </Header>
            <Layout>
                <Content aria-label="content" className={css['site-layout']} style={{ padding: '0 50px', marginTop: 64 }}>
                    <div className={css['site-layout-background']} style={{ padding: 24, minHeight: 380 }}>
                        <Routes>
                            <Route path="/" element={<RegisterCard />} />
                            <Route path="/MenuPage" element={<MenuPage />} />
                        </Routes>
                    </div>
                </Content>
            </Layout>
            <Footer
                aria-label="footer" style={{ textAlign: 'center', bottom: '0px' }}>
                Scott Ogilvie ©2022
            </Footer>
        </Layout>
    )
}

export default Navigation