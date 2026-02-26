import './category-section.css'
import {useState} from 'react';

export const CategorySection = ({category})=>{
    const [hoveredTitleId, setHoveredTitleId] = useState(null);

    const handleMouseIn = (id)=>{
        setHoveredTitleId(id)
    }

    const handleMouseOut = ()=>{
        setHoveredTitleId(null)
    }

    return <section className="category-container">
        <h3>
            {category.title}
        </h3>   
        <div className='category-items-container'>
            {category.items.map((item)=>
            <div 
                key={item.id} 
                onMouseEnter={()=>handleMouseIn(item.id)}
                onMouseLeave={handleMouseOut}
            >
                {item.title}
                {hoveredTitleId === item.id ? <div>Hovered</div> : null}
            </div>
            )}
        </div>
    </section>
}