import { motion, AnimatePresence } from "framer-motion";
import {
    FaTimes,
    FaHeart,
    FaEye,
    FaDownload,
    FaUser,
} from "react-icons/fa";
import "./ImageModal.css";

const ImageModal = ({ image, onClose }) => {
    if (!image) return null;

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains("modal-overlay")) {
            onClose();
        }
    };

    return (
        <AnimatePresence>
            <motion.div
                className="modal-overlay"
                onClick={handleOverlayClick}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <motion.div
                    className="modal-content"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <button className="close-btn" onClick={onClose}>
                        <FaTimes />
                    </button>

                    <img
                        src={image.largeImageURL}
                        alt={image.tags}
                        className="modal-image"
                    />

                    <div className="modal-details">
                        <h2>{image.tags}</h2>

                        <p>
                            <FaUser /> <strong>Photographer:</strong> {image.user}
                        </p>

                        <div className="modal-stats">
              <span>
                <FaHeart /> {image.likes}
              </span>

                            <span>
                <FaEye /> {image.views}
              </span>

                            <span>
                <FaDownload /> {image.downloads}
              </span>
                        </div>

                        <p>
                            <strong>Resolution:</strong>{" "}
                            {image.imageWidth} × {image.imageHeight}
                        </p>

                        <p>
                            <strong>Type:</strong> {image.type}
                        </p>

                        <a
                            href={image.largeImageURL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="download-link"
                        >
                            Download Original Image
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ImageModal;