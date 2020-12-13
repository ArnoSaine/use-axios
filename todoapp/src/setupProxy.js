import express from 'express';
import bodyParser from 'body-parser';

export default function setupProxy(app) {
  const items = [];
  let id = 0;
  const api = express();
  api.use(bodyParser.json());
  app.use('/api', api);
  api.get('/items', function (req, res) {
    res.send(items);
  });
  api.post('/items', function (req, res) {
    items.push({ ...req.body, _id: id++ });
    res.sendStatus(201);
  });
  api.put('/items', function (req, res) {
    items[items.findIndex(({ _id }) => _id === req.body._id)] = req.body;
    res.sendStatus(204);
  });
  api.delete('/items/:id', function (req, res) {
    items.splice(
      items.findIndex(({ _id }) => _id === Number(req.params.id)),
      1
    );
    res.sendStatus(204);
  });
}
