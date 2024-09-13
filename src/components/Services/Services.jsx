import Title from '../Title/Title'
import './Services.css'


const Services = ({servicesInfo}) => {
  return (
    <div className="services__container">
        <Title title="My Services" />

        <div className='service__box d-flex justify-content-center align-items-start  flex-wrap' >
            
            {
                servicesInfo.map((element , index)=>{
                    return (
                        <div key={index} className="service__card shadow d-flex align-items-center flex-column p-2">
                            <div className='hexagon position-relative'>
                                &#x2B22;
                                <div className='hexagon__content position-absolute'>{element.icon}</div>
                            </div>
                            <h5 className='fw-bold'>{element.title}</h5>
                            <div className='service__border'></div>
                            <p className='text-center mt-4'>{element.text}</p>
                        </div>
                    )
                })
            }

        </div>

        
    </div>
  )
}

export default Services