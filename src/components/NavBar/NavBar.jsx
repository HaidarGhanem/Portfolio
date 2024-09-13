import './Navbar.css'
import {Container , Navbar , Nav } from 'react-bootstrap'

const NavBar = ( { navbarInfo } ) => {
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
    <div className='position-fixed w-100 z-3'>
            <Navbar expand="lg" className="b-primary">
                <Container fluid className='navbar__items justify-content-around mt-2 '>
                    <Navbar.Brand href="#" className='fw-bold w-text'>{ navbarInfo.brand } </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" className='navbar__toggle' />
                    <Navbar.Collapse id="navbarScroll" className='flex-grow-0'>
                    <Nav
                        className="gap-1 text-center"
                        style={{ maxHeight: '300px' }}
                    >
                        {
                            navbarInfo.links.map((element , index)=>{
                                return (
                                    <Nav.Link className='fw-bold w-text' onClick={() => scrollToSection(`${element.href}`)} key={ index }> { element.text } </Nav.Link>
                                )
                            })
                        }
                        
                    </Nav>
                    
                    </Navbar.Collapse>
                </Container>
        </Navbar>
    </div>
  )
}

export default NavBar