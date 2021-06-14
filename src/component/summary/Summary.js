import React from 'react';
import Avtar from '../../asset/avtar.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import MaterialUIPickers from './Datepicker';
import Cards from './card/Card';
import Bigchart from './Bigchart';
import { Link } from 'react-router-dom';

const nameAdmin = "Admin Name";
function Summary(){
    return <div className="summary">
        <Row className="row">
            <Col xs={12} md={3}>
                <Image className="avtar" src={Avtar} roundedCircle></Image>
                <h3 className="adminName">{nameAdmin}</h3>
                <div className="d-grid gap-2">
                    <button className="darkButton">Dashboard</button>
                    <Link to={"/bill"}><button className="lightButton">Billing System</button></Link>
                    <button className="lightButton">Sales</button>
                    <button className="lightButton">Inventory Management</button>
                    <button className="lightButton">Coupans Generator</button>
                </div>  
            </Col>
            <Col xs={12} md={9}>
            <Row>
                    <Col xs={6} md={2}>
                        <h3 className="dropdownButton"> Summary : </h3>
                    </Col>
                    <Col xs={6} md={3} >
                        <MaterialUIPickers />
                    </Col>
                    <Col md={7}></Col>
                </Row>
                <Row>
                    <Col xs={12} md={3}>
                        <Cards />
                    </Col>
                    <Col xs={12} md={3}>
                        <Cards />
                    </Col>
                    <Col xs={12} md={3}>
                        <Cards />
                    </Col>
                    <Col xs={12} md={3}>
                        <Cards />
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={2}>
                        <h3 className="dropdownButton"> Summary : </h3>
                    </Col>
                    <Col xs={6} md={3} >
                        <MaterialUIPickers />
                    </Col>
                    <Col md={7}></Col>
                </Row>
                <div className="bigChart">
                    <Bigchart />
                </div>
            </Col>    
        </Row>
    </div>
}
export default Summary;