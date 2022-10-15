export const THEME_CHANGE = 'THEME_CHANGE';

export const switchMode = (mode : any) => {
  return {
    type: THEME_CHANGE,
    payload: mode,
  };
}

