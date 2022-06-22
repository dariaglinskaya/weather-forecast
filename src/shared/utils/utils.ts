import * as moment from 'moment';

export const dayDiffFromNow = (date: Date) => {
  const givenDate = moment(date, 'YYYY-MM-DD');
  const current = moment().startOf('day');

  return givenDate.diff(current, 'days');
};
