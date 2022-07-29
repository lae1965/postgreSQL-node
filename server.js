import express from 'express';
import { postRouter } from './routes/post.routes.js';
import { userRouter } from './routes/user.routes.js'; 

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use('/api', userRouter);
app.use('/api', postRouter);

app.listen(PORT, () => {console.log(`Server has been started on PORT ${PORT}...`)});