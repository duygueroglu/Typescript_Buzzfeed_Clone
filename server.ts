import axios, {AxiosResponse} from 'axios'
import express, {Request, Response} from 'express'
import { QuizData } from './interfaces'
import * as dotenv from 'dotenv'
dotenv.config()

const PORT = 8000
const app = express()

app.get('/quiz-item', async(req:Request, res:Response)=>{
    try{
        // @ts-ignore
        const response: AxiosResponse = await axios.get(process.env.URL,{
            headers:{
                'X-Cassandra-Token': process.env.TOKEN,
                accept: 'application/json'
            }
        })
        if(response.status===200){
            const quizItem: QuizData = await response.data.data['1f64b2d7-bb16-4394-bd0d-3877eff66765']
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
            res.send(quizItem)
        }
    }
    catch(err){
        console.log(err)
    }
})

app.listen(PORT, ()=>console.log('server is running on port '+PORT))

