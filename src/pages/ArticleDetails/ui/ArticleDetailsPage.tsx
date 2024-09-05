import { FC, memo } from 'react';

import { useModel } from '../model';

import { ArticleDetails, articleDetailsReducer } from '$entities';
import { buildClassNames, DynamicModuleLoader, ReducersList } from '$shared';

type Props = {
  className?: string;
};

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

const ArticleDetailsPage: FC<Props> = memo((props) => {
  const { className } = props;

  const { containerClassNames } = useStyles({ className });

  useModel();

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={containerClassNames}>
        <ArticleDetails />
      </div>
    </DynamicModuleLoader>
  );
});

const useStyles = (params: Props) => {
  const { className = '' } = params;

  const containerClassNames = buildClassNames({
    classNames: '',
    additional: [className],
  });

  return { containerClassNames };
};

export default ArticleDetailsPage;
