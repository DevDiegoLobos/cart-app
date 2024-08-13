export const cartReducer = (state, action) => {
    switch (action.type) {
        case 'AddProductCart': return [...state,
        {
            product: action.product,
            quantity: 1,
            total: action.product.price * 1
        }];
        case 'UpdateProductCart': return state.map((i) => {
            if (i.product.id === action.product.id) {
                return {
                    ...i,
                    quantity: i.quantity + 1,
                    total: i.product.price * (i.quantity + 1)
                };
            }
            return i;
        });
        case 'RemoveProductCart': return state.filter((i) => i.product.id !== action.product.id );
    }
};
