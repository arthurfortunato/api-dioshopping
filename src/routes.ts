import { Router } from "express";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { ListMessageController } from "./controllers/ListMessageController";

const router = Router();

const createMessageController = new CreateMessageController();
const listMessageController = new ListMessageController();

router.post('/message', createMessageController.handle)
router.get('/message', listMessageController.handle)

export { router }