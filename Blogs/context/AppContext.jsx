import { Children } from "react";
import {createContext,useState} from "react";
import { baseurl } from "../Url";


export const App_Context=createContext();

export function App_Context_Provider({children})
{
    let [posts,setPosts]=useState([]);
    let [page,setPage]=useState(1);
    let [totalpages,setTotalpages]=useState(0);
    let [loading,setLoading]=useState(false);

    async function fetchblogs(page=1,tag,category)
    {
        try
        {
            let res;
            setLoading(true);
            if(tag===undefined && category===undefined)
            {
                res=await fetch(`${baseurl}/get-blogs?page=${page}`);
            }
            else if(tag!==undefined)
            {
                res=await fetch(`${baseurl}/get-blogs?page=${page}&tag=${tag}`)
            }
            else
            {
                res=await fetch(`${baseurl}/get-blogs?page=${page}&category=${category}`)
            }
            const data=await res.json();
            // console.log('data in context is=>',data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalpages(data.totalPages);
            console.log(data);
            setLoading(false);
        }
        catch(e)
        {
            console.log("in catch");
            console.error(e.message);
        }
    }

    function pageChangeHandler(page,tag,cat)
    {
        setPage(page);
        fetchblogs(page,tag,cat);
    }
    const val={
        posts,
        page,
        totalpages,
        loading,
        setLoading,
        setPage,
        setPosts,
        setTotalpages,
        fetchblogs,
        pageChangeHandler
    };


    return(
        <App_Context.Provider value={val}>
        {children}
        </App_Context.Provider>
    );
}