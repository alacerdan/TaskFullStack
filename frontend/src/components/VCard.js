import React from 'react';
import {
    Row, Col, Space, Card, Rate, Tag, Typography
} from 'antd'

import { EuroCircleOutlined } from '@ant-design/icons';
const { Text } = Typography;

// Property Card -> VCard 
const VCard = (props) => {
    const { property } = props;
    const {
        name, city,
        starRating, address1, overview,
        lowestPricePerNight, overallRating
    } = property;
    return(
    <Card
        style={{marginRight: 6}}  
        className='custom-cards' 
        title={<Text type='secondary'>{`${name}: ${city.country}/${city.name}`}</Text>}
        bordered={true} >
        <Row>
            {/* Price information  and overall*/}
            <Col span={4}>
                <Space direction='vertical'>
                    <Row>
                        {/* Price Per Night  */}
                        <Col span={24}>
                            Price: <Tag color="volcano"><EuroCircleOutlined/> {lowestPricePerNight.value}</Tag>
                        </Col>
                        {/* Price Per Night  */}
                    </Row>
                    <Row>
                        {/* Overall */}
                        <Col span={24}>
                            Overall:{
                                overallRating.value?
                                 (<Tag color='blue'>{overallRating.value}</Tag>):
                                 (<Tag color='blue'>{0}</Tag>)
                            }
                        </Col>
                        {/* Overall */}
                    </Row>
                </Space>
            </Col>
            {/* Price information  and overall*/}

            {/* Staring, Address and Overview */}
            <Col span={20} push={2}>
                <Row>
                {/* Staring */}
                <Col span={24}>
                    <Rate disabled defaultValue={starRating}/>
                </Col>
                {/* Address */}
                    <Col span={24}>
                        <strong>{address1}</strong>
                    </Col>
                </Row>
                {/* Overview */}
                <Row>
                <Col className='overflow' span={20}>
                    {overview}
                </Col>
                </Row>
            </Col>
            {/* Staring, Address and Overview */}
        </Row>
    </Card>
)}

export default VCard;