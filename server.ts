import axios, {AxiosResponse} from 'axios'
import express, {Request, Response} from 'express'

const PORT = 8000
const app = express()

app.get('/quiz-item', async(req:Request, res:Response)=>{
    try{
        const response: AxiosResponse = await axios.get('https://47059bc2-fb25-4621-91a0-d53714ca7914-europe-west1.apps.astra.datastax.com/api/rest/v2/namespaces/quizes/collections/quirky_quizes',{
            headers:{
                'X-Cassandra-Token':'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJsYmJUcDRObzdfUHBJLUxOWFZJbUFmY1pWQWs3TFNwdnY5Z0RFVF80M2ZrIn0.eyJqdGkiOiIyMTlmMDlkNi04YjI1LTQwNGQtYTZiMC0xYmFkNDg3ZDJjYWMiLCJleHAiOjE2NjUwMjY3NjYsIm5iZiI6MCwiaWF0IjoxNjY0OTkwNzY5LCJpc3MiOiJodHRwczovL2F1dGguY2xvdWQuZGF0YXN0YXguY29tL2F1dGgvcmVhbG1zL0Nsb3VkVXNlcnMiLCJhdWQiOiJhdXRoLXByb3h5Iiwic3ViIjoiZGJhZDU0NjAtNDJjZi00OWIxLTg0NzgtNDExMTg5YWEzMmU1IiwidHlwIjoiSUQiLCJhenAiOiJhdXRoLXByb3h5IiwiYXV0aF90aW1lIjoxNjY0OTkwNzY2LCJzZXNzaW9uX3N0YXRlIjoiM2Y3ZjVhN2YtYzAyMy00YTYyLThjZDUtMzVjYmYyNGM0ZThmIiwiYWNyIjoiMCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwibmFtZSI6IkR1eWd1IEVyb8SfbHUiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJkdXlndWVyb2dsdS4wOUBnbWFpbC5jb20iLCJnaXZlbl9uYW1lIjoiRHV5Z3UiLCJmYW1pbHlfbmFtZSI6IkVyb8SfbHUiLCJlbWFpbCI6ImR1eWd1ZXJvZ2x1LjA5QGdtYWlsLmNvbSJ9.IxtuES5T4UdTE7aNWrXmp2lWiU3eViB70dFgvXndKyl_E9feZh-3CDGp__7Q3pM24SSLhOfxcdrppaf396DZWpuJMeNIv7xcnc_brwHrblQA6Foz17-j3i9WWqEzX1Tyf_i-WSSD2FsKMsoi_v5DIY4Idkb_8zqYotCm9PdZnLG-btG7aae8z385RgxU_LwLEqb6PxKxof8PiIphW3YPn5fK85HYTZYgzBOuXFeBLnF47girzMWqV3JPL719CmRIoMWtp8uo4kl5l3qUkn7FprhC_ewErmGrRA5KtM1atd_eH6u_M3v00kl5SksfBZH_ULMAPHulVmVAZWoLyeUVEw',
                accept: 'application/json'
            }
        })
        if(response.status===200){
            const quizItem= await response.data.data['1f64b2d7-bb16-4394-bd0d-3877eff66765']
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
            res.send(quizItem)
        }
    }
    catch(err){
        console.log(err)
    }
})

app.listen(PORT, ()=>console.log('server is running on port '+PORT))

