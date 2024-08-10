import React from 'react'
import './assets/css/style.css'
import { motion, useScroll } from 'framer-motion'

const App = () => {
  const parent = {
    hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.25 } }
  }
  
  const child = {
    hidden: { opacity: 0 }, show: { opacity: 1 }
  }

  const { scrollYProgress } = useScroll();


  return (
    <>
      <motion.div className="position-fixed w-100" style={{ height: '5px',backgroundColor: 'white', scaleX: scrollYProgress, transformOrigin: 'left', zIndex: 9999}}></motion.div>
      <div class="container py-5">
        <motion.div variants={parent} initial="hidden" animate="show">
          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
            <div className="col">
              <motion.div variants={child} className="bg-primary p-5 rounded d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
                <motion.div className="rounded bg-info" style={{ height: '150px', width: '150px' }} initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25, ease: 'easeIn' }}></motion.div>
                <motion.div className="rounded-circle bg-info" style={{ height: '150px', width: '150px' }} initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5, ease: 'easeIn' }}></motion.div>
              </motion.div>
            </div>
            <div className="col">
              <motion.div variants={child} className="bg-primary p-5 rounded d-flex justify-content-center align-items-center gap-3">
                <motion.div className="bg-info" style={{ height: '150px', width: '150px', border: 'none' }} initial={{ scale: 0 }} animate={{ scale: [0, 1.2, 1.2, 0], rotate: [0, 90, 90, 0], borderRadius: ["10%", "10%", "50%", "10%"] }} transition={{ duration: 5, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}></motion.div>
              </motion.div>
            </div>
            <div className="col">
              <motion.div variants={child} className="bg-primary p-5 rounded d-flex justify-content-center align-items-center gap-3">
                <motion.button whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1, backgroundColor: '#FFFFFF', color: 'black' }} className='p-3' style={{ backgroundColor: '#228B22', border: 'none', color: 'white' }}>Click Me!</motion.button>
              </motion.div>
            </div>
            <div className="col">
              <motion.div variants={child} className="bg-primary p-5 rounded d-flex justify-content-center align-items-center gap-3">
                <motion.div className="bg-danger rounded d-flex justify-content-center align-items-center" style={{ height: '150px', width: '150px' }} drag dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }} dragTransition={{ bounceStiffness: 600, bounceDamping: 100 }}>Drag Me</motion.div>
              </motion.div>
            </div>
            <div className="col">
            <motion.div variants={child} className="bg-primary p-5 rounded d-flex justify-content-center align-items-center gap-3">
              <motion.div className="div" style={{ height: '150px', width: '150px', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <motion.div className='w-100 h-100' style={{ transformOrigin: 'bottom', scaleY: scrollYProgress, backgroundColor: 'rgba(255, 255, 255, 0.5)'}}/>
              </motion.div>
            </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default App