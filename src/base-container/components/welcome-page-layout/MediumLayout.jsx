import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Hyperlink, Image } from '@openedx/paragon';
import PropTypes from 'prop-types';

import messages from './messages';

const MediumLayout = ({ fullName }) => {
  const { formatMessage } = useIntl();

  return (
    <>
      
    </>
  );
};

MediumLayout.propTypes = {
  fullName: PropTypes.string.isRequired,
};

export default MediumLayout;
