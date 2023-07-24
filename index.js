import express from 'express';
import {fetchDataFromAPI} from "./services/dataService.js";

const app = express();


const port = 3020;

app.get(`/api/data/:eventId`, async (request, response) => {
    try {
        const { eventId } = request.params;
        console.log('eventId', eventId)
        const tickets = await fetchDataFromAPI(eventId);
        return response.json(tickets);
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});