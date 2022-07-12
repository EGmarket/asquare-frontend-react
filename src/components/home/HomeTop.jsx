import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import MegaMenu from "./MegaMenu";
import Slider from "./Slider";

class HomeTop extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                      <Col lg={3} md={3} sm={12}>
                          <MegaMenu/>
                      </Col>
                        <Col lg={9} md={9} sm={12}>
                            <Slider/>
                        </Col>
                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default HomeTop;