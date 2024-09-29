import { App_Context } from "../context/AppContext";
import { useContext, useEffect } from "react";
import RiseLoader from "react-spinners/RiseLoader";
import { Card } from "./Card";

// posts,
// page,
// totalpages,
// loading,
// setLoading,
// setPage,
// setPosts,
// setTotalpages,
// fetchblogs,
// pageChange

export function Blogs()
{
    const {page,totalpages,pageChange,posts,setPosts,setPage,setTotalpages,loading}=useContext(App_Context);
    return(
        <div className="w-[38%] mx-auto py-[4rem] mt-1 flex flex-col justify-center content-center">
            {
                loading?
                (<RiseLoader  color="#ffff" className="self-center mt-[15rem]"/>):
                (posts.map((post)=>(
                    <Card post={post} key={post.id}></Card>
                )))
            }
        </div>
    )
}