/**
 *
 * List
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Card from '@redwallsolutions/card-component-module';
// import { MdPerson } from 'react-icons/md';
import Fluid from './Fluid';

function List({ people = [] }) {
  return (
    <div className="container-fluid">
      <div className="row mt-1 mb-1">
        {people &&
          people.map((person, index) => (
            <div className="col-md-6 mt-2 mb-2" key={person.id}>
              <Fluid order={index + 1}>
                <Card
                  headerText={person.fullName}
                  subHead={person.username}
                  shouldFitContainer
                  isReady
                >
                  {person.suggestions && (
                    <ul className="list-group">
                      {person.suggestions.map(suggestion => (
                        <li key={suggestion.id} className="list-group-item">
                          {suggestion.description}
                        </li>
                      ))}
                    </ul>
                  )}
                </Card>
              </Fluid>
            </div>
          ))}
      </div>
    </div>
  );
}

List.propTypes = {
  people: PropTypes.array,
};

export default memo(List);
