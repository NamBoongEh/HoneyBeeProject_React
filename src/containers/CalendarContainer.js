import React, { useState } from 'react';
import { connect } from 'react-redux';
import { showInput } from '../modules/calendar';
import Calendar from '../components/Admin/subcomponents/Calendar';

// eslint-disable-next-line no-shadow
const CalendarContainer = () => {
  return <Calendar />;
};

export default connect(
  ({ calendar }) => ({
    show: calendar.showInput,
  }),
  {
    showInput,
  }
)(CalendarContainer);
