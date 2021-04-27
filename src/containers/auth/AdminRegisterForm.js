import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, register } from '../../modules/auth';
import AdminAuthForm from '../../components/auth/AdminAuthForm';
import { check } from '../../modules/user';

const AdminRegisterForm = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-shadow
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  // 인풋 변경 헨들러
  const onChange = (e) => {
    const { value, name } = e.target;

    dispatch(
      changeField({
        form: 'register',
        key: name,
        value,
      })
    );
  };

  // 폼 등록 이벤트 헨들러
  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password, passwordConfirm } = form;

    if (password !== passwordConfirm) {
      // Todo: 오류 처리
      return;
    }
    dispatch(register({ username, password }));
  };

  // 컴포넌트가 처음 렌더링 될 때 form을 초기화함
  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);

  // 회원가입 성공/실패 처리
  useEffect(() => {
    if (authError) {
      console.log('오류 발생');
      console.log(authError);
      return;
    }
    if (auth) {
      console.log('회원가입 성공');
      console.log(auth);
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  // user 값이 잘 설정되었는지 확인
  useEffect(() => {
    if (user) {
      history.push('/adminlogin');
    }
  }, [history, user]);

  return (
    <AdminAuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default withRouter(AdminRegisterForm);
