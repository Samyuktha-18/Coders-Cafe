import {
    FaFacebook,
    FaGoogle,
    FaInstagram,
    FaPhone, 
    FaTelegram
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import CredidCards from "../../assets/website/credit-cards.webp";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 pt-12 pb-8  text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ml-20">
            {/* company details section */}
            <motion.div 
            initial={{ opacity:0, y: 100}}
            animate={{ opacity: 1, y:0}}
            viewport={{once:true, amount: 0.5}}
            transition={{ 
                delay: 0.9,
                duration:0.6
            }}
             className="space-y-6 ">
            <h1 className="text-3xl font-bold uppercase">
                Coders Coffee
            </h1>

            <p className=" text-sm max-w-[300px]">
            Coders Coffee – Where ideas brew and developers grow. Sip, code, and connect with like-minded developers. 
            Fuel your passion for coding, one cup at a time !
             Join our community and fuel your coding journey !
            </p>
            <div>
                <p className="flex items-center gap-2">
                <FaPhone/>
                    +1 (123) 456-7890
                </p>
                
                <p className="flex items-center gap-2 mt-2">
                    {" "}
                    <FaMapLocation/>
                     Vizag, Andhra Pradesh
                </p>
            </div>
            </motion.div>
            
            {/* FOOTER LINKS SECTION */}

            <motion.div
             initial={{ opacity:0, y: 100}}
             animate={{ opacity: 1, y:0}}
             viewport={{once:true, amount: 0.5}}
             transition={{ 
                 delay: 0.9,
                 duration:0.6
             }}
             className="space-y-6">
                <h1 className="text-3xl font-bold">
                    Quick Links
                </h1>

                <motion.div
                 initial={{ opacity:0, y: 100}}
                 animate={{ opacity: 1, y:0}}
                 viewport={{once:true, amount: 0.5}}
                 transition={{ 
                     delay: 0.9,
                     duration:0.6
                 }}
                 className="grid grid-cols-1 sm:grid-cols-2 gap-3 cursor-pointer">  
                {/* First Column section */}
                <div>
                <ul className="space-y-2 ">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Privacy Policy</li>
                </ul>
                </div>
                
                {/* Second Column section */}
                <div>
                <ul className="space-y-2 ">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Privacy Policy</li>
                </ul>
                </div>
                
                </motion.div>
            </motion.div>
            
            {/* SOCIAL LINKS SECTION */}
            <motion.div
             initial={{ opacity:0, y: 100}}
             animate={{ opacity: 1, y:0}}
             viewport={{once:true, amount: 0.5}}
             transition={{ 
                 delay: 0.9,
                 duration:0.6
             }}
             className="space-y-6">
                <h1 className="text-3xl font-bold">
                    Follow Us
                </h1>
                <div className="flex items-center gap-3 cursor-pointer">
                    <FaFacebook className="text-3xl hover:scale-105 duration-300"/>
                    <FaInstagram  className="text-3xl hover:scale-105 duration-300"/>
                    <FaTelegram  className="text-3xl hover:scale-105 duration-300"/>
                    <FaGoogle  className="text-3xl hover:scale-105 duration-300"/>
                </div>

                <div>
                    <h1 className="text-xl font-semibold mb-2">Payments Method</h1>
                    <img src={CredidCards} alt="" className="w-[80%]" />
                </div>
            </motion.div>
        </div>

        {/* COPYRIGHT SECTION */}
        <motion.p 
         initial={{ opacity:0, y: 100}}
         animate={{ opacity: 1, y:0}}
         viewport={{once:true, amount: 0.5}}
         transition={{ 
             delay: 0.9,
             duration:0.6
         }} className="text-white text-center mt-8 pt-8 border-t-2 ml-15">
            Copyright @ 2025; Coders Coffee Cafe. All rights are reserved
        </motion.p>
      </div>
    </div>
  )
}

export default Footer
