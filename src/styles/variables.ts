export type VariablesKeys =
    '--main-background-color' |
    '--primary-font-color';
export type Variables = {
    [key in VariablesKeys]: string;
};

export const lightVariables: Variables = {
    '--main-background-color': 'red',
    '--primary-font-color': 'black'
};
export const darkVariables: Variables = {
    '--main-background-color': 'blue',
    '--primary-font-color': 'white'
};
