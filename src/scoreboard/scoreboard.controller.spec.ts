import {Test, TestingModule} from '@nestjs/testing';
import {ScoreboardController} from './scoreboard.controller';
import {ScoreboardService} from './scoreboard.service';
import {ScoreboardMock} from "./scoreboard_mock";

describe('ScoreboardController', () => {
  let scoreboardController: ScoreboardController;
  let scoreboardService: ScoreboardService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ScoreboardController],
      providers: [ScoreboardService],
    }).compile();

    scoreboardController = app.get<ScoreboardController>(ScoreboardController);
    scoreboardService = app.get<ScoreboardService>(ScoreboardService);
  });

  describe('scoreboard controller tests', () => {
    it('should return Scoreboard mock', () => {
      jest.spyOn(scoreboardService, 'getScoreboard').mockImplementation(() => ScoreboardMock);
      expect(scoreboardController.getScoreboard()).toBe(ScoreboardMock);
    });
  });
});
