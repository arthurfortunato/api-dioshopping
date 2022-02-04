import { Router, Request, Response } from "express";
import { CreateMessageController } from "./controllers/CreateMessageController";

const router = Router();

const createMessageController = new CreateMessageController();

router.get('/', (request: Request, response: Response) => {
    return response.json({message: 'Bem vindo a API Dio Shopping'})
})

router.post('/message', createMessageController.handle)

export { router }