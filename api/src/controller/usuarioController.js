import { Router } from "express";
import { Login} from "../repository/usuarioRepository.js";

const server = Router();

server.post('/usuario/login', async (req,resp) => {
    try {
        const {email, senha} = req.body

        const resposta = await Login(email,senha)
        if(!resposta) throw new Error ("Credenciais inválidas!")
        resp.status(200).send(resposta)
        
    } catch (err) {
        resp.status(401).send({
            Erro:err.message
        })
    }
})

export default server;