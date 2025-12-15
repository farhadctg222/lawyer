import React from 'react';




const data = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/usershttps://jsonplaceholder.typicode.com/users')

    const datres = await res.json()
    return datres

}

const DataMainPageShow = async () => {
    const lawdata = await data()
    console.log(lawdata)




    return (
        <div>
            <h1>All Post</h1>
           <div>
          
                {
                    lawdata?.map((post)=>(
                        <div key={post.id}>
                            <title>{post.name}</title>
                        <div className='ProfileCard'>
                            <h1 className="headerProfile"style={{border:'1px solid black'}}>
                            <a href=""><title>{post.name} <br />{post.address.zipcode} <br />{post.address.zipcode}</title></a>  
                            <a href=""><title>{post.username} <br /></title></a>
                            <div className="image">
                                {/* <img src={image} alt="image" /> */}
                            </div>
                            <div className="nameHeader">
                            <h3 style={{color:'#2a7fba',}} >{post.name}</h3>
                                <h5 >{post.phone}</h5>
                                <h6 style={{color:'red',fontFamily:'robute,sans-serif'}}></h6>
                                <h5 >{post.website}</h5>
                                <h5 className='desination' >{post.email}</h5>
                    
                                {/* <Link to={`/chattogram/${ChName}`} style={{textDecoration:'none',color:'white'}}>  <button className='seeChamber' style={{textDecoration:'none',color:'white'}}  >See Chamber</button> </Link> */}
                            
                            </div></h1>
                            
                            
                            
                            
                            
                        </div>
                        </div>
                    ))
                }
           </div>

           
        </div>




                        
    );
};

export default DataMainPageShow;