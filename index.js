
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Служит для отдачи статических файлов, находящихся в директории public
//app.use(express.static(path.join(__dirname, 'public')));
///bitrix24-webhook
app.post('/bitrix24-webhook', (req, res) => {
    // Получаем данные POST-запроса
    const postData = req.body;
    console.log(postData)


    res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

app.get("/",(req,res)=>{
    res.send(
        `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Страница Test</title>
    </head>
    <body>
      <h1>Test page</h1>
    </body>
    </html>
  `
    )
})


app.listen(PORT, () => console.log(`Server running at ${PORT}`));