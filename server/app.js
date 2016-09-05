import express from 'express';
import handleRender from './render';

const app = express();

app.use(express.static('./public'));
app.use(handleRender);

export default app;
