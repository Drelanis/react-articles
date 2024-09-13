const typeConst = 'type';

module.exports = (componentName) => `
import { buildClassNames } from '$shared';
import { useTranslation } from 'react-i18next';
import classNames from './index.module.scss';
import { memo } from 'react';

${typeConst} Props = {
    className?: string;
}

export const ${componentName}: FC<Props> = memo((props) => {
    const { className } = props;
    const { t } = useTranslation();

    const { containerClassNames } = useStyles({ classNames })
    
    return (
        <div className={containerClassNames}>
           
        </div>
    );
});

type UseStylesParams = Pick<Props, 'className'>;

const useStyles = (params: UseStylesParams) => {
  const { className = '' } = params;

  const containerClassNames = buildClassNames({
    classNames: '',
    additional: [className],
  });

  return { containerClassNames };
};
`;
