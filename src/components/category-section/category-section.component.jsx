import { CategoryItem } from '../category-item/category-item.component';
import './category-section.css'
import {useState} from 'react';

// Category is now an array of titles
export const CategorySection = ({titles})=>{
    const [hoveredTitleId, setHoveredTitleId] = useState(null);

    const handleMouseIn = (id)=>{
        setHoveredTitleId(id)
    }

    const handleMouseOut = ()=>{
        setHoveredTitleId(null)
    }

    return <section className="category-container">
        <h3>
            New on Netflix
        </h3>   
        <div className='category-items-container'>
            {titles.map((item)=>
                <CategoryItem
                    key={item.id} 
                    item={item} 
                    handleMouseIn={handleMouseIn} 
                    handleMouseOut={handleMouseOut} 
                    hoveredTitleId={hoveredTitleId}
                />
            )}
        </div>
    </section>
}