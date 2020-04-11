/**
 *
 * SuggestionsPlace
 *
 */

import React, { memo, useState } from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import { InputField } from '@redwallsolutions/form-component-module';
import Button from '@redwallsolutions/button-component-module';
import { MdDelete, MdEdit } from 'react-icons/md';

function SuggestionsPlace({ suggestions = [] }) {
  const [suggestionsState, setSuggestionsState] = useState(suggestions);
  const addSuggestion = () => {
    setSuggestionsState([
      ...suggestionsState,
      {
        description: '',
        id: parseInt(Math.random() * 1000, 10),
      },
    ]);
  };

  const makeRemoveSuggestion = idSuggestion => () => {
    setSuggestionsState(
      suggestionsState.filter(
        suggestionState => suggestionState.id !== idSuggestion,
      ),
    );
  };

  return (
    <div className="container-full">
      <div className="row">
        <div className="col-12 m-0 mb-md-3">
          <Button
            theme={{ mode: 'light', default: 'gray' }}
            onClick={addSuggestion}
            type="button"
          >
            <MdEdit /> Adicionar Sugestão
          </Button>
        </div>
        {suggestionsState.length > 0 ? (
          suggestionsState.map((suggestion, index) => (
            <div className="col-12 mt-5 m-md-0" key={suggestion.id}>
              <div className="row">
                <div className="col-md-10">
                  <InputField
                    field={`description${suggestion.id}`}
                    label={`Sugestão ${index + 1}`}
                    initialValue={suggestion.description}
                    shouldFitContainer
                    required
                  />
                </div>
                <div className="col-md-2 d-md-block d-flex justify-content-start">
                  <Button
                    title="Deletar sugestão"
                    theme={{ mode: 'light', default: '#d10808' }}
                    onClick={makeRemoveSuggestion(suggestion.id)}
                    type="button"
                  >
                    <MdDelete size="1.6em" />
                    <span className="ml-2">Remover</span>
                  </Button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center mt-4 mb-4">
            Nenhuma sugestão cadastrada.
          </div>
        )}
      </div>
    </div>
  );
}

SuggestionsPlace.propTypes = {
  suggestions: PropTypes.array,
};

export default memo(SuggestionsPlace);
