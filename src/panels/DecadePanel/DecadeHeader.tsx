import * as React from 'react';
import { DECADE_DISTANCE_COUNT } from '.';
import type { GenerateConfig } from '../../generate';
import PanelContext from '../../PanelContext';
import Header from '../Header';

export type YearHeaderProps<DateType> = {
  prefixCls: string;
  viewDate: DateType;
  generateConfig: GenerateConfig<DateType>;

  onPrevDecades: () => void;
  onNextDecades: () => void;
};

function DecadeHeader<DateType>(props: YearHeaderProps<DateType>) {
  const { prefixCls, generateConfig, viewDate, onPrevDecades, onNextDecades } = props;
  const { hideHeader } = React.useContext(PanelContext);
  if (hideHeader) {
    return null;
  }

  const headerPrefixCls = `${prefixCls}-header`;

  const yearNumber = generateConfig.getYear(viewDate);
  const startYear = Math.floor(yearNumber / DECADE_DISTANCE_COUNT) * DECADE_DISTANCE_COUNT;
  const endYear = startYear + DECADE_DISTANCE_COUNT - 1;

  return (
    <Header
      {...props}
      prefixCls={headerPrefixCls}
      onSuperPrev={onPrevDecades}
      onSuperNext={onNextDecades}
    >
      {startYear}-{endYear}
    </Header>
  );
}

export default DecadeHeader;
