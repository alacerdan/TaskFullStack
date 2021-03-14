import React from 'react'

import {  
  Layout, Row, Col,
  Space, Pagination, Image,
  Select, Typography } from 'antd';
  
import Logo from './components/img/logo_clever.png'
import './CleverApp.css';

const { Content } = Layout;
const { Title, Text } = Typography;




class CleverApp extends React.Component {

    constructor(props){
      super(props);
    }
    
    render(){

      return (
        <Layout>
          <Content>
              {/* Header  */}
                <Row className='header'>
                      <Image
                        width={200}
                        src={Logo}
                      />
                      <Title><Text type='warning'>Clever Task Full Stack</Text></Title>
                </Row>
              {/* --- */}

          </Content>

        </Layout>
        
      )
    }

}


export default CleverApp;
