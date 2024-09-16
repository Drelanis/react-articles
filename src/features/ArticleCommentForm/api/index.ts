import { CommentType } from '$entities';
import { AppRoutes, rtkApi } from '$shared';

type CommentData = {
  text: string;
  articleId?: string;
  userId?: string;
};

const commentApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    addArticleComment: builder.mutation<Comment, CommentData>({
      query: (data) => ({
        url: AppRoutes.COMMENTS,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: (_, __, { articleId }) => [
        { type: 'Comments', id: articleId },
      ],
    }),
    getArticleComments: builder.query<CommentType[], string | undefined>({
      query: (articleId) => ({
        url: AppRoutes.COMMENTS,
        params: {
          articleId,
          _expand: 'user',
        },
      }),
      providesTags: (_, __, articleId) => [{ type: 'Comments', id: articleId }],
      keepUnusedDataFor: 0,
    }),
  }),
});

export const { useAddArticleCommentMutation, useGetArticleCommentsQuery } =
  commentApi;
