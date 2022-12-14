import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "../action/Constant";

export const cartData = (data = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            console.warn("Add to cart Condition", action)
            return [action.data, ...data];
        case REMOVE_FROM_CART:
            console.warn("Remove to cart Condition", action)
            data.length = data.length ? data.length - 1 : [];
            return [...data];
        case EMPTY_CART:
            console.warn("Remove to cart Condition", action)
            data = []
            return [...data];

        default:
            return data;
    }
}