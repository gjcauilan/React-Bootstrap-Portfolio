import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ContactMe() {
    const formStyling = {
        width: '30vw',
        margin: '0 auto',
    }

    const buttonStyling = {
        display: 'block',
        margin: '0 auto',
    }
  
    return (
        <div className="p-5 text-light bg-dark">
            <h3 className="text-center mb-2">Contact Me</h3>
            <p className="text-center mb-5">If you have questions, comments, or suggestions, feel free to contact me below.</p>
            <Form style={formStyling} className="justify-content-center">
                <Form.Control
                    type="email"
                    placeholder="Your Email Address"
                    className="mb-2"
                    aria-controls="Email"
                />
                <Form.Control
                    as="textarea"
                    placeholder="Your Name"
                    className="mb-2"
                    rows={1}
                />
                <Form.Control
                    as="textarea"
                    placeholder="Your Message"
                    className="mb-5"
                    rows={5}
                />
                <Button variant="outline-info" style={buttonStyling}>Submit</Button>
            </Form>
        </div>
    )
}

export default ContactMe;