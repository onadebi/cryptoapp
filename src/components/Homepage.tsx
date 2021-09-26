import {Typography, Row,Col,Statistic} from 'antd';
import {useGetCryptosQuery} from '../services/cryptoapi';
import millify from 'millify';
import { NavLink } from 'react-router-dom';

const {Title} = Typography;


const Homepage = () => {

    const {data, isFetching} = useGetCryptosQuery('');
    const globalStats = data?.data?.stats;
    if(isFetching) return (<h5>Loading...</h5>);
    console.log(globalStats);
    return (
        <>
            <Title level={2} className="heading">Global Crypto Stats</Title>
                <Row>
                    <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total}/></Col>
                    <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}/></Col>
                    <Col span={12}><Statistic title="Total Market cap" value={millify(globalStats.totalMarketCap)}/></Col> 
                    <Col span={12}><Statistic title="Total 24h volume" value={millify(globalStats.total24hVolume)}/></Col>
                    <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}/></Col>
                </Row>
                <div className="home-heading-container">
                    <Title level={2} className="home-title">Top 10 Crypto in the world</Title>
                    <Title level={3} className="show-more"><NavLink to='/cryptocurrencies'>Show more</NavLink></Title>
                </div>
        </>
    )
}

export default Homepage

