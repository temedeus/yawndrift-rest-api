import {ScoreboardController} from './scoreboard.controller';
import {ScoreboardService} from './scoreboard.service';
import {ScoreboardMock} from "./scoreboard_mock";

describe('ScoreboardController', () => {
  let scoreboardController: ScoreboardController;
  let scoreboardService: ScoreboardService;

  beforeEach(async () => {
    scoreboardService = new ScoreboardService(null);
    scoreboardController = new ScoreboardController(scoreboardService);
  });

  describe('scoreboard controller tests', () => {
    it('should return Scoreboard mock', () => {
      jest.spyOn(scoreboardService, 'scoreboard').mockImplementation((scoreboardWhereInput) => new Promise((resolve, reject) => { resolve(ScoreboardMock)}));
      scoreboardController.getScoreboard('123').then(value => {
        expect(value).toBe(ScoreboardMock);
      } )
    });

    it('should return list of Scoreboard mock', () => {
      const scoreboardExpected = [ScoreboardMock, ScoreboardMock];
      jest.spyOn(scoreboardService, 'scoreboards').mockImplementation((scoreboardWhereInput) => new Promise((resolve, reject) => { resolve(scoreboardExpected)}));
      scoreboardController.getScoreboards('123').then(value => {
        expect(value).toBe(scoreboardExpected);
      } )
    });
  });
});
