import { useContext } from "react";
import { App_Context } from "../context/AppContext";
import { Card } from "../components/Card";
import { RiseLoader } from "react-spinners";
import { Nav } from "../components/nav";
import { Pagination } from "../components/Pagination";
import { useNavigate } from "react-router";


export function Category_page()
{
    let navigate=useNavigate();
    const {posts,loading}=useContext(App_Context);
    console.log('posts in category is=>',posts);
    return(
        <div>
            <Nav/>      
                <div className="w-[38%] mx-auto py-[4rem] mt-1 flex flex-col justify-center content-center">
                    <div className="text-white p-5 pb-0 text-[1.3rem]">
                        <button className="bg-white text-black py-1 px-3 rounded-md mx-1" onClick={()=>navigate(-1)}>
                            Back 
                        </button> 
                        <span> Blogs on  <span className=" underline decoration-dotted">{posts.length > 0 ? posts[0].category : 'Loading...'}</span></span>
                    </div>
                    {
                        loading?
                        (<RiseLoader  color="#ffff" className="self-center mt-[15rem]"/>):
                        (posts.map((post)=>(
                            <Card post={post} key={post.id}></Card>
                        )))
                    }
                </div>
            <Pagination/>
        </div>
    )
}