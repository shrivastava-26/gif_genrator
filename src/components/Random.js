import React, { useState } from 'react';
import axios from 'axios';

const GifGenerator = () => {
    const [gifUrl, setGifUrl] = useState('');
    const apiKey = 'W2lvb3JNbK09meI7RywjT4f9oNWh4III'; // 

    const fetchRandomGif = async () => {
        try {
            const response = await axios.get(
                `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
            );
            const { data } = response.data;
            setGifUrl(data.images.original.url);
        } catch (error) {
            console.error('Error fetching the GIF:', error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-b from-green-400 to-green-800 text-white">
            <h1 className="text-4xl font-bold mb-8">Random GIF Generator</h1>
            <button
                onClick={fetchRandomGif}
                className="bg-white text-black px-6 py-2 rounded-full shadow-lg transition-transform transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-600">
                Get Random GIF
            </button>
            {gifUrl && (
                <div className="mt-8">
                    <img
                        src={gifUrl}
                        alt="Random GIF"
                        className="rounded-lg shadow-lg border-4 border-white w-full max-w-md"
                    />
                </div>
            )}
        </div>
    );

};

export default GifGenerator;
