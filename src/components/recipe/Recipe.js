import React from 'react';
import PropTypes from 'prop-types';

import Header from './styledcomps/Header';
import Para from './styledcomps/Para';
import Column from './styledcomps/Column';

const Recipe = ({name, instr}) => (
    <Column>
        <Header>{name}</Header>
        <Para>{instr}</Para>
    </Column>
);

Recipe.propTypes = {
    name: PropTypes.string,
    instr: PropTypes.string,
};

export default Recipe;