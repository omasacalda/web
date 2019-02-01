import moment from 'moment';

const getFormattedDate = (date) => {
  if (!date) {
    return
  }

  return moment(date).format('YYYY-MM-DD');
};

const getNextYearDate = () => {
  return new Date(moment().endOf('month').add(1, 'years').format('YYYY-MM-DD'));
};

const dateIsBefore = (date) => {
  const inputDate = moment(date).format('YYYY-MM-DD');
  const todayDate = moment().format('YYYY-MM-DD');

  return moment(inputDate).isBefore(todayDate)
};

const getRomanianDate = (date) => {
  return moment(date).format('DD.MM.YYYY');
};

export {
  getFormattedDate,
  getNextYearDate,
  dateIsBefore,
  getRomanianDate
}
