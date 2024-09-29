import {Nav} from '../components/nav'
import {Pagination} from '../components/Pagination'
import { Blogs } from '../components/Blogs'


export function Home()
{
    return(
        <div className='h-[200%]'>
            <Nav/>
            <Blogs/>
            <Pagination/>
        </div>
    )
}