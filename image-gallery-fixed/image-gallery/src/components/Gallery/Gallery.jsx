import { useState, useEffect } from "react";
import { getImages } from "../../services/imageService";
import ImageCard from "../ImageCard/ImageCard";
import ImageModal from "../ImageModal/ImageModal";
import Loader from "../Loader/Loader";
import "./Gallery.css";

const Gallery = ({ searchTerm }) => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchImages = async () => {
            setLoading(true);
            setError("");

            try {
                const data = await getImages(searchTerm);
                setImages(data);
            } catch (error) {
                console.error(error);
                setError(error.message || "Failed to load images.");
            } finally {
                setLoading(false);
            }
        };

        fetchImages();
    }, [searchTerm]);

    const handleRetry = async () => {
        setLoading(true);
        setError("");

        try {
            const data = await getImages(searchTerm);
            setImages(data);
        } catch (error) {
            console.error(error);
            setError(error.message || "Failed to load images.");
        } finally {
            setLoading(false);
        }
    };

    const handleOpenModal = (image) => {
        setSelectedImage(image);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    return (
        <section className="gallery-section" id="gallery">
            <div className="container">
                <h2 className="gallery-title">
                    {searchTerm} Images
                </h2>

                {loading && <Loader />}

                {!loading && error && (
                    <div className="error-box">
                        <h2>{error}</h2>

                        <button
                            className="retry-btn"
                            onClick={handleRetry}
                        >
                            Retry
                        </button>
                    </div>
                )}

                {!loading && !error && (
                    <div className="gallery-grid">
                        {images.length > 0 ? (
                            images.map((image) => (
                                <ImageCard
                                    key={image.id}
                                    image={image}
                                    onView={handleOpenModal}
                                />
                            ))
                        ) : (
                            <h2>No Images Found</h2>
                        )}
                    </div>
                )}
            </div>

            <ImageModal
                image={selectedImage}
                onClose={handleCloseModal}
            />
        </section>
    );
};

export default Gallery;