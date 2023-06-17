import { ADD_PRODUCT_PAGE, ADD_TO_CART, ALL_PRODUCTS_PAGE, CART_PAGE, DELETE_FROM_CART, FETCHED_DATA } from "../actions/reduxActions";

const initialState = {
    data:[],
    cart:[],
}

export function dataReducer(state = initialState,action){
    switch(action.type){
        case FETCHED_DATA:
            return{
                ...state,
                data:action.data
            }
        case ADD_TO_CART:
            return{
                ...state,
                cart:[
                    ...state.cart,
                    action.item
                ]
            }
        case DELETE_FROM_CART:
            return{
                ...state,
                cart:action.data
            }
        default:
            return state;
    }
    
}

const initialPage = {
    page:["all_products_page"]
}
export function pageReducer(state=initialPage,action){
    switch(action.type){
        case ALL_PRODUCTS_PAGE:
            return{
                page:["all_products_page"]
            }
        case CART_PAGE:
            return{
                page:["cart_page"]
            }
        case ADD_PRODUCT_PAGE:
            return{
                page:["add_product_page"]
            }
        default:
            return state;
    }
}