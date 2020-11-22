const app = require('./express-config');
const bodyParser = require('body-parser');

const PORT = 3000;

app.use(bodyParser.json());

const routes = require('./routes/routes');
routes(app);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});