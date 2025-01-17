const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})

//middleware

app.use(express.json());

// app.route('/').get((req, res) => res.send(product));

app.route('/sobre').get((req, res) => res.send('Hello World do sobre!'));

app.route('/').post((req, res) => {
    res.send(req.body);
    return;
})

let author = 'Everton';

app.route('/').put((req, res) => {
    author = req.body.author;
    res.send(author);
    return;
})

let product = {
    id: 1,
    name: 'Teste',
    price: 1000
}

app.route('/:id').delete((req, res) => {
    if (req.params.id != product.id) {
        res.send('Produto não encontrado');
    }
    
    const name = product.name;
    product = {};

    res.send(`Produto ${name} deletado com sucesso`);
    return;
});

//Query Param

// app.route('/').get((req, res) => {
//     res.send(req.query.name);
//     return;
// })

// app.route('/:param').get((req, res) => {
//     res.send(req.params.param);
//     return;
// })

//Body Param
app.route('/teste-post').post((req, res) => {
    const {teste, array} = req.body;
    res.send(`${teste} '+' ${array}`);
});