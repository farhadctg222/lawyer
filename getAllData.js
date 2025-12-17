export const  getAllData = async()=>{
    const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/lawyer`,{next:{
        revalidate:10
    }})
    return result.json()
}
console.log(process.env.NEXT_PUBLIC_BASE_API_URL)

// export const  postData = async()=>{
//    try {
//     const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/post`,{
//         next: {
//             revalidate: 10
//         }
//     })
//     console.log(result)
//     if(!result.ok){
//         return new Error("newtwork not response");
        
//     }
//     return result.json()
    
//    } catch (error) {
//     return console.log(error)
//    }
// }

