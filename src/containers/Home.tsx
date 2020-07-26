import React from 'react';
import PropTypes from 'prop-types';

interface IProps {
  value: boolean;
}

function Home(props: IProps) {
  const {value} = props;
  return <text>{value}</text>;
}

Home.propTypes = {};

export default Home;
