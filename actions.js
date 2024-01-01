export const JOUER1 = 'JOUER1';
export const JOUER2 = 'JOUER2';
export const PAUSE = 'PAUSE';
export const ZERO = 'ZERO';

export const jouer1 = () => ({
    type: JOUER1,
   
   });

export const jouer2 = () => ({
    type: JOUER2,
   
   });

export const pause = (isPaused) => ({
    type: PAUSE,
    isPaused,
})
export const zero = () => ({
    type: ZERO,
   
   });