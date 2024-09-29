import { useLocation, useNavigate } from "react-router";
import { App_Context } from "../context/AppContext";
import { baseurl } from "../Url";
import { useContext, useEffect, useState } from "react";
import { Card } from "../components/Card";
import { RiseLoader } from "react-spinners";
import { Nav } from "../components/nav";

export function Blog_page()
{
    let location=useLocation();
    let [blog,setBlog]=useState({});
    let [relatedblog,setRelatedblog]=useState([]);
    let navigate=useNavigate();
    const [loading,setLoading]=useState(true);
    // console.log('blog id iss=>',blogid)
    async function fetchBlogPost(blogid)
    {
        try{
            setLoading(true);
            const res=await fetch(`${baseurl}/get-blog?blogId=${blogid}`);
            const output=await res.json();
            setBlog(output.blog);
            setRelatedblog(output.relatedBlogs);
            setLoading(false);
        }catch(e){
            console.log('in catch of BLog page');
            console.error(e.message);
        }
    }

    useEffect(()=>
        {
            if(location.pathname.includes('blogid'))
            {
                let blogid=location.pathname.split('/').at(-1);
                fetchBlogPost(blogid);
            }
        },[location.pathname]);

    return(
        <div>
            <Nav/>
            <div className="w-[38%] mx-auto py-[4rem] mt-8 flex flex-col justify-center content-center">
            {
                loading?
                (<RiseLoader color="#ffff" className="self-center mt-[15rem]"/>):
                (            
                    <div>
                        <div>
                            <button  className="bg-white text-black py-1 px-3 rounded-md mx-1" onClick={()=>navigate(-1)}>
                                Back
                            </button>
                        </div>
                        <Card post={blog}/>
                        <h2 className="text-[2rem] my-4 text-white">
                            Related Blogs
                        </h2>
                        {relatedblog.map((rpost,index)=>(
                            <Card post={rpost} key={index}/>
                        ))}
                    </div>
            )
            }
            </div>
        </div>
    );

}