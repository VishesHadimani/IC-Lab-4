import React, {useState} from 'react';
import './App.css';
const App = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        'https://picsum.photos/200/300',
        'https://picsum.photos/300/300',
        'https://picsum.photos/200/200'
    ];

    const nextImage = () => {
        if (currentImage === images.length - 1) {
            setCurrentImage(0);
        } else {
            setCurrentImage(currentImage + 1);
        }
    };

    return (
        <div>
            <img src={images[currentImage]} alt="image" />
            <br></br><br></br>
            <button onClick={nextImage}>Next Image</button>
        </div>
    );
};

export default App;

