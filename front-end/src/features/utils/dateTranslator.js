const days = {
  Monday: "Luni",
  Tuesday: "Marti",
  Wednesday: "Miercuri",
  Thursday: "Joi",
  Friday: "Vineri",
  Saturday: "Sambata",
  Sunday: "Duminica",
};

const months = {
  January: "Ian",
  Febryary: "Feb",
  March: "Mar",
  April: "Apr",
  May: "Mai",
  Jun: "Iun",
  July: "Jul",
  August: "Aug",
  September: "Sep",
  October: "Oct",
  November: "Nov",
  December: "Dec",
};

const dateTranslator = (date) => {
  const dateArr = date.split(" ");
  if (dateArr.length !== 4) {
    return null;
  } else {
    return `${days[dateArr[0]]} ${dateArr[1]} ${months[dateArr[2]]} ${
      dateArr[3]
    }`;
  }
};

export default dateTranslator;
