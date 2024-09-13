import Title from '../Title/Title'
import { Button } from 'react-bootstrap'
import './About.css'

const About = ({aboutInfo}) => {
  return (
    <div className="about__container">
        <Title title="About Me" />
        <div className='about__inside mt-5 d-flex justify-content-center flex-wrap'>
           
              <div className='about__box d-flex justify-content-center align-items-center'><img src={aboutInfo.img} alt={aboutInfo.alt} /></div>
            
              <div className='about__content d-flex flex-column gap-3 justify-content-start align-items-start'>
                <div>
                  <h2 className='fw-bold'>{aboutInfo.name}</h2>
                  <h5 className=''>{aboutInfo.role}</h5>
                </div>
                <div>
                  <p>
                    {aboutInfo.text} <span className='fw-bold'> {aboutInfo.fire} </span>
                  </p>
                  <div className='d-flex align-items-center gap-3'>
                    <Button className='btn'>{aboutInfo.cvBtn}</Button>
                    <Button className='btn_2'>{aboutInfo.contactBtn}</Button>
                  </div>
                </div>
              </div>

        </div>
    </div>
  )
}

export default About