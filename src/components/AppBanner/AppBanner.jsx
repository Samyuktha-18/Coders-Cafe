import bannerImg from '../../assets/coffee-cover.jpg';
import AppStoreImg from "../../assets/website/app_store.png";
import PlayStoreImg from "../../assets/website/play_store.png";
import { motion } from "framer-motion";

const BannerStyle = {
    backgroundImage: `url(${bannerImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
}

const AppBanner = () => {
  return (
    <div className="container my-14">
      <div style={BannerStyle} className="sm:min-h-[400px] sm:flex
      sm:justify-end sm:items-center rounded-xl ml-10">
        <div>
            <div className="space-y-6 max-w-xl mx-auto">
                <motion.h1
                initial={{ opacity:0, scale: 0.5 }} 
                whileInView={{ opacity: 1, scale: 1}}
                transition={{
                    type:"spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 1,
                }}
     
                className="text-2xl text-center sm:text-4xl font-semibold">
                    Download the App
                </motion.h1>

                <motion.p 
                 initial={{ opacity:0, y: 100 }} 
                 whileInView={{ opacity: 1, y: 1}}
                 transition={{
                     type:"spring",
                     stiffness: 100,
                     damping: 10,
                     delay: 0.3,
                 }}
     
                 className="text-center sm:px-20">
                    Join Coders Coffee Cafe – a hub for developers to learn,
                     code, and connect!
                </motion.p>

                {/* IMAGES LINK */}
                 <motion.div 
                 initial={{ opacity:0, y: 100 }} 
                 whileInView={{ opacity: 1, y: 0}}
                 transition={{
                     type:"spring",
                     stiffness: 100,
                     damping: 10,
                     delay: 0.3,
                 }}
                  className="flex justify-center items-center gap-4">
                    <a href="#" 
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]">
                        <motion.img
                        initial={{ opacity:0, y: 100 }} 
                        whileInView={{ opacity: 1, y: 1}}
                        transition={{
                            type:"spring",
                            stiffness: 100,
                            damping: 10,
                            delay: 0.3,
                        }}
                    src={AppStoreImg} alt="" />
                    </a>

                    <a href="#"
                   className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]">
                        <motion.img initial={{ opacity:0, y: 100 }} 
                 whileInView={{ opacity: 1, y: 1}}
                 transition={{
                     type:"spring",
                     stiffness: 100,
                     damping: 10,
                     delay: 0.4,
                 }}  
               src={PlayStoreImg} alt="" />
                    </a> 
                 </motion.div>
            </div>

        </div>


      </div>
    </div>
  )
}

export default AppBanner
