import Fastify from 'fastify';
import {router} from './routers';
import cors from '@fastify/cors';


const app = Fastify({logger: true});

const start = async () => {
    await app.register(cors);  
     await app.register(router);

  try { 
    await app.listen({port: 3333});
   } catch (err) {
    process.exit(1);

   }
}

  start();