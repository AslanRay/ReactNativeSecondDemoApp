import {ADD_PLACE,DELETE_PLACE} from '../actions/actionTypes';

const initialState = {
    places:[]
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_PLACE:
            return {
                //copiamos todo el contenido del viejo estado
                ...state,
                places: state.places.concat({
                    key:Math.random().toString(),
                    name:action.placeName,
                    image: {
                      uri: "https://farm6.staticflickr.com/5681/22867991412_e1aab97729_b.jpg"
                    }
                })
            };
        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter( place => {
                    return place.key !== action.placeKey;
                  })
            };
        default:
            return state;
    }
};

export default reducer;