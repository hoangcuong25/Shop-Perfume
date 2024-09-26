import { createContext, useState } from "react";

export const ShopContext = createContext(null);


const ShopContextProvider = (props) => {

    const [menu, setMenu] = useState('home')

    const contextValue = {menu, setMenu};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;