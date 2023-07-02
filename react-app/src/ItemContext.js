import { createContext, useState } from "react";

export const ItemContext = createContext({ itemData: {}, setItemData: () => { } });

export const ItemDataProvider = ({ children }) => {
    const [itemData, setItemData] = useState();
    return (
        <ItemContext.Provider value={{ itemData, setItemData }}>
            {children}
        </ItemContext.Provider>
    )
}