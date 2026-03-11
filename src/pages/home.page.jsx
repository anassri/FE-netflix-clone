import {CategorySection} from '../components/category-section/category-section.component'
import { homeMockData } from '../mocks/mock-data'
import {Layout} from '../components/layout/layout.component';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export const Home = ()=>{
    const navigate = useNavigate();
    
    useEffect(()=>{
        const credentials = localStorage.getItem('credentials');
        if(!credentials){
            navigate("/login");
        }
    }, [])
    return <Layout>

        {homeMockData.map((categroy)=>
                    <CategorySection key={categroy.id} category={categroy} />)}
    </Layout>
           
}