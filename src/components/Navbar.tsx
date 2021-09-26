import {Button, Menu, Typography, Avatar} from 'antd';
import {NavLink} from 'react-router-dom';
import icon from '../images/cryptocurrency.png';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined} from '@ant-design/icons';

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size="large"/>
                <Typography.Title level={2} className="logo">
                    <NavLink to="/">CryptoVerse</NavLink>
                </Typography.Title>
                {/* <Button className="menu-control-container"></Button> */}
            </div>
            <Menu theme="dark">
                <Menu.Item icon={<HomeOutlined/>}>
                    <NavLink to='/'>Home</NavLink>
                </Menu.Item>
                <Menu.Item icon={<FundOutlined/>}>
                    <NavLink to='/cryptocurrencies'>Cryptocurrencies</NavLink>
                </Menu.Item>
                <Menu.Item icon={<MoneyCollectOutlined/>}>
                    <NavLink to='/exchanges'>Exchanges</NavLink>
                </Menu.Item>
                <Menu.Item icon={<BulbOutlined/>}>
                    <NavLink to='/news'>News</NavLink>
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default Navbar;
