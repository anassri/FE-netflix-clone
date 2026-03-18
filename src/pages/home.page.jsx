import {CategorySection} from '../components/category-section/category-section.component'
import { Layout } from '../components/layout/layout.component';
import { useEffect, useState, useReducer } from 'react';
import { useNavigate } from 'react-router';

const initialState = {
    loading: false,
    error: '',
    data: []
}

const fetchReducer = (state, action)=>{
    switch(action.type) {
        case 'LOADING':
            return {...state, loading: true}
        case 'ERROR': 
            return {...state, error: action.payload, loading: false}
        case 'SUCCESSFUL':
            return {...state, data: action.payload, loading: false}
        default:
            return {...state, loading: false, error: ''} 
    }   
}

export const Home = ()=>{
    // const [homeTitles, setHomeTitles] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState('');
    const [{data, loading, error}, dispatch] = useReducer(fetchReducer, initialState)

    const navigate = useNavigate();
    
    const fetchHomeData = async ()=>{
        dispatch({type: 'LOADING'})
        const res = await fetch("https://jsonfakery.com/movies/paginated?page=2", {
            method: 'GET',
            headers:{
                "Content-Type":  "application/json"
            }
        })
        setTimeout(async ()=>{
            if(res.status === 200) {
                const body = await res.json();
                dispatch({type: 'SUCCESSFUL', payload: body.data})
            } else {
                dispatch({type: 'ERROR', payload: 'An error has occurred'})
            }
        }, 2000)

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
        // .then((body)=> setHomeTitles(body.data))
        // .catch((e)=> console.log(e))
    }
    useEffect(()=>{
        void fetchHomeData();
    }, [])

    useEffect(()=>{
        const credentials = localStorage.getItem('credentials');
        if(!credentials){
            navigate("/login");
        }
    }, [])

    return <Layout>
            {loading ? 
            <span style={{color: 'white'}}>Loading....</span>
            : error ? 
            <span style={{color: 'red'}}>{error}</span>
            :
            <CategorySection titles={data} />
        }
    </Layout>
           
}