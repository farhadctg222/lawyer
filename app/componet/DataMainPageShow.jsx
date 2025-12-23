import React from 'react';




const data = async () => {

    const res = await fetch('http://localhost:3000/api')

    const datres = await res.json()
    return datres

}

const DataMainPageShow = async () => {
    const lawdata = await data()




    return (
        <div>
  <h1>All Post</h1>

  <div>
    {lawdata?.map((post) => (
      <div key={post.id}>
        <div className="ProfileCard">
          <h1
            className="headerProfile"
            style={{ border: "1px solid black" }}
          >
            <a
              href="#"
              title={`${post.name}, Zip: ${post.address?.zipcode}`}
            >
              {post.name}
            </a>

            <div className="image">
              {/* image here */}
            </div>

            <div className="nameHeader">
              <h3 style={{ color: "#2a7fba" }}>{post.name}</h3>

              <h5>{post.phone}</h5>

              <h5>{post.website}</h5>

              <h5 className="desination">{post.email}</h5>
            </div>
          </h1>
        </div>
      </div>
    ))}
  </div>
</div>





                        
    );
};

export default DataMainPageShow;