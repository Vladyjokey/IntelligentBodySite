const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors')

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors())

app.post('/saveMessage', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Received message:', req.body);
    const messageData = `${new Date().toISOString()} - Name: ${name}, Email: ${email}, Message: ${message}\n`;
    fs.appendFile('messages.txt', messageData, (err) => {
        if (err) {
            console.error('Error saving message:', err);
            return res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
        res.status(200).json({ success: true, message: 'Message saved successfully' });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});