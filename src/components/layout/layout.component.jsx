import { Navigation } from "../navigation/navigation.component"

export const Layout =(prop)=>{
    return <>
        <Navigation />
        {prop.children}
    </>
}

