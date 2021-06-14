import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';

function Data(){
    return <tr> <td>Item Name</td>
    <td>Unit</td>
    <td>Quantity</td>
    <td>Rate</td>
    <td>Discount</td>
    <td>Additional Discount</td>
    <td>Best Price</td>
    </tr>
}
function Bill(){
    return <div className="bill">    
        <Row>
            <Col xs={12} md ={2}>
                <Row className="rowIcon">
                <Col xs={3} md ={12}>
                <img className="icons" src="https://img.icons8.com/emoji/64/000000/plus-emoji.png"/>
                </Col>
                <Col xs={3} md ={12}>
                    <img className="icons" src="https://img.icons8.com/pastel-glyph/64/000000/graph--v2.png"/>
                </Col>
                <Col xs={3} md ={12}>
                    <img className="icons" src="https://img.icons8.com/pastel-glyph/64/000000/search--v2.png"/>
                </Col>
                <Col xs={3} md ={12}>
                    <img className="icons" src="https://img.icons8.com/fluent/64/000000/apps-tab.png"/>   
                </Col>
                </Row>
            </Col>
            <Col className="billForm" xs={11} md ={9}>
            <h3 className="billTitle">New Bill</h3>
            <Form >
                <Row className="mainForm">
                    <Col md={4}>
                        <Form.Group className="mb-3">
                            <Form.Label className="labelCss">Customer Name</Form.Label>
                            <Form.Control className="inputCss" type="text" placeholder="Please enter your name"  />
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group className="mb-3" >
                            <Form.Label className="labelCss">Customer Points</Form.Label>
                            <Form.Control className="inputCss" type="text" placeholder="Please enter your name" />
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group className="mb-3" >
                            <Form.Label className="labelCss">Phone Number</Form.Label>
                            <Form.Control className="inputCss" type="text" placeholder="Enter your phone number" />
                        </Form.Group>
                    </Col>
                    <Col md={4}>    
                        <Form.Group className="mb-3" >
                            <Form.Label className="labelCss">Search Items</Form.Label>
                            <Form.Control className="inputCss" type="text" placeholder="Search here" />
                        </Form.Group>
                    </Col>
                    <Col md={4}>

                    </Col>
                    <Col md={4}>
                        <Row className="billRow">
                        <Col xs={6} md={6}>
                            <Form.Group className="mb-3" >
                                <Form.Label className="labelCss">Coupon code</Form.Label>
                                <Form.Control className="inputCss" type="text" />
                            </Form.Group>
                        </Col>
                        <Col xs={6} md={6}>
                        <Form.Group className="mb-3" >
                            <Form.Label className="labelCss">Discount (%)</Form.Label>
                            <Form.Control className="inputCss" type="text" readOnly />
                        </Form.Group>
                        </Col>
                        </Row>
                    </Col>
                </Row>
            
            <Table responsive="sm" hover>
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Unit</th>
                        <th>Quantity</th>
                        <th>Rate</th>
                        <th>Discount</th>
                        <th>Additional Discount</th>
                        <th>Best Price</th>
                    </tr>
                </thead>
                <tbody>               
                    <Data />
                    <Data />
                    <Data />
                    <Data />
                    <Data />
                </tbody>
            </Table>
            <Row>
            <Col md={3}>
            <button type="submit" className="darkButton">Submit</button>
            </Col>
            <Col md={3}>
            <button className="billlightButton">Reset</button>
            </Col>
            </Row>
            </Form>
            </Col>
        </Row>
    </div>
}
export default Bill;