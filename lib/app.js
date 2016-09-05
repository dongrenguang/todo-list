import express from 'express';
import serverRendering from './rendering';

const app = express();

app.use(express.static('./public'));
app.use(serverRendering);

export default app;
