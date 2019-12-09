/**
 *
 * Info
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import InfoLabel from './InfoLabel';
import InfoValue from './InfoValue';
// import styled from 'styled-components';

function Info({ label, value }) {
  return (
    <div className="d-flex flex-column align-items-center">
      <InfoLabel>{label}</InfoLabel>
      <InfoValue>{value}</InfoValue>
    </div>
  );
}

Info.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
};

export default memo(Info);
