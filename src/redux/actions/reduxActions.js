
// actions
export const FETCHED_DATA = "fetched_data";
export const ADD_TO_CART = "add_to_cart"
export const DELETE_FROM_CART = "delete_from_cart"
export const ADD_TO_DATABASE = "add_to_database"

// actions for pages
export const ALL_PRODUCTS_PAGE = "all_products_page"
export const CART_PAGE = "cart_page"
export const ADD_PRODUCT_PAGE = "add_product_page"
export const ITEM_DETAILS_PAGE = "item_details_page"
export const DELETE_FROM_DATABASE = "delete_from_database"
export const UNSORTED_DATA = "unsorted_data"

//actions creators
export const fetchData = (data)=>({data,type:FETCHED_DATA})
export const add_to_cart = (item)=>({item,type:ADD_TO_CART})
export const delete_from_cart = (data)=>({data,type:DELETE_FROM_CART})
export const item_details_page = (data)=>({data,type:ITEM_DETAILS_PAGE})
export const add_to_database = (newData)=>({newData ,type:ADD_TO_DATABASE})
export const delete_from_database = (newData)=>({newData ,type:DELETE_FROM_DATABASE})
export const unsorted_data = (newData)=>({newData ,type:UNSORTED_DATA})

// action creators for pages
export const all_products_page = (name)=>({name,type:ALL_PRODUCTS_PAGE})
export const cart_page = (name)=>({name,type:CART_PAGE})
export const add_product_page = (name)=>({name,type:ADD_PRODUCT_PAGE})