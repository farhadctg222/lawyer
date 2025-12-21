import { NextResponse } from "next/server"
import Conectdb from "../../connectdb"
export const dynamic = 'force-dynamic'
console.log(process.env.DB_USERNAME)
export const GET = async (request,response)=>{
 
  
    const database  = await Conectdb()
    console.log(database)
    
    
    const bookcollection = await database.collection('lawyer')
    console.log(bookcollection)
    const res1 = await bookcollection.find({}).toArray()
    if(!res1.ok){
        throw new Error('Network response was not ok')
    }
   
    return NextResponse.json(res1)
}

