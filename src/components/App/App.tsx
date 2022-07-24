import { Container, Col, Row } from 'reactstrap';
import styles from './App.module.scss'

export const App = () => <div>
    <Container className={styles._}>
        <Row>
            <Col>
                Тут будет расписание
            </Col>
        </Row>
    </Container>
</div>
