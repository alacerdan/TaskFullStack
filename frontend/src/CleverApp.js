import React from 'react'
import {  
  Layout, Row, Col,
  Space, Pagination, Image,
  Select, Typography } from 'antd';
import Logo from './components/img/logo_clever.png'
import VCard from './components/VCard';
import { sortBy, sortByCriteria } from './components/helpers'
import './CleverApp.css';

const { Content } = Layout;
const { Title, Text } = Typography;
const { Option } = Select;

class CleverApp extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        properties: [],
        page:{
          offset: 6,
          allItems:[],
          currentPageItems: [],
          currentPage:1,
          itemsPerPage: 6, 
          totalItems: 0
        }
      }

      // Bind functions
      this.sortBy = sortBy.bind(this)
      this.handleCase = sortByCriteria.bind(this)
    }

    async componentDidMount(){
      // Get all data from API 
      const apiURL = 'http://localhost:5000/properties'
  
      try {
        const response = await fetch(apiURL);
        const data = await response.json();
        const totalItems = data.length
        // Status update, called paging handler and updated page status
        this.setState(
          {properties: [...data]},
          () => {
            this.handlePagination();
            const { page:currentPage } = this.state
            this.setState({page: {...currentPage, totalItems:totalItems, allItems:data}});
        })
      } catch(e) {
        throw new Error(`Data from API not available!: ${e}`);
      }
    }
    // Pagination functions 
    // Set state and update by call setItemsForCurrentPage function
    handlePagination = (pageNumber=1) => {
      const { itemsPerPage } = this.state.page;
      const currentPage = pageNumber;
      const offset = currentPage * itemsPerPage;
  
      this.setState({
          page: {...this.state.page, offset, currentPage}
      }, () => {
          this.setItemsForCurrentPage();
      });
    }
    // Set page control variables and update state
    setItemsForCurrentPage = () => {
      const { page } =  this.state
      const { offset, itemsPerPage, allItems } = page;
      const currentPageItems = allItems.length > itemsPerPage? allItems.slice(offset, offset + itemsPerPage): allItems;
      const totalItems = allItems.length
      this.setState({
          page:{...this.state.page, currentPageItems, totalItems}
      });
    }
    // -- Pagination functions 

    // Filter function
    handleFilter = (value) => {
      const { properties, page } = this.state
  
      const ordered = this.handleCase(value, properties)
    
      this.setState({page:{...page, allItems: ordered}},
        ()=> this.handlePagination()
      );
    }
    // --- Filter function
    
    render(){
      // Get variable from state
      const { page } = this.state
      const {currentPageItems, totalItems, currentPage, itemsPerPage } = page

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
              {/* --- Header  */}
              <br/>
              <Row>
                {/* Pagination widget */}
                <Col span={10} push={2}>
                  <Pagination
                    total={totalItems}
                    current={currentPage}
                    small={true}
                    showTotal={_ => `Total ${totalItems} items`}
                    defaultPageSize={itemsPerPage}
                    defaultCurrent={1}
                    showSizeChanger={false}
                    onChange={this.handlePagination}
                  />      
                </Col>
                {/* --- Pagination widget */}
                {/* Filter by features  */}
                <Col span={8} push={2}>

                  <Select
                    showSearch
                    style={{ width: '8vw', minWidth: 150 }}
                    placeholder="Sort by"
                    optionFilterProp="children"
                    onChange={this.handleFilter}
                  >
                    <Option value="lowPrice">Price: Low to High</Option>
                    <Option value="highPrice">Price: High to Low</Option>
                    <Option value="lowRating">Rating: Low to High</Option>
                    <Option value="highRating">Rating: High to Low</Option>
                    <Option value="featured">Featured</Option>
                  </Select>
                </Col>
                {/* --- Filter by features  */}
              </Row>

              {/* Properties Cards */}
              <Row>
                    {/* Cards apresentation */}
                    <Col push={2} span={22}>

                    {/* Loop overall properties */}
                    {currentPageItems.map(item => {

                      return (
                        <Space key={`${item.id}-space`} size={10}>
                        {/* Property Card  */}
                          <VCard property={item}/>
                        </Space>
                    )})}
                    {/* --- Loop overall properties */}


                  </Col>
              </Row>
              {/* --- Properties Cards */}

          </Content>

        </Layout>
        
      )
    }

}


export default CleverApp;
