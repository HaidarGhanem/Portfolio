import Title from '../Title/Title';
import { Card } from 'react-bootstrap';
import './Coding.css';

const Coding = ({ codingInfo }) => {
  return (
    <div className='coding__container'>
      <Title title="Coding Projects" />
      <div className="d-flex justify-content-center align-items-center flex-wrap gap-5 ms-3 me-3">
        {
          codingInfo.map((element, index) => {
            const isEven = index % 2 === 0;

            return (
              <Card 
                className={`coding__cards text shadow ${isEven ? 'b-secondary' : ''}`} 
                key={index}>
                <Card.Header className={`fs-6 ${isEven ? 'o-text' : 'n-text b-primary top__one'}`}>
                  {element.icon} {element.tech}
                </Card.Header>
                <Card.Body>
                  <Card.Title className={`fw-bold fs-3 ${isEven ? 'w-text' : ''}`}>
                    {element.title}
                  </Card.Title>
                  <Card.Text className={isEven ? 'o-text' : ''}>
                    {element.desc}
                  </Card.Text>
                  <a href={element.url} className='btn'>Go To Github</a>
                </Card.Body>
              </Card>
            );
          })
        }
      </div>
    </div>
  );
};

export default Coding;