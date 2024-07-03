import express from 'express';
import cors from 'cors'
import {scrapperFromFbUrl} from './module/scrapperFromFbUrl.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port = 6969;

app.post("/download", (req,res) => {
    scrapperFromFbUrl(req.body.link).then(response => {
        res.send({link_download: response[req.body.video_type]});
    }
    ).catch(error => res.send(error))
})

app.listen(port, () => {
    console.log(`Running app with port: ${port}`);
})