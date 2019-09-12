import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTechs } from '../../actions/techActions';

const TechOptions = ({ getTechs, tech: { techs, loading } }) => {
  useEffect(() => {
    getTechs();
  }, []);

  let techOptions = null;
  if (!loading && techs) {
    techOptions = techs.map(tech => (
      <option
        key={tech.id}
        value={`${tech.firstName} ${tech.lastName}`}
      >{`${tech.firstName} ${tech.lastName}`}</option>
    ));
    return techOptions;
  }

  return null;
};

TechOptions.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  tech: state.tech
});

export default connect(
  mapStateToProps,
  { getTechs }
)(TechOptions);
