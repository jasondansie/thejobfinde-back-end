const express = require('express');

const app = express();

const { port, host } = require('./serverConfig.json');




app.listen(port, host, () => console.log(`Server running on port ${port} on ${host}`));