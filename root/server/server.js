import express from "express";
import path from "path";
import {fileURLToPath} from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// import dotenv from "dotenv";
// dotenv.config();
const PORT =  5000;


// var ImgsPath = path.join(`${__dirname}`, "images");

app.use(express.static(`${__dirname}/images`));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('This is it');
});

app.get('/images', async (req, res) => {
    res.json({
        sgsExpertise: [
            {
                id: 'ADAPTATION',
                img: `./sgs1.jpg`
            },
            {
                id: 'ARTWORK AND PREPRESS',
                img: `./sgs2.jpg`
            },
            {
                id: 'BRAND DESIGN',
                img: `./sgs3.jpg`
            },
            {
                id: 'CGI',
                img: `./sgs4.jpg`
            },
            {
                id: 'CONSULTING',
                img: `./sgs5.jpg`
            },
            {
                id: 'ENGINEERING',
                img: `./sgs6.jpg`
            },
            {
                id: 'IMAGE CARRIERS',
                img: `./sgs7.jpg`
            },
            {
                id: 'INSIGHTS',
                img: `./sgs8.jpg`
            },
            {
                id: 'MARKETING COMMUNICATIONS',
                img: `./sgs9.jpg`
            },
            {
                id: 'MOCKUPS AND SALES SAMPLES',
                img: `./sgs10.jpg`
            },
            {
                id: 'PHOTOGRAPHY',
                img: `./sgs11.jpg`
            },
            {
                id: 'POP',
                img: `./sgs12.jpg`
            },
            {
                id: 'PRINT SERVICES',
                img: `./sgs13.jpg`
            },
            {
                id: 'STRATEGY',
                img: `./sgs14.jpg`
            },
            {
                id: 'STRUCTURE',
                img: `./sgs15.jpg`
            }
            // {
            //     id: 'WORKFLOW AND CONTENT TECHNOLOGY',
            //     img: `./sgs16.jpg`
            // }
        ]
    });
});

app.listen(PORT, (req, res) => {
    console.log("My server running");
});