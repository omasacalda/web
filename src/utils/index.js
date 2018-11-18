import moment from 'moment';

const getFormattedDate = (date) => {
  if (!date) {
    return
  }

  return moment(date).format('YYYY-MM-DD');
};

const getNextYearDate = () => {
  return new Date(moment().add('years', 1).format('YYYY-MM-DD'));
};

export {
  getFormattedDate,
  getNextYearDate
}
