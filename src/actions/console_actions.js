export const APPEND_LINE='APPEND_LINE';
export const CLEAN = 'CLEAN';

export const appendLine = line => ({
    type: APPEND_LINE,
    payload: line    
});

export const clean = () => ({
    type: CLEAN
});