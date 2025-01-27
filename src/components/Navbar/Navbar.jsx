import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = ({sidebar, setSidebar}) => {
  return (
    <nav className="absolute top-0 left-0 w-full pt-10 text-white z-40">
        <div className="container">
            <div className="flex justify-between items-center">
                {/* LOGO SECTION */}
                <motion.h1
                initial={{ opacity:0, y: -100}}
                animate={{ opacity: 1, y:0}}
                transition={{ 
                    type: "spring",
                    stiffness: "100",
                    damping: 10,
                    delay: 0.2,
                }}
                 className="text-4xl font-semibold ml-25 uppercase"> 
                    <span className="text-yellow-500">CODERS</span> Coffee 
                </motion.h1>
                {/* HAMBURGER MENU */}

                <motion.div
                initial={{ opacity:0, y: -100}}
                animate={{ opacity: 1, y:0}}
                transition={{ 
                    type: "spring",
                    stiffness: "100",
                    damping: 10,
                    delay: 1.2,
                }}
                onClick={() => setSidebar(!sidebar)}
                >

                    <GiHamburgerMenu className="text-3xl cursor-pointer"/>
                </motion.div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
