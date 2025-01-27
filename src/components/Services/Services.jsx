import { motion } from "framer-motion";
import Coffee1 from "../../assets/coffee/coffee1.png";
import Coffee2 from "../../assets/coffee/coffee1.png";
import Coffee3 from "../../assets/coffee/coffee3.png"


const servicesData = [
    {
        id: 1,
        image: Coffee1,
        title: "Black Coffee",
        subtitle: "Pure, bold, and invigorating"
    },

    {
        id: 2,
        image: Coffee3,
        title: "Hot Coffee",
        subtitle: "Warm, rich, and energizing with every sip"
    },

    {
        id: 3,
        image: Coffee2,
        title: "Cold Coffee",
        subtitle: "Chilled, creamy, and refreshing"
    }
]

const cardVarients = {
    hidden: { opacity: 0, y: 20},
    visible: {
        opacity: 1,
        y: 0,
        transition:{
            type: "spring",
            stiffness: 100,
            damping: 10,
            ease: "easeInOut",
        },
    },
};

const containerVarients = {
    hidden: { opacity: 1},
    visible: {
        opacity: 1,
        y: 0,
        transition:{
            delay: 0.6,
            staggerChildren: 0.4,
        },
    },
};

const Services = () => {
  return (
    <div className="container my-16 space-y-4">
      {/* Header Section */}

      <div className="text-center max-w-lg mx-auto space-y-2">
        
        <motion.h1 initial={{ opacity:0, y: 100}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{ 
                        type: "spring",
                        stiffness: "100",
                        damping: 10,
                        delay: 0.6,
                    }} className="text-3xl font-bold text-gray-900">
            Fresh and <span className="text-yellow-700">Tasty Coffees..</span> 
        </motion.h1>

        <motion.p initial={{ opacity:0, scale: 0.5}}
                      whileInView={{opacity: 1, scale: 1}}
                    animate={{ opacity: 1, scale: 1}}
                    transition={{ 
                        type: "spring",
                        stiffness: "100",
                        damping: 10,
                        delay: 0.8,
                    }}
                     className="text-sm opacity-50 ">
            Indulge in the rich aroma of freshly brewed coffee, crafted to perfection.
             Experience every sip bursting with bold flavors and unmatched freshness!
        </motion.p>
      </div>
     
      {/* Card Section */}

      <motion.div variants={containerVarients} initial="hidden"
      whileInView={"visible"}
      viewport={{amount: 0.8}}
       className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ml-10 mr-10">
        
        {servicesData.map((service) => (
            <motion.div 
            key={service.id}
            variants={cardVarients}
            className="text-center p-4 space-y-6"> 

                <img src={service.image} alt=""  
                className="img-shadow2 max-w-[200px] mx-auto hover:scale-110
                duration-300 cursor-pointer" />
                
                <div className="space-y-2">
                    <h1 className="text-2xl font-bold text-yellow-600">
                        {service.title}</h1>
                    <p className="text-gray-700">
                        {service.subtitle}</p>

                </div>
            </motion.div>
        ))}
      </motion.div>

    </div>


  )
}

export default Services
