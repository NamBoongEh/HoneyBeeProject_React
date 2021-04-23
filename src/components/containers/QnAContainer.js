import React from 'react';
import { connect } from 'react-redux';
import AdminMiniBar from '../Admin/subcomponents/AdminMiniBar';
import QnA1 from '../Admin/subcomponents/QnA1';
import QnA2 from '../Admin/subcomponents/QnA2';
import { change } from '../../modules/qna';

// eslint-disable-next-line no-shadow
const QnAContainer = ({ change }) => {
  return <></>;
};

const mapStateToProps = (state) => ({
  page: state.qna.page,
});

const mapDispatchToProps = (dispatch) => ({
  page: () => {
    dispatch(change());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(QnAContainer);
