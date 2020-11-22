module.exports = (app) => {
  app.post('/login', (req, res) => {
    console.log(req.body);
    res.send('Hello World!');
  });
}