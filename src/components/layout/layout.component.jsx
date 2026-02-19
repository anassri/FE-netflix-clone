import { Navigation } from "../navigation/navigation.component"

export const Layout =({children})=>{
    return <>
        <Navigation />
        {children}
    </>
}