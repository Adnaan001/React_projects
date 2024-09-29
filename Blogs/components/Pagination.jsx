import { App_Context } from "../context/AppContext"
import { useContext } from "react"
import './Pagination.css'
import { useLocation } from "react-router";



export function Pagination()
{
    let location=useLocation();
    let {page,totalpages,pageChangeHandler}=useContext(App_Context);
    let tag=undefined,cat=undefined;
    if(location.pathname.includes('tag'))
    {
        tag=location.pathname.split('/').at(-1);
    }
    else if(location.pathname.includes('category'))
    {
        cat=location.pathname.split('/').at(-1);
    }
    return(
        <div className="w-full fixed bottom-0 bg-[#7a7a7a] flex p-2 justify-center gap-[30rem]">
            <div>
                {
                    totalpages==1?
                    (
                        <span></span>
                    ):
                    page==1 ?
                    (
                        <button className="page_btn" onClick={()=>{pageChangeHandler(page+1,tag,cat)}}>
                            Next
                        </button>
                    ):
                    page===totalpages ?
                    (
                        <button className="page_btn" onClick={()=>{pageChangeHandler(page-1,tag,cat)}}>
                            Prev.
                        </button>
                    ):
                    (
                        <div className="flex gap-4">
                            <button className="page_btn" onClick={()=>{pageChangeHandler(page-1,tag,cat)}}>
                                Prev.
                            </button>
                            <button className="page_btn" onClick={()=>{pageChangeHandler(page+1,tag,cat)}}>
                                Next
                            </button>
                        </div>
                    )
                }
            </div>
            <div className="self-center">
                page {page} of {totalpages}
            </div>
        </div>
    )
}