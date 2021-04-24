import React from 'react';
import { connect } from 'react-redux';
import AdminMiniBar from '../Admin/subcomponents/AdminMiniBar';
import AdminQna1 from '../Admin/subcomponents/AdminQna1';
import AdminQna2 from '../Admin/subcomponents/AdminQna2';
import { change } from '../../modules/adminQna';

// eslint-disable-next-line no-shadow
const QnAContainer = ({ change }) => {};

const mapStateToProps = (state) => ({
  page: state.qna.page,
});

const mapDispatchToProps = (dispatch) => ({
  page: () => {
    dispatch(change());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(QnAContainer);
