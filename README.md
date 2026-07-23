# Dynamic image gallery 



Dynamic image gallery is a responsive React application that allows users to search, view, and download high-quality images powered by the Pixabay API.

## 🚀 Features

* **Real-Time Image Search:** Find high-quality images instantly by keyword.
* **Interactive Gallery:** Clean and responsive grid layout with smooth animations.
* **Detailed Previews:** View images in an interactive modal.
* **Download Images:** Download images directly from the gallery.
* **Responsive Design:** Optimized for mobile, tablet, and desktop screens.

## 🛠️ Tech Stack

* **Frontend:** React.js, HTML5, CSS3
* **HTTP Client:** Axios
* **API:** Pixabay API
* **Animations:** Framer Motion
* **Icons:** React Icons

## 📦 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/aliggghussain5772-dot/Dynamic-image-gallery
cd pixelvista
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure API Key

Create a `.env` file in the root directory:

```env
VITE_PIXABAY_API_KEY=YOUR_PIXABAY_API_KEY
```

Make sure your API key is used in `imageService.js`:

```javascript
const API_KEY = import.meta.env.VITE_PIXABAY_API_KEY;
```

### 4. Run the Development Server

```bash
npm run dev
```

Open the application at:

```text
http://localhost:5173
```

## 📂 Project Structure

```text
src/
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── Gallery/
│   └── Footer/
├── services/
│   └── imageService.js
├── App.jsx
└── main.jsx
```

## 📄 License

This project is created for educational and portfolio purposes.
