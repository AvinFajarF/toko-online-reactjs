// dari tambah item ke cart
export const addCart = (product) => {
    return {
        type: "ADDCART",
        payload: product
    }
}

// hapus item dari cart
export const delCart = (product) => {
    return {
        type: "DELITEM",
        payload: product
    }
}