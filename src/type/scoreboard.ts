
export type Scoreboard = {
    scores: Score[]
}

export type Score = {
    playerNickname: string,
    totalTime: Date,
    milestones: Milestone[]
}

export type Milestone = {
    time: Date
    step: number
}
