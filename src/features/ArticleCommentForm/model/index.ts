import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  useAddArticleCommentMutation,
  useGetArticleCommentsQuery,
} from '../api';

import { getAddCommentFormText, getUserAuthData } from '$entities';

export const useModel = () => {
  const { id } = useParams();
  const commentText = useSelector(getAddCommentFormText);
  const authData = useSelector(getUserAuthData);

  const [
    addComment,
    { isLoading: isAddCommentsLoading, isError: isAddCommentError },
  ] = useAddArticleCommentMutation();

  const {
    data: comments,
    isFetching: isGetCommentsFetching,
    isError: isGetCommentsError,
  } = useGetArticleCommentsQuery(id);

  const onSendComment = async () => {
    await addComment({
      articleId: id,
      userId: authData?.id,
      text: commentText,
    });
  };

  return {
    isAddCommentsLoading,
    isAddCommentError,
    comments,
    isGetCommentsError,
    isGetCommentsFetching,
    onSendComment,
  };
};
