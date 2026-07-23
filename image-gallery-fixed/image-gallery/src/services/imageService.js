import axios from "axios";

const API_KEY = "56680832-67c4b7f4393e39c3ff54874ab";

const BASE_URL = "https://pixabay.com/api/";

export const getImages = async (query = "nature") => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                key: API_KEY,
                q: query,
                image_type: "photo",
                per_page: 24,
                safesearch: true,
            },
        });

        return response.data.hits;
    } catch (error) {
        console.error("Error fetching images:", error);
        return [];
    }
};