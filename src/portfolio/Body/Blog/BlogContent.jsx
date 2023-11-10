import React, { useState } from "react";
import Blog from "../Database/BlogApi.js";


import "./blog.css"
function BlogContent() {
    const [Blogdata, setBlogdata] = useState(Blog);
    const [Bloglist, setBloglist] = useState(Blog)
    console.log(Blogdata);
    return (
        <><div className="blogHeading"><h4>Cheatsheets</h4><div className="whSpace"></div></div>
            <div className="blogMain">
                <div className="rightblog">
                    <div className="courseList">
                        {
                            Bloglist.map((curElem) => {
                                return (<>

                                    <div className="courseName" key={curElem.id}>{curElem.course}</div>
                                </>)
                            })
                        }</div>


                    {Blogdata.slice(0, 3).map((curElem) => {
                        return (<>
                            <div className="Bpm">
                                {/* <!-- BlogPageManagement --> */}
                                <div className="blogPage" key={curElem.id}>
                                    {/* Hellp{curElem.headers} */}
                                    n{curElem.headers.headerName}
                                    {/* {curElem.headers[headerId].headerName} */}

                                </div>



                            </div>
                        </>)
                    }
                    )}<br />
                    <button>Explore All</button>
                </div>

            </div>
        </>
    )
}
export default BlogContent;
