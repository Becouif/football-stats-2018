import { MatchData } from './MatchData';
export interface Analyzer {
  run(matches: MatchData[]): void;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}
}
