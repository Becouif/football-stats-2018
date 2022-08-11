import fs from 'fs';
import { dateStringToDate } from './UtilityDate';
import { MatchResult } from './MatchResults';

export abstract class CsvFileReader<MatchData> {
  data: MatchData[] = [];
  constructor(public filename: string) {}
  abstract mapRow(row: string[]): MatchData;
  read(): void {
    this.data = fs
      .readFileSync(this.filename, { encoding: 'utf-8' })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      })
      .map(this.mapRow);
  }
}
