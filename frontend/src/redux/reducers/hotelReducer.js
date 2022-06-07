import ActionTypes from "../constants";

const INITIAL_STATE = {
    userData: {},
    userDataLoading: false,
    userDataError: "",
};

const hotelReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.GET_HOTEL_REQUEST:
            return {
                ...state,
                userDataLoading: true,
            };

        case ActionTypes.GET_HOTEL_SUCCESS:
            return {
                ...state,
                userData: action.payload,
                userDataLoading: false,
                userDataError: "",
            };

        case ActionTypes.GET_HOTEL_FAIL:
            return {
                ...state,
                userDataLoading: false,
                userDataError: action.payload,
                userData: {},
            };

        default:
            return state;
    }
};

export { hotelReducer };