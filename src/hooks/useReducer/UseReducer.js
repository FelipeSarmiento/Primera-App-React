
export const UseReducer = (state = [], action) => {

    switch(action.type){
        case 'add':
            return [
                ...state,
                action.payload
            ]


        case 'update':
            return state.map( item => {
                if (item.id === action.payload.id){
                    return {
                        ...item,
                        id: action.payload.id,
                        title: action.payload.title,
                        desc: action.payload.desc,
                        price: action.payload.price

                    }
                }
                else {
                    return item
                }
            })

        case 'delete':

            return state.filter(item => item.id !== action.payload)

        default:

            return
    }
}