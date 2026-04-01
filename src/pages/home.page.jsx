import {CategorySection} from '../components/category-section/category-section.component'
import { Layout } from '../components/layout/layout.component';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

// I want to Like a title
// UI: show a thumbs up icon:
// when active (liked) => shows filled icon
// when inactive(not liked) => shows outlined icon

// Data logic: I want to keep track of the titles liked
// Move my useReducer logic up a level, 
// Then pass eveything the useReducer exposes, (data, dispatch)
// Then defined two new actions in the reducer, one adds title, one removes 
// Account passes likedTitles to the title prop of the category section component
// Home passes data to the title prop of the same component.


export const Home = ({dispatch, data, error,loading, likedTitles})=>{
    // const [homeTitles, setHomeTitles] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState('');
    

    const navigate = useNavigate();
    
    const fetchHomeData = async ()=>{
        dispatch({type: 'LOADING'})
        const res = await fetch("https://jsonfakery.com/movies/paginated?page=2", {
            method: 'GET',
            headers:{
                "Content-Type":  "application/json"
            }
        })
        // setTimeout(async ()=>{
            if(res.status === 200) {
                const body = await res.json();
                dispatch({type: 'SUCCESSFUL', payload: body.data})
            } else {
                dispatch({type: 'ERROR', payload: 'An error has occurred'})
            }
        // }, 2000)

        // fetch("https://jsonfakery.com/movies/paginated", {
        //     method: 'GET',
        //     headers:{
        //         "Content-Type":  "application/json"
        //     }
        // })
        // .then((res)=>{
        //     if(res.status === 200){
        //         return res.json()
        //     }
        // })
        // .then((body)=> dispatch({type: 'SUCCESSFUL', payload: body.data}))
        // .catch((e)=> console.log(e))
    }
    useEffect(()=>{
        if(data.length === 0){
            void fetchHomeData();
        }
    }, [])

    useEffect(()=>{
        const credentials = localStorage.getItem('credentials');
        if(!credentials){
            navigate("/login");
        }
    }, [])
    console.log(likedTitles)
    return <Layout>
            {loading ? 
            <span style={{color: 'white'}}>Loading....</span>
            : error ? 
            <span style={{color: 'red'}}>{error}</span>
            :
            <CategorySection titles={data} dispatch={dispatch} likedTitles={likedTitles} />
        }
    </Layout>
           
}