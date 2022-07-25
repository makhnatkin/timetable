import { useGate } from 'effector-react';
import { Container, Col, Row, Input } from 'reactstrap';
import cc from 'classcat';

import { start, toggleTheme } from '../../model';

import styles from './App.module.scss';

export const App = () => {
    useGate(start);

    return (
        <Container className={cc([styles._, 'container-fluid'])}>
            <Row>
                <Col>
                    <div className="form-check form-switch">
                        <Input onChange={toggleTheme} type="switch" />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Input type="date" />
                </Col>
            </Row>
            <Row>
                <Col>
                </Col>
            </Row>
            <Row>
                <Col>
                </Col>
            </Row>
        </Container>
    )
}
