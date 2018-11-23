import moment from 'moment';

const getFormattedDate = (date) => {
  if (!date) {
    return
  }

  return moment(date).format('YYYY-MM-DD');
};

const getNextYearDate = () => {
  return new Date(moment().endOf('month').add('years', 1).format('YYYY-MM-DD'));
};

const dateIsBefore = (date) => {
  const inputDate = moment(date).format('YYYY-MM-DD');
  const todayDate = moment().format('YYYY-MM-DD');

  return moment(inputDate).isBefore(todayDate)
};

export {
  getFormattedDate,
  getNextYearDate,
  dateIsBefore
}
