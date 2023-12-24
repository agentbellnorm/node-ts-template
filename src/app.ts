/**
 * The following lines intialize dotenv,
 * so that env vars from the .env file are present in process.env
 */
import * as dotenv from 'dotenv';
import * as express from 'express';
import { createRootLogger } from './logger';
const cors = require('cors');
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;

const logger = createRootLogger('template-backend');

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.listen(port, () => {
  logger.info(`Example app listening on port ${port}`);
});
