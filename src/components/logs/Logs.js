import React, { useEffect } from 'react';
import { connect } from 'react-redux'; // 1 of how to bring and use or connect Redux in a component
import LogItem from './LogItem';
import Preloader from '../layout/Preloader';
import PropTypes from 'prop-types';
import { getLogs } from '../../actions/logAction'; // 4 bring action if you have one to fire of

const Logs = ({ log: { logs, loading }, getLogs }) => {
  // 6 get state and action now in props, here we destructure log from props and only logs and loading from log

  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
    return <Preloader />;
  }

  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'>System Logs</h4>
      </li>
      {!loading && !logs.length ? (
        <p className='center'>No logs to show...</p>
      ) : (
        logs.map(log => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  // 3 anything you whant from state
  log: state.log // log is the name of the prop and state.log comme from the root reducer (the name in root reducer is log too so we put state.log)
});

// 2
export default connect(
  mapStateToProps,
  { getLogs } // 5 add the action if you have one as a second parameter
)(Logs);
