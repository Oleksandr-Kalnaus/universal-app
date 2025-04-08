import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'
import styles from './Layout.module.scss'
import {useState} from "react";

const Layout = () => {
    const [mobileOpen, setMobileOpen] = useState(false)

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    return (
        <div className={styles.layout}>
            <Header handleDrawerToggle={handleDrawerToggle} />
            <Sidebar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
            <main className={styles.mainContent}>
                <div className={styles.toolbar} />
                <div className={styles.content}>
                    <Outlet />
                </div>
            </main>
        </div>
    )
}

export default Layout