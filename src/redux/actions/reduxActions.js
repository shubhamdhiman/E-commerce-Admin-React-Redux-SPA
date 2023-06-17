
// actions
export const FETCHED_DATA = "fetched_data";
export const ADD_TO_CART = "add_to_cart"
export const DELETE_FROM_CART = "delete_from_cart"

// actions for pages
export const ALL_PRODUCTS_PAGE = "all_products_page"
export const CART_PAGE = "cart_page"
export const ADD_PRODUCT_PAGE = "add_product_page"

//actions creators
export const fetchData = (data)=>({data,type:FETCHED_DATA})
export const add_to_cart = (item)=>({item,type:ADD_TO_CART})
export const delete_from_cart = (data)=>({data,type:DELETE_FROM_CART})

// action creators for pages
export const all_products_page = (name)=>({name,type:ALL_PRODUCTS_PAGE})
export const cart_page = (name)=>({name,type:CART_PAGE})
export const add_product_page = (name)=>({name,type:ADD_PRODUCT_PAGE})