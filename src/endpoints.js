import { Router } from 'express';
import { coresprimaria, dobro, cinema, somar, media, temperatura, tabuada, text, maiornumero } from './services.js ';


const server = Router();


server.get('/dobro/:numero', (req, resp) => {
    try {
        const numero = Number(req.params.numero)

        const d = dobro(numero);

        resp.send({
            numero: d
        });
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }


})

server.get('/somar', (req, resp) => {
    try {
        let a = Number(req.query.a);
        let b = Number(req.query.b);

        let x = a + b;

        resp.send({
            soma: x
        })
    } catch (err) {
        resp.statu(404).send({
            error: err.message
        })

    }

})
server.post('/somar', (req, resp) => {
    try {
        const { a: num1, b: num2 } = req.body;
        const soma = somar(num1, num2);

        resp.send({
            soma: soma
        })
    } catch (err) {
        resp.status(404).send({
            error: err.message
        })
    }
})

server.get('/corprimaria/:cor', (req, resp) => {
    try {
        const cor = req.params.cor

        const d = coresprimaria(cor);

        resp.send({
            cor: d
        });
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.post('/IngressoCineama', (req, resp) => {
    try {
        const { valores: { ingresso } } = req.body;

        const d = cinema(ingresso)

        resp.send({
            ingresso: d
        })


    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }

})

server.post('/media', (req, resp) => {
    try {
        const { a: num1, b: num2, c: num3 } = req.body;
        const resposta = media(num1, num2, num3);

        resp.send({
            media: resposta
        })

    } catch (err) {
        resp.status(404).send({
            error: err.message
        })
    }
})

server.get('/temperatura', (req, resp) => {
    try {
        const a = Number(req.query.a);
        const x = temperatura(a)

        resp.send({
            febre: x
        })
    } catch (err) {
        resp.status(404).send({
            error: err.message
        })
    }
})

server.get('/tabuada', (req, resp) => {
    try {
        const a = Number(req.query.a);
        const x = tabuada(a)

        resp.send(x)
    } catch (err) {
        resp.status(404).send({
            error: err.message
        })
    }
})
server.get('/dia2/freqcaracter/:texto/:caracter', (req, resp) => {
    try {
        const a = String(req.params.texto);
        const b = String(req.params.caracter)

        const x = text(a, b)

        resp.send({
            freq: x
        })

    } catch (err) {
        resp.status(404).send({
            error: err.message
        })
    }
})

server.post('/dia2/maiornumero', (req, resp) => {
    try {
        const { a: num1 } = req.body;
        const resposta = maiornumero(num1);

        resp.send({
            maior: resposta
        })

    } catch (err) {

        resp.status(404).send({
            error: err.message
        })
    }
})

export default server;