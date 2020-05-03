import express = require('express');
import { FirebaseDatabase } from './data-layer/repository';

const functions = require('firebase-functions');
const bodyParser = require('body-parser');
const app = express();
const db: FirebaseDatabase = new FirebaseDatabase();


app.use(bodyParser.json());

// GET all functions
app.get('/functions', async (req: express.Request, res: express.Response) => {
    let dataCarrier: any[] = [];

    db.getAllFunctions(dataCarrier)
    .catch(error => res.status(500).json({message: "Error: " + error}))
    .then(() => res.status(200).json({"functions":dataCarrier}))
    .catch()
});

// GET all servants
app.get('/servants', async (req: express.Request, res: express.Response) => {
    let dataCarrier: any[] = [];

    db.getAllServants(dataCarrier)
    .catch(error => res.status(500).json({message: "Error: " + error}))
    .then(() => res.status(200).json({"servants":dataCarrier}))
    .catch()
});

// GET all keep data
app.get('/keep-data', async (req: express.Request, res: express.Response) => {
    let dataCarrier: any[] = [];

    db.getAllKeepData(dataCarrier)
    .catch(error => res.status(500).json({message: "Error: " + error}))
    .then(() => res.status(200).json({"keep-data":dataCarrier}))
    .catch()
});


const api = functions.https.onRequest(app)

module.exports = {
    api
};