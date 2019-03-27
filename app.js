const app = require('express')();
const PORT = 3000;


app.set('view engine', 'ejs');


app.listen(PORT, () => {
  console.log(`app running on port:${PORT}`);
})