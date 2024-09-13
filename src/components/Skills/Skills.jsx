import './Skills.css'
import Title from '../Title/Title'

const Skills = ({skillsInfo}) => {

  return (
    <div className='skills__container'>
        <Title title="My Skills" />
        
        <div className="skills__content d-flex justify-content-center align-items-start p-5 flex-wrap">
          
          {
            skillsInfo.map((element , index)=>{
              return (
                    <div key={index} className="skill__card d-flex flex-column">
                        <h4 className='text-white'>{element.name}</h4>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width : `${element.score}` }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                        </div>
                    </div>
              )
            })
          }
            
        </div>
    </div>
  )
}

export default Skills