
import React, { CSSProperties } from 'react';
import { Button, Container, Form, Row } from 'react-bootstrap';
import './styles.css';

interface PromptStyle {
    containerStyle: CSSProperties;
}


const Prompt = () => {
    return (
                <Form className='container mt-3 mb-3'>
                    <Row className="mb-3">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    </Row>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
    );
};

export default Prompt;