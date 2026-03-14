import { Router, Request, Response, json} from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    return(
         //throw new Error('Erro ao fazer uma requisição');
        
        res.json ({nome : 'wellington'})
    )
})
export {router};