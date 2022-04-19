import express, {json} from "express";
import morgan from "morgan";


// importing routes
import movieRoutes from './routes/movies';
import characterRoutes from './routes/characters';
import genreRoutes from './routes/genre';

const app = express();


//middlewares
app.use(morgan('dev'));
app.use(json())


//routes
app.use('/api/genre', genreRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/characters', characterRoutes);
export default app;