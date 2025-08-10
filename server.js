const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
    origin: 'http://127.0.0.1:5500' // Allow requests from your local frontend
}));
app.use(bodyParser.json());

// Serve static files (optional for portfolio hosting)
app.use(express.static(path.join(__dirname)));

// Endpoint to send email
app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'cdladhe@gmail.com', // Your Gmail
            pass: 'othurjartjnepghs'   // Your App Password
        }
    });

    const mailOptions = {
        from: 'cdladhe@gmail.com', // Your Gmail
        to: 'cdladhe@gmail.com',
        subject: `Message from ${name}`,
        text: `You have received a new message from ${name} (${email}):\n\n${message}`,
    };


    try {
        await transporter.sendMail(mailOptions);
        console.log(`✅ Email sent successfully from ${email}`);
        res.status(200).send('Email sent successfully!');
    } catch (error) {
        console.error('❌ Error sending email:', error);
        res.status(500).send('Error sending email.');
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
