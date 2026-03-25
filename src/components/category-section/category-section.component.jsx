import { CategoryItem } from '../category-item/category-item.component';
import './category-section.css'
import {useEffect, useRef, useState} from 'react';

// Category is now an array of titles
export const CategorySection = ({titles})=>{
    const [hoveredTitleId, setHoveredTitleId] = useState(null);
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(0);
    const categorySectionRef = useRef(null);
    const handleMouseIn = (id)=>{
        setHoveredTitleId(id)
    }

    const handleMouseOut = ()=>{
        setHoveredTitleId(null)
    }

    const titleWidth = 156;

    const determineCategroyIndices = ()=>{
        if(categorySectionRef.current){
            const clientWidth = categorySectionRef.current.clientWidth;
            // clientWidht = 1000, numOfTitles = 6.4
            const numOfTitles = Math.abs(clientWidth / titleWidth);
            if(endIndex !== 0){
              setStartIndex(startIndex+numOfTitles);  
            } 
            setEndIndex(endIndex+numOfTitles);
        }
    }

    const handleNextSet = ()=>{
        // clientWidth, the width of the visible container within the viewport
        // scrollWidth, the total width of the element
        if(categorySectionRef.current){
            const clientWidth = categorySectionRef.current.clientWidth;
            // total = 1000, scrollWidth= 100, scrollValue= 950, 1000 - 150 = 850 
            const totalNumOfTitles = titles.length;
            const numOfTitlesWeCanShowAtATime = Math.abs(clientWidth / titleWidth);
            const numOfTitlesLeft = totalNumOfTitles - endIndex;
            if(numOfTitlesLeft < numOfTitlesWeCanShowAtATime){
                setStartIndex(startIndex+numOfTitlesLeft);  
                setEndIndex(endIndex+numOfTitlesLeft);
            } else  {
                setStartIndex(startIndex+numOfTitlesWeCanShowAtATime);  
                setEndIndex(endIndex+numOfTitlesWeCanShowAtATime);
            }

        }
    }

    useEffect(()=>{
        determineCategroyIndices()
    }, [])

    return <section className="category-container">
        <h3>
            New on Netflix
        </h3>   
        <div className='category-items-container' ref={categorySectionRef} >
            {titles.slice(startIndex,endIndex).map((item)=>
                <CategoryItem
                    key={item.id} 
                    item={item} 
                    handleMouseIn={handleMouseIn} 
                    handleMouseOut={handleMouseOut} 
                    hoveredTitleId={hoveredTitleId}
                />
            )}
            <button style={{position: "absolute", right: 0}} onClick={handleNextSet}>Next</button>
        </div>
    </section>
}