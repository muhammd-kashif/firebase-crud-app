const initialState = {
    modal: [],
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_MODAL_SUCCESS":
        return {
          ...state,
          modal: action.payload,
        };
  
      default:
        return state;
    }
  };