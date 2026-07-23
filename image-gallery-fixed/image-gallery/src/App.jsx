import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";

function App() {
    const [searchTerm, setSearchTerm] = useState("Nature");

    return (
        <div className="App">
            <Navbar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />

            <Hero />

            <Gallery searchTerm={searchTerm} />

            <Footer />
        </div>
    );
}

export default App;