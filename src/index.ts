import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResults';
// get data from csv files
const reader = new CsvFileReader('football.csv');
reader.read();
const dateOfFirstMatch = reader.data[0][0];
let manUtdWins = 0;

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUtdWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUtdWins++;
  }
}

console.log(`Man United won ${manUtdWins} games in 2018`);
