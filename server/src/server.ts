import express from 'express'
import routes from './routes'
import path from 'path'
import cors from 'cors'
const app = express()

//Rota: endereço completo da req
//Recurso: Qual entidade estamos acessando do sistema

//GET: Buscar uma ou mais infos do backend
//POST: Criar uma nova info no backend
//PUT: Atualiza uma info existente no backend
//DELETE: Remoer uma info do backend

// POST http://localhost:3333/users = criar users
// GET http://localhost:3333/users = listar users
// GET http://localhost:3333/users/5 = Buscar dados do user com ID 5

// Request param: param que vem na propria rota que identifica um recurso
// Query param: param opcional que vem na rota para filtros, paginação
//Request body: params para criação e atualização de infos

app.use(cors())
app.use(express.json())
app.use(routes)

app.use('/uploads', express.static(path.resolve(__dirname, '..', '..', 'uploads')))

app.listen(3333)