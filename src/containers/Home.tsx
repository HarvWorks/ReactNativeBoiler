import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {standard} from '../store/actions/StandardActions';
import {getStandardValue} from '../store/selectors/getStandard';

interface IProps {
  value: boolean;
  standardValue: number;
  applyStandard: (value: number) => void;
}

const mapStateToProps = (state: any) => ({
  standardValue: getStandardValue(state),
});
const mapDispatchToProps = (dispatch: any) => ({
  applyStandard: (value: number) => standard(value)(dispatch),
});

function Home(props: IProps) {
  const {value} = props;
  return <text>{value}</text>;
}

Home.propTypes = {
  value: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(home);
