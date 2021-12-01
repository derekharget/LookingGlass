require('dotenv').config();
import app from './app';

const port = process.env.APPLICATION_PORT || 4000;

app.listen(port, () => {
    console.log(`App Started on ${port}`);
});
