import { Router } from 'express';
import { coresprimaria, dobro , ingresso } from './services.js ';


const server = Router();


server.get('/dobro/:numero', (req, resp) =>{
	try{
        const numero = Number (req.params.numero)
            
        const d = dobro(numero);
    
        resp.send({
            numero:d
        });
    }
    catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
    
    
})

server.get('/somar', (req, resp) => {
    let a = Number(req.query.a);
    let b = Number(req.query.b);

    let x = a + b;
 
    resp.send({
        soma:x
    })

    

})
server.get('./somar', (req,resp) => {
    let a = req.query.a;
    let b = req.query.b;
	
	let x = a + b;

	resp.send({
	soma:x
	})
})

server.get('/corprimaria/:cor', (req, resp) => {
    try{
    const cor = req.params.cor
        
    const d = coresprimaria(cor);

    resp.send({
        cor:d
    });
}
catch(err){
    resp.status(404).send({
        erro: err.message
    })
}
})

server.post('/IngressoCineama', (req, resp) => {
    try {
        const {valores: {ingresso} } = req.body;

        const d = cinema(ingresso)

        resp.send({
            ingresso:d
        })

        
    }
     catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }

})