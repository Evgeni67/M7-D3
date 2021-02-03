export default function (state = {}, action) {
  switch (action.type) {
    case "ADD_JOB_TO_FAVOURITES":
        console.log("executed")
      return {
        ...state,
        favouriteJobs: state.favouriteJobs.concat(action.payload),
      };
    //pass an id not the whole object
    case "REMOVE_JOB_FROM_FAVOURITES":
      return {
        ...state,
        favouriteJobs: state.favouriteJobs.filter(
          (x) => x.id !== action.payload
        ),
      };
      case "START_LOADING":
        return {
          ...state,
         loading:true
        };
        case "STOP_LOADING":
          return {
            ...state,
           loading:false
          };
    default:
      return state;
  }
}
