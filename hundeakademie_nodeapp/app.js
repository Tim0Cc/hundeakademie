const express = require('express');
const app = express();
app.listen(3000, () => console.log('listening to Port 3000'));
app.use(express.static('../'));
app.use('/', express.static('../pages', {
  extensions: ['html']
}));