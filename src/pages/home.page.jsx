import {CategorySection} from '../components/category-section/category-section.component'

const homeMockData = [
    {
        id: 1,
        title: 'Only On Netflix',
        items: [
            {
                id: 1,
                title: "Black Mirror",
                genre: 'TV Drama',
                endDate: 2011,
                numOfSeasons:7,
                rating: 'MA',
                description: 'Twinted tales run wild in this mind-bending anthology',
                coverId: ''

            },
            {
                id: 2,
                title: "Black Mirror",
                genre: 'TV Drama',
                endDate: 2011,
                numOfSeasons:7,
                rating: 'MA',
                description: 'Twinted tales run wild in this mind-bending anthology',
                coverId: ''

            },
            {
                id: 3,
                title: "Black Mirror",
                genre: 'TV Drama',
                endDate: 2011,
                numOfSeasons:7,
                rating: 'MA',
                description: 'Twinted tales run wild in this mind-bending anthology',
                coverId: ''

            }
        ]
    }
]


export const Home = ()=>{
    return homeMockData.map((categroy)=>
                <CategorySection key={categroy.id} category={categroy} />)
           
}