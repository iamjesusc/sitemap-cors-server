// api/server.js

import { createServer } from 'cors-anywhere'

// Configura CORS Anywhere
const corsOptions = {
  originWhitelist: [], // Permite todas las solicitudes
  requireHeaders: ['origin', 'x-requested-with'],
  removeHeaders: ['cookie', 'cookie2']
}

// Crea un servidor de CORS Anywhere
const server = createServer(corsOptions)

// No necesitas especificar el puerto cuando se despliega en Vercel

// Exporta la función para ser ejecutada por Vercel
export default server
