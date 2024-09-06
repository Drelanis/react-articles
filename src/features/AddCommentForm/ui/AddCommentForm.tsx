import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
  addCommentFormActions,
  addCommentFormReducer,
  getAddCommentFormText,
} from '../model';

import classNames from './AddCommentForm.module.scss';

import {
  buildClassNames,
  Button,
  ButtonVariant,
  DynamicModuleLoader,
  Input,
  ReducersList,
  useAppDispatch,
} from '$shared';

type Props = {
  onSendComment: (text: string) => void;
  className?: string;
};

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo((props: Props) => {
  const { className, onSendComment } = props;

  const { containerClassNames } = useStyles({ className });

  const { t } = useTranslation();
  const text = useSelector(getAddCommentFormText);
  const dispatch = useAppDispatch();

  const onCommentTextChange = useCallback(
    (value: string) => {
      dispatch(addCommentFormActions.setText(value));
    },
    [dispatch],
  );

  const onSendHandler = useCallback(() => {
    onSendComment(text || '');
    onCommentTextChange('');
  }, [onCommentTextChange, onSendComment, text]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={containerClassNames}>
        <Input
          className={classNames.input}
          placeholder={t('enterTextComment')}
          value={text}
          onChange={onCommentTextChange}
        />
        <Button variant={ButtonVariant.OUTLINE} onClick={onSendHandler}>
          {t('sendTextComment')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

type UseStylesParams = Pick<Props, 'className'>;

const useStyles = (params: UseStylesParams) => {
  const { className = '' } = params;

  const containerClassNames = buildClassNames({
    classNames: classNames.addCommentForm,
    additional: [className],
  });

  return { containerClassNames };
};

export default AddCommentForm;
