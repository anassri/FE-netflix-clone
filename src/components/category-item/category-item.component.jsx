const LikeButton = ({onClick, isLiked})=>{
    const thumbsUpOutlineSrc = "./images/thumbs-up-outline.png"
    const thumbsUpFilledSrc = "./images/thumbs-up-filled.png"

    return isLiked ?
    <button onClick={onClick} style={{backgroundColor: 'transparent', borderWidth: 0, cursor: 'pointer'}}>
        <img src={thumbsUpFilledSrc} width={24} alt="Like button not pressed" style={{backgroundColor: "rgba(0,0,0,0.5)", padding: 8, borderRadius: 25}} /> 
    </button>
    : <button onClick={onClick} style={{backgroundColor: 'transparent', borderWidth: 0, cursor: 'pointer'}}>
        <img src={thumbsUpOutlineSrc} width={24} alt="Like button pressed" style={{backgroundColor: "rgba(0,0,0,0.5)", padding: 8, borderRadius: 25}}/>
    </button>
}

export const CategoryItem = (
    {
        item, 
        handleMouseIn,
        handleMouseOut, 
        hoveredTitleId,
        dispatch,
        likedTitles
    }
    )=>{
    const isHoveredOn = hoveredTitleId === item.id;

    const isLiked = Boolean(likedTitles.find((likedTitle)=>likedTitle.id === item.id))

    const handleLikedTitle = ()=>{
        if(isLiked){
            dispatch({type: 'REMOVE_LIKED_TITLE', payload: item.id});
        } else {
            dispatch({type: 'ADD_LIKED_TITLE', payload: item})
        }
    }

    return <div  
                onMouseEnter={()=> handleMouseIn(item.id)}
                onMouseLeave={handleMouseOut}
                className='item-container'
                style={{position: 'relative'}}
            >
                {isHoveredOn && <div style={{position: 'absolute', top: 6, right: 6}}>
                    <LikeButton isLiked={isLiked} onClick={handleLikedTitle}/>
                </div> }
           {item.poster_path ? <img 
                src={isHoveredOn ?item.backdrop_path: item.poster_path} 
                 
                alt={`${item.original_title} photo`} 
                style={{objectFit: 'cover', width:isHoveredOn ? 400 : 140, height:220,  transition: 'all 0.3s ease-in-out', border: isHoveredOn? "solid 2px white": "none", borderRadius: 8}}  
            />
            :
                <img 
                src="https://t4.ftcdn.net/jpg/06/71/92/37/360_F_671923740_x0zOL3OIuUAnSF6sr7PuznCI5bQFKhI0.jpg"
                alt={`${item.original_title} photo`} 
                style={{objectFit: 'cover', width:isHoveredOn ? 400 : 140, height:220,  transition: 'all 0.3s ease-in-out', border: isHoveredOn? "solid 2px white": "none", borderRadius: 8}}  
            />
            }


            {!isHoveredOn && item.original_title}
            {isHoveredOn && <div>
                <div style={{display:'flex', columnGap: 8}}>

                {/* <span>{item.genre}</span>  • */}
                <span>{item.release_date}</span>
                {/* {item.rating ? <span>{item.itemType ==="TV" ? "TV-" : ""}{item.rating}</span>: <span>Unrated</span> } */}

                </div>
                
            {item.overview}
                </div>}
        </div>
}