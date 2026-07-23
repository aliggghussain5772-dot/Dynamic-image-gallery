import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import "./Hero.css";

const Hero = () => {
    const scrollToGallery = () => {
        const gallery = document.getElementById("gallery");

        if (gallery) {
            gallery.scrollIntoView({
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="hero">

            <div className="overlay"></div>

            <div className="container hero-content">

                <motion.h1
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Discover Beautiful Images
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: .3 }}
                >
                    Search and explore thousands of high-quality images from around
                    the world using the Pixabay API.
                </motion.p>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: .95 }}
                    onClick={scrollToGallery}
                >
                    Explore Gallery
                    <FaArrowDown />
                </motion.button>

            </div>

        </section>
    );
};

export default Hero;