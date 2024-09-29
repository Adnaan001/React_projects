import { NavLink } from "react-router-dom";

export function Card({post})
{
    return(
        <div className="p-5 m-1">
            <h2 className="text-[1.5rem] text-white font-bold cursor-pointer">
                <NavLink to={`/blogid/${post.id}`}>{post.title}</NavLink>
            </h2>
            <p className="text-[#5a5a5a]">
                By <em>{post.author}</em> on 
                <NavLink to={`/category/${post.category}`}> <span className=" underline decoration-dotted">{post.category}</span></NavLink>
            </p>
            <p className="text-[#ebebeb]">Posted on {post.date}</p>
            <p className="text-[#ebebeb] text-[1.2rem] mt-4 mb-1">{post.content}</p>
            <div>
                {post.tags.map((tag,index)=>(
                    <span key={index} className="text-blue-600 cursor-pointer">
                       <NavLink to={`/tag/${tag.replaceAll(' ','-')}`}> #{tag}  </NavLink>
                    </span>
                ))}
            </div>
        </div>
    )
}