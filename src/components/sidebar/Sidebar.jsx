import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

import { LineStyle, Timeline, TrendingUp, Notifications, Group, Inventory2, ReceiptLong, BarChart, Mail, DynamicFeed, Chat, WorkOutline, Report } from '@mui/icons-material';
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-wrapper">
            <h3 className="sidebar-title">
                Dashboard
            </h3>
            <ul className='sidebar-list'>
                <li className="sidebar-list-item active">
                    <LineStyle className='side-bar-icon' /> <Link to="/" className='list-item-link'>Home</Link> 
                </li>
                <li className="sidebar-list-item">
                    <Timeline className='side-bar-icon' /> Analytics
                </li>
                <li className="sidebar-list-item">
                    <TrendingUp className='side-bar-icon' /> Sales
                </li>
            </ul>
        </div>

        <div className="sidebar-wrapper">
            <h3 className="sidebar-title">
                Quick menu
            </h3>
            <ul className='sidebar-list'>
                <li className="sidebar-list-item">
                    <Group className='side-bar-icon' /> <Link to="/users" className='list-item-link'>Users</Link>
                </li>
                <li className="sidebar-list-item">
                    <Inventory2 className='side-bar-icon' /> Products
                </li>
                <li className="sidebar-list-item">
                    <ReceiptLong className='side-bar-icon' /> Transactions
                </li>
                <li className="sidebar-list-item">
                    <BarChart className='side-bar-icon' /> Reports
                </li>
            </ul>
        </div>

        <div className="sidebar-wrapper">
            <h3 className="sidebar-title">
                Notifications
            </h3>
            <ul className='sidebar-list'>
                <li className="sidebar-list-item">
                    <Mail className='side-bar-icon' /> Mail
                </li>
                <li className="sidebar-list-item">
                    <DynamicFeed className='side-bar-icon' /> Feedback
                </li>
                <li className="sidebar-list-item">
                    <Chat className='side-bar-icon' /> Messages
                </li>
            </ul>
        </div>

        <div className="sidebar-wrapper">
            <h3 className="sidebar-title">
                Staff
            </h3>
            <ul className='sidebar-list'>
                <li className="sidebar-list-item">
                    <WorkOutline className='side-bar-icon' /> Manage
                </li>
                <li className="sidebar-list-item">
                    <Timeline className='side-bar-icon' /> Analytics
                </li>
                <li className="sidebar-list-item">
                    <Report className='side-bar-icon' /> Reports
                </li>
            </ul>
        </div>


    
    </div>
  )
}

export default Sidebar