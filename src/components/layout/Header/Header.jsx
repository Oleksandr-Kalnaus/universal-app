import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Avatar, Menu, MenuItem } from '@mui/material';
import { Menu as MenuIcon, Notifications, AccountCircle } from '@mui/icons-material';
import styles from './Header.module.scss';

const Header = ({ onMenuClick }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="fixed" className={styles.appBar}>
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    onClick={onMenuClick}
                    className={styles.menuButton}
                >
                    <MenuIcon />
                </IconButton>

                <div className={styles.grow} />

                <div className={styles.actions}>
                    <IconButton color="inherit">
                        <Notifications />
                    </IconButton>
                    <IconButton
                        edge="end"
                        onClick={handleProfileMenuOpen}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                    >
                        <MenuItem onClick={handleMenuClose}>Профіль</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Налаштування</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Вийти</MenuItem>
                    </Menu>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;