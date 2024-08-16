import { BrowserRouter } from "react-router-dom";
import herobg from "./assets/herobg.png";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-[#010914]'>
        <div className=' bg-cover bg-no-repeat bg-center ' style={{backgroundImage: `url(${herobg})`, backgroundColor:"#010914"}}>
          <Navbar />
          <Hero />
        </div>
        <About/>
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;