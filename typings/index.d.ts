type Format =
  | "extended"
  | "resumed"
  | "extendedAbbreviated"
  | "resumedAbbreviated"
  | "extendedNumeric"
  | "resumedNumeric";

enum monthEnum {
  "",
  "Auróran",
  "Bórean",
  "Corônian",
  "Dríadan ",
  "Eléctran",
  "Fáian",
  "Gáian",
  "Hélian",
  "Irísian",
  "Kaósian",
  "Lúnan",
  "Máian",
  "Níxian",
}

enum abbreviatedMonthEnum {
  "O",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "K",
  "L",
  "M",
  "N",
}

type DekatrianDate = {
  day: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26| 27 | 28 
  month: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 
  year: number
}
