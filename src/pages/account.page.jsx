import {Layout} from '../components/layout/layout.component';
import { CategorySection } from '../components/category-section/category-section.component';

export const Account = ({dispatch, likedTitles})=>{
    return <Layout>
              {likedTitles.length > 0 && <CategorySection titles={likedTitles} dispatch={dispatch} likedTitles={likedTitles} label='Liked Titles'/>}
        </Layout>
}