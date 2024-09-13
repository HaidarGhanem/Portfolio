import Title from '../Title/Title'
import {Form} from 'react-bootstrap'
import './Contact.css'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = ({contactInfo}) => {
  return (
    <div className="contact__container p-5 shadow">
        <Title title="Contact" />
        <div className="contact__box flex-wrap d-flex justify-content-center align-items-center p-5">
          <Form className='contact__form'>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label className='fw-bold'>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label className='fw-bold'>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label className='fw-bold'>Message</Form.Label>
              <Form.Control className='message__field' type="text" placeholder="Message" />
            </Form.Group>
            <button className='btn_2 w-text contact__btn'>Send Message</button>
          </Form>
          <div className="contact__info d-flex flex-column align-items-start gap-5">
            <div className='d-flex gap-4 align-items-center'>
              <h2><FaLocationDot /></h2>
              <div className='d-flex flex-column'>
                <h4 className='fw-bold w-text'>Location</h4>
                <h5>{contactInfo.location}</h5>
              </div>
            </div>

            <div className='d-flex gap-4 align-items-center'>
              <h2><FaPhoneAlt /></h2>
              <div className='d-flex flex-column'>
                <h4 className='fw-bold w-text'>Phone Number</h4>
                <h5>{contactInfo.phone}</h5>
              </div>
            </div>

            <div className='d-flex gap-4 align-items-center'>
              <h2><SiGmail /></h2>
              <div className='d-flex flex-column'>
                <h4 className='fw-bold w-text'>Gmail</h4>
                <h5>{contactInfo.gmail}</h5>
              </div>
            </div>

          </div>
        </div>
    </div>
  )
}

export default Contact