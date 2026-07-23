import { motion } from "framer-motion";
import {
    FaHeart,
    FaEye,
    FaDownload,
    FaExpand,
    FaUser
} from "react-icons/fa";
import "./ImageCard.css";

const ImageCard = ({ image, onView }) => {

    const downloadImage = () => {
        window.open(image.largeImageURL, "_blank");
    };

    return (
        <motion.div
            className="image-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.4 }}
        >

            <div className="image-wrapper">

                <img
                    src={image.webformatURL}
                    alt={image.tags}
                />

            </div>

            <div className="image-content">

                <h3>{image.tags}</h3>

                <p className="photographer">
                    <FaUser />
                    {image.user}
                </p>

                <div className="stats">

          <span>
            <FaHeart />
              {image.likes}
          </span>

                    <span>
            <FaEye />
                        {image.views}
          </span>

                    <span>
            <FaDownload />
                        {image.downloads}
          </span>

                </div>

                <div className="info">

                    <p>
                        <strong>Resolution:</strong>
                        {" "}
                        {image.imageWidth} × {image.imageHeight}
                    </p>

                    <p>
                        <strong>Type:</strong>
                        {" "}
                        {image.type}
                    </p>

                </div>

                <div className="card-buttons">

                    <button
                        className="view-btn"
                        onClick={() => onView(image)}
                    >
                        <FaExpand />
                        View
                    </button>

                    <button
                        className="download-btn"
                        onClick={downloadImage}
                    >
                        <FaDownload />
                        Download
                    </button>

                </div>

            </div>

        </motion.div>
    );
};

export default ImageCard;