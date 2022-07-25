import {
    createEffect,
    createEvent,
    createStore,
    sample
} from 'effector';
import { ChangeEvent } from 'react';
import { createGate } from 'effector-react';
import { darkVariables, lightVariables, VariablesKeys} from './styles/variables';

// gates
export const start = createGate();

start.open.watch(() => console.log('start'))

// events
export const toggleTheme = createEvent<ChangeEvent>();

// stores
const $isDarkTheme = createStore(false);

$isDarkTheme.on(toggleTheme, isDark => !isDark);

// effects
export const changeThemeVariablesFx = createEffect((isDark: boolean) => {
    const variables  = isDark ? darkVariables : lightVariables;
    const root = document.documentElement;
    Object.keys(variables).forEach(key => {
        root.style.setProperty(key, variables[key as VariablesKeys]);
    });
});

// logic
sample({
    source: $isDarkTheme,
    target: changeThemeVariablesFx
})