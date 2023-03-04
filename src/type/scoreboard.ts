
export type Scoreboard = {
    scores: Score[]
}

export type Score = {
    track: string,
    playerNickname: string,
    startTime: Date,
    endTime: Date,
    milestones: Milestone[]
}

// "step" starts from 1 as these values are used for display.
export type Milestone = {
    time: Date
    step: number
}
