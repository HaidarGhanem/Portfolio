import './Title.css'

const Title = ({title}) => {
  return (
    <div className="title__container t-black">
        <h2 className='fw-bold'>{title}</h2>
        <div className='title__border '></div>
    </div>
  )
}

export default Title