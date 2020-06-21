import * as express from 'express';

import api from './api'

const server = express();
const port = 8080;

server.use(express.urlencoded({ extended: true }))
server.use(express.json({ limit: '1mb' }))

server.use('/api', api)

server.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
