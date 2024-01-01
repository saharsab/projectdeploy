import React from 'react';
import { connect } from 'react-redux';
import { jouer1, jouer2, zero, pause } from './actions';

  const Counter = ({ cpt1, cpt2, cpt3, incrementer1, incrementer2, P, Z}) => {
      return  (
        <div className='div1'>
        <div>
          
          {
          cpt1<45?
          <div>
          {
          cpt2<45?
          <div>
          { P?
      
        
          <div className='div'>Le score est:  {cpt1} - {cpt2}</div> 
          :<div className='div'><p>{cpt3}</p></div>}</div> 
          :<div className='div'>Player 2 gagné</div>} </div>  
          :<div className='div'>Player 1 gagné</div>}</div>
          <button onClick={incrementer1} className='button1'>Point Joueur 1   </button>
          <button onClick={incrementer2} className='button1'>Point Joueur 2   </button>
          <br /><button onClick={Z} className='button3'>Remettre à zéro</button>
          <button onClick={() => pause(true)} className='button3'>
        Pause
      </button>
      <button onClick={() => pause(false)} className='button3'>
        Reprendre
      </button>
          
        
        </div>
      )
    };

    const mapStateToProps = (state) => {
        return {
          
          cpt1: state.compteur1,
          cpt2: state.compteur2,
          cpt3: state.msg,
          
        };
      };
const mapDispatchToProps = (dispatch) => {
    return {
      incrementer1: () => dispatch(jouer1()),
      incrementer2: () => dispatch(jouer2()),
      Z: () => dispatch(zero()),
      P: () => dispatch(pause()),
    };
  };

  export default connect(mapStateToProps, mapDispatchToProps)(Counter);