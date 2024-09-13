import { Button } from 'react-bootstrap'
import './Hero.css'



const Hero = ({heroInfo}) => {
  const scrollToSection = (sectionClass) => {
    const section = document.querySelector(`.${sectionClass}`);
    if (section) {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY; 
        const startY = window.scrollY; 
        const distance = sectionTop - startY; 
        const duration = 800; 
        const startTime = performance.now(); 
        
        const animateScroll = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1); 

            const easing = progress * (2 - progress);
            
            window.scrollTo(0, startY + distance * easing);
            
            if (elapsed < duration) {
                requestAnimationFrame(animateScroll);
            }
        };

        requestAnimationFrame(animateScroll);
    }
};


  
  return (
    <div className="hero__container shadow d-flex justify-content-around flex-wrap align-items-end">
        <div className='hero__content d-flex align-items-start flex-column'>
            <h3 className='fw-bold n-text'>{heroInfo.welcome}</h3>
            <h1 className='fw-bold n-text'>{heroInfo.name}</h1>
            <h4 className='mb-3 n-text typewriter'>{heroInfo.role}</h4>
            <div className='d-flex gap-3'>
                <Button className='btn' onClick={()=>scrollToSection('contact__container')}>{heroInfo.hireBtn}</Button>
                <Button className='btn_2'>{heroInfo.cvBtn}</Button>
            </div>
            <div className='d-flex gap-3'>
                {
                  heroInfo.links.map((element)=>{
                    return (
                      <a href={element.url} className='hero__links'><div className='icon__box d-flex justify-content-center align-items-center mt-3'> {element.icon} </div></a>
                    )
                  })
                }
            </div>
        </div>
        <img src={heroInfo.character}  alt={heroInfo.alt} />
    </div>
  )
}

export default Hero