import React,{useState} from "react";
import Blog from "./Database/jsBlogApi.js"
function Blogs(){
    const[Blogdata,setBlogdata]=useState(Blog);
    console.log(Blogdata)
    return(<>
    {Blogdata.map((curElem)=>{
        return(
            <>
              <div className="blogContainer" key={curElem.id}>
                <div className="blogCard" >
                <div className="blogTitle" ><h2>{curElem.id}.{curElem.headers.content.topic}</h2>
                
                </div>
                    <div className="blogImg"></div>
                    <div className="code">{curElem.headers.content.code}</div>
                    <div className="blogDesc">{curElem.headers.content.desc}

                    </div>
                    </div>
                </div>   
            </>

        )


    }
    )} 
    </>)
}export default Blogs