require('dotenv').config();
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const routes = require('./router');

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create();

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
if (process.env.NODE_ENV === 'production') {
    app.use((req, res) => {
        if (req.header('x-forwarded-proto') !== 'https') {
            res.redirect(`https://${req.header('host')}${req.url}`);
        }
    })
}
app.use(routes);

app.listen(PORT, () => console.log(`Server listening to PORT: ${PORT}`));
