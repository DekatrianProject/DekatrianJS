import Dekatrian from './index'

test('Date extended', () => {
  const result = Dekatrian.GregorianToDekatrian("20 May 2000", "extended");
  expect(result).toMatchObject({day: 27, month: "Eléctran", year: 2000});
})


test('Date resumed', () => {
  const result = Dekatrian.GregorianToDekatrian("20 May 2000", "resumed");
  expect(result).toMatchObject({day: 27, month: "Eléctran"});
})


test('Date extendedAbbreviated', () => {
  const result = Dekatrian.GregorianToDekatrian("20 May 2000", "extendedAbbreviated");
  expect(result).toMatchObject({day: 27, month: "E", year: 2000});
})


test('Date resumedAbbreviated', () => {
  const result = Dekatrian.GregorianToDekatrian("20 May 2000", "resumedAbbreviated");
  expect(result).toMatchObject({day: 27, month: "E"});
})


test('Date extendedNumeric', () => {
  const result = Dekatrian.GregorianToDekatrian("20 May 2000", "extendedNumeric");
  expect(result).toMatchObject({day: 27, month: 5, year: 2000});
})


test('Date resumedNumeric', () => {
  const result = Dekatrian.GregorianToDekatrian("20 May 2000", "resumedNumeric");
  expect(result).toMatchObject({day: 27, month: 5});
})

// Achronian

test('Achronian extended', () => {
  const result = Dekatrian.GregorianToDekatrian("01 Jan 2020", "extended");
  expect(result).toMatchObject({day: "Achronian", month: "", year: 2020});
})


test('Achronian resumed', () => {
  const result = Dekatrian.GregorianToDekatrian("01 Jan 2020", "resumed");
  expect(result).toMatchObject({day: "Achronian", month: ""});
})


test('Achronian extendedAbbreviated', () => {
  const result = Dekatrian.GregorianToDekatrian("01 Jan 2020", "extendedAbbreviated");
  expect(result).toMatchObject({day: "Achronian", month: "O", year: 2020});
})


test('Achronian resumedAbbreviated', () => {
  const result = Dekatrian.GregorianToDekatrian("01 Jan 2020", "resumedAbbreviated");
  expect(result).toMatchObject({day: "Achronian", month: "O"});
})


test('Achronian extendedNumeric', () => {
  const result = Dekatrian.GregorianToDekatrian("01 Jan 2020", "extendedNumeric");
  expect(result).toMatchObject({day: 1, month: 0, year: 2020});
})


test('Achronian resumedNumeric', () => {
  const result = Dekatrian.GregorianToDekatrian("01 Jan 2020", "resumedNumeric");
  expect(result).toMatchObject({day: 1, month: 0});
})

// Sincronian

test('Sincronian extended', () => {
  const result = Dekatrian.GregorianToDekatrian("02 Jan 2020", "extended");
  expect(result).toMatchObject({day: "Sincronian", month: "", year: 2020});
})


test('Sincronian resumed', () => {
  const result = Dekatrian.GregorianToDekatrian("02 Jan 2020", "resumed");
  expect(result).toMatchObject({day: "Sincronian", month: ""});
})


test('Sincronian extendedAbbreviated', () => {
  const result = Dekatrian.GregorianToDekatrian("02 Jan 2020", "extendedAbbreviated");
  expect(result).toMatchObject({day: "Sincronian", month: "O", year: 2020});
})


test('Sincronian resumedAbbreviated', () => {
  const result = Dekatrian.GregorianToDekatrian("02 Jan 2020", "resumedAbbreviated");
  expect(result).toMatchObject({day: "Sincronian", month: "O"});
})


test('Sincronian extendedNumeric', () => {
  const result = Dekatrian.GregorianToDekatrian("02 Jan 2020", "extendedNumeric");
  expect(result).toMatchObject({day: 2, month: 0, year: 2020});
})


test('Sincronian resumedNumeric', () => {
  const result = Dekatrian.GregorianToDekatrian("02 Jan 2020", "resumedNumeric");
  expect(result).toMatchObject({day: 2, month: 0});
})