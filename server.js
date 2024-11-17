const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3001;

// Root endpoint
app.get('/', (req, res) => {
    res.send('Welcome to the API! Use /test, /upload-disease, or /get-disease/:hash for specific features.');
});

// Test endpoint
app.get('/test', (req, res) => {
    res.json({ message: 'API is working!' });
});

// Upload JSON to IPFS via Pinata
app.post('/upload-disease', async (req, res) => {
    const { name, description, symptoms } = req.body;

    const metadata = {
        name,
        description,
        symptoms,
    };

    try {
        const response = await axios.post(
            'https://api.pinata.cloud/pinning/pinJSONToIPFS',
            metadata,
            {
                headers: {
                    pinata_api_key: process.env.PINATA_API_KEY,
                    pinata_secret_api_key: process.env.PINATA_SECRET_API_KEY,
                },
            }
        );

        res.json({
            success: true,
            ipfsHash: response.data.IpfsHash,
        });
    } catch (error) {
        console.error('Error uploading to IPFS:', error);
        res.status(500).json({ error: 'Failed to upload to IPFS' });
    }
});

// Retrieve JSON data from IPFS via Pinata gateway
app.get('/get-disease/:hash', async (req, res) => {
    const ipfsHash = req.params.hash;

    try {
        const response = await axios.get(`https://gateway.pinata.cloud/ipfs/${ipfsHash}`);
        res.json(response.data);
    } catch (error) {
        console.error('Error retrieving from IPFS:', error);
        res.status(500).json({ error: 'Failed to retrieve data from IPFS' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
