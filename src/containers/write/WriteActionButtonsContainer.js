import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { writePost } from '../../modules/write';
import WriteActionButton from '../../components/FreeBoardWrite/WriteActionButton';

const WriteActionButtonsContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { title, body, post, postError } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
    post: write.post,
    postError: write.postError,
  }));

  // 포스트 등록
  const onPublish = () => {
    dispatch(
      writePost({
        title,
        body,
      })
    );
  };

  // 취소
  const onCancel = () => {
    history.goBack();
  };

  // 성공 혹은 실패 시 할 작업
  useEffect(() => {
    if (post) {
      const { _id, user } = post;

      history.push(`/freeboard`);
    }
    if (postError) {
      console.log(postError);
    }
  }, [history, post, postError]);
  return <WriteActionButton onPublish={onPublish} onCancel={onCancel} />;
};

export default withRouter(WriteActionButtonsContainer);
