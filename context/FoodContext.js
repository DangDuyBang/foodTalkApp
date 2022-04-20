export const initialFoodState = {
    foods: [],
    foodPagination: {
        currentPage: 0,
        totalPage: 0,
    },
    food: {
        rates: [],
        ratesPagination: {
            currentPage: 0,
            totalPage: 0,
        },
    },
}


export const FoodReducer = (state, action) => {
    switch (action.type) {
        case 'SET_FOOD':
            return { ...state, foods: action.payload }

        case 'FOOD_PAGINATION':
            return {
                ...state,
                foods: [...state.foods, ...action.payload.foods],
                foodPagination: {
                    ...state.foodPagination,
                    currentPage: action.payload.currentPage,
                    totalPage: action.payload.totalPage,
                }
            }

        case 'SET_CURRENT_FOOD':
            return {
                ...state,
                food: action.payload
            }

        case 'REMOVE_CURRENT_FOOD':
            return {
                ...state,
                food: {
                    rates: [],
                    ratesPagination: {
                        currentPage: 0,
                        totalPage: 0,
                    },
                },
            }

        case 'SET_RATES':
            return {
                ...state,
                food: {
                    ...state.food,
                    rates: action.payload
                }
            }

        case 'ADD_RATE':
            return {
                ...state,
                food: {
                    ...state.food,
                    rates: [action.payload, ...state.food.rates],
                }
            }

        case 'RATE_PAGINATION':
            return {
                ...state,
                food: {
                    ...state.food,
                    commentPagination: {
                        ...state.food.commentPagination,
                        currentPage: action.payload.currentPage,
                        totalPage: action.payload.totalPage,
                    },
                    rates: state.food.rates && state.food.rates.length
                        ? [...state.food.rates, ...action.payload.rates]
                        : [...action.payload.rates],
                }
            }

        default:
            throw new Error(`action type ${action.type} not supported`)
    }
}
