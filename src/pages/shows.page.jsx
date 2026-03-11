import {CategorySection} from '../components/category-section/category-section.component'
import { homeMockData } from '../mocks/mock-data'
import {Layout} from '../components/layout/layout.component';
export const Shows = ()=>{
    const updatedMocksItems = homeMockData[0].items.filter((item)=>item.itemType === "TV")
    const updatedMocks = {...homeMockData[0], items: updatedMocksItems}
    return <Layout><CategorySection category={updatedMocks} /></Layout>
}