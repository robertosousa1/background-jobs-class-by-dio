import 'dotenv/config';
import express from 'express';
import BullBoard from 'bull-board';

import UserController from './app/controllers/UserController';
import Queue from './app/lib/Queue';

const app = express();
BullBoard.setQueues(Queue.queues.map(queue => queue.bull));

app.use(express.json());
app.post('/users', UserController.store);

app.use('/admin/queues', BullBoard.UI);

app.listen(8080, () => {
  console.log('Server running on the port 8080');
});