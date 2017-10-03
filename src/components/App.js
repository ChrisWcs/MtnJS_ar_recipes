import React from 'react';
import Recipe from './recipe/Recipe';

import sandwhich from '../recipes/sandwhich';

const App = () => (
    <Recipe name={sandwhich.name} instr={sandwhich.instr}/>
);

export default App;