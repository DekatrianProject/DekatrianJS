const today = (format: Format = 'extended') => {
  const gregorianDate = new Date();
  return GregorianToDekatrian(gregorianDate.toISOString(), format)
}

const GregorianToDekatrian = (
  date: string,
  format: Format,
  ISOFormat: boolean = false
) => {
  const gregorianDate = new Date(date);

  const year = gregorianDate.getFullYear();
  const month = gregorianDate.getMonth();
  const day = getDayOfYear(gregorianDate);
  const leapYear = isLeapYear(year);

  let dekatrianDay;
  let dekatrianMonth;


    if (leapYear && month === 0 && day === 2) {
      dekatrianDay = "Sincronian";
      dekatrianMonth = 0;
    } else if (month === 0 && day === 1) {
      dekatrianDay = "Achronian"; 
      dekatrianMonth = 0;
    } else {
      const dayOfYear = leapYear ? day - 2 : day - 1;

      dekatrianMonth = Math.floor(dayOfYear / 28);
      dekatrianDay = dayOfYear - dekatrianMonth * 28;
      ++dekatrianMonth;

      if (dekatrianDay == 0) {
        dekatrianDay = 28;
        --dekatrianMonth;
      }
    }

  switch (format) {
    case "extended":
      return { day: dekatrianDay, month: monthEnum[dekatrianMonth], year: year };
    case "resumed":
      return { day: dekatrianDay, month: monthEnum[dekatrianMonth] };
    case "extendedAbbreviated":
      return { day: dekatrianDay, month: abbreviatedMonthEnum[dekatrianMonth], year: year };
    case "resumedAbbreviated":
      return { day: dekatrianDay, month: abbreviatedMonthEnum[dekatrianMonth] };
    case "extendedNumeric":
      return {
        day: dekatrianDay == "Achronian" ? 1 : dekatrianDay == "Sincronian" ? 2 : dekatrianDay,
        month: dekatrianMonth,
        year: year,
      };
    case "resumedNumeric":
      return {
        day: dekatrianDay == "Achronian" ? 1 : dekatrianDay == "Sincronian" ? 2 : dekatrianDay,
        month: dekatrianMonth,
      };
  }
};

const isLeapYear = (year: number) => {
  const isDivisiblePerFor = year % 4 === 0;
  const isDivisiblePerOneHundred = year % 100 === 0;
  const isDivisiblePerForHundred = year % 400 === 0;

  return (
    (isDivisiblePerFor && !isDivisiblePerOneHundred) ||
    (isDivisiblePerFor && isDivisiblePerOneHundred && isDivisiblePerForHundred)
  );
};

const getDayOfYear = (date: Date) => {
  const dateInInt = date.getTime();
  const fullYearInInt = new Date(date.getFullYear(), 0, 0).getTime();

  return Math.floor((dateInInt - fullYearInInt) / 1000 / 60 / 60 / 24);
};

const Dekatrian = {
  GregorianToDekatrian, 
  today
}

export default Dekatrian ;
