const express = require('express');
const multer = require('multer');
const cors = require('cors');
const axios = require('axios');
const fs = require('fs');
require('dotenv').config();

const app = express();
const upload = multer({ dest: 'uploads/' }); // Temporary storage for files

app.use(cors());
app.use(express.json());

const PORT = 3001;

// Default route to handle root requests
app.get('/', (req, res) => {
    res.send('Welcome to the API! Use /test, /upload-disease, or /get-disease/:hash for specific features.');
});

// Test endpoint
app.get('/test', (req, res) => {
    res.json({ message: 'API is working!' });
});

// Upload endpoint: Handles both file and metadata
app.post('/upload-disease', upload.single('file'), async (req, res) => {
    try {
        // Extract file and metadata
        const file = req.file;
        const metadata = JSON.parse(req.body.metadata); // Metadata as JSON

        console.log('File:', file); // Debugging file info
        console.log('Metadata:', metadata); // Debugging metadata info

        // Pin the file to IPFS using Pinata
        const fileStream = fs.createReadStream(file.path);
        const formData = new FormData();
        formData.append('file', fileStream);

        const pinFileResponse = await axios.post(
            'https://api.pinata.cloud/pinning/pinFileToIPFS',
            formData,
            {
                headers: {
                    ...formData.getHeaders(),
                    pinata_api_key: process.env.PINATA_API_KEY,
                    pinata_secret_api_key: process.env.PINATA_SECRET_API_KEY,
                },
            }
        );

        // Pin the metadata to IPFS using Pinata
        const pinMetadataResponse = await axios.post(
            'https://api.pinata.cloud/pinning/pinJSONToIPFS',
            metadata,
            {
                headers: {
                    pinata_api_key: process.env.PINATA_API_KEY,
                    pinata_secret_api_key: process.env.PINATA_SECRET_API_KEY,
                },
            }
        );

        // Respond with IPFS hashes
        res.json({
            success: true,
            fileHash: pinFileResponse.data.IpfsHash,
            metadataHash: pinMetadataResponse.data.IpfsHash,
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to upload to IPFS' });
    }
});

// Retrieve data from IPFS via Pinata gateway
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
