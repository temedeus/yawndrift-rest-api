import {Milestone, Scoreboard} from "../type/scoreboard";

export const ScoreboardMock: Scoreboard = {
    scores: [
        {
            playerNickname: "Pena",
            track: "Ice Track",
            startTime: createDate(),
            endTime: createDate({minute: 5}),
            milestones: createMilestones(5)
        }
    ]
}

function createMilestones(stepcount): Milestone[] {
    return [...Array(stepcount).keys()].map(x => ({
        step: x + 1,
        time: createDate({minute: x + 1})
    }))
}

// For creating test date we can operate within one day.
function createDate({hour = 0, minute = 0} = {}): Date {
    return new Date(2000, 1, 12, hour, minute)
}