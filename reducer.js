import { JOUER1 } from './actions';
import { JOUER2 } from './actions';
import { PAUSE } from './actions';
import { ZERO } from './actions';
const initialState = {
  compteur1: 0,
  compteur2: 0,
  msg:"",

   
  };

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
      case JOUER1:
        
       return { ...state, compteur1: state.compteur1 + 10  };
      case JOUER2:
        return { ...state, compteur2: state.compteur2 + 10  };
      case ZERO:
            return { ...state, compteur1: state.compteur1 =0 ,compteur2: state.compteur2 =0 };
      case PAUSE:
            return { ...state, msg: action.isPaused ? "Pause" : "" };   
     default:
       return state;
  }
 };

 export default rootReducer;