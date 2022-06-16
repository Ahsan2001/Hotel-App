import ActionTypes from "../constant";

const INITIAL_STATE = {
    productObj: {},
    Loading: false,
    Error: "",
};

const hotelReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.GET_HOTEL_REQUEST:
            return {
                ...state,
                Loading: true,
            };

        case ActionTypes.GET_HOTEL_SUCCESS:
            return {
                ...state,
                productObj: action.payload,
                Loading: false,
                Error: "",
            };

        case ActionTypes.GET_HOTEL_FAIL:
            return {
                ...state,
                Loading: false,
                Error: action.payload,
                productObj: {},
            };

        default:
            return state;
    }
};

export { hotelReducer };