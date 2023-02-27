const express = require('express');
const cors = require('cors');

const app = express();

app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

app.set('view engine', 'ejs');
app.set('views', 'src/app/views');

app.get('/', (req, res) => {
  res.render('index');
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`[Server] Listening on :${PORT}`);
});

