export const CategoryItem = (
    {
        item, 
        handleMouseIn,
        handleMouseOut, 
        hoveredTitleId 
    }
    )=>{
    const isHoveredOn = hoveredTitleId === item.id;

    return <div  
                onMouseEnter={()=> handleMouseIn(item.id)}
                onMouseLeave={handleMouseOut}
                className='item-container'
            >
           {item.photoUrl ? <img 
                src={item.photoUrl} 
                 
                alt={`${item.title} photo`} 
                style={{objectFit: 'cover', width:isHoveredOn ? 400 : 140, height:220,  transition: 'all 0.3s ease-in-out', border: isHoveredOn? "solid 2px white": "none", borderRadius: 8}}  
            />
            :
                <img 
                src="https://t4.ftcdn.net/jpg/06/71/92/37/360_F_671923740_x0zOL3OIuUAnSF6sr7PuznCI5bQFKhI0.jpg"
                alt={`${item.title} photo`} 
                style={{objectFit: 'cover', width:isHoveredOn ? 400 : 140, height:220,  transition: 'all 0.3s ease-in-out', border: isHoveredOn? "solid 2px white": "none", borderRadius: 8}}  
            />
            }


            {!isHoveredOn && item.title}
            {isHoveredOn && <div>
                <div style={{display:'flex', columnGap: 8}}>

                <span>{item.genre}</span>  •
                <span>{item.endDate}</span> •
                <span>{item.numOfSeasons} Seasons </span>•
                {item.rating ? <span>TV-{item.rating}</span>: <span>Unrated</span> }

                </div>
                
            {item.description}
                </div>}
        </div>
}