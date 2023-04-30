-- CreateTable
CREATE TABLE "Player" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "playerNickname" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Track" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Scoreboard" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "playerId" INTEGER NOT NULL,
    "trackId" INTEGER NOT NULL,
    "endTime" DATETIME NOT NULL,
    CONSTRAINT "Scoreboard_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Scoreboard_trackId_fkey" FOREIGN KEY ("trackId") REFERENCES "Track" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Milestone" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "time" DATETIME NOT NULL,
    "step" INTEGER NOT NULL,
    "scoreboardId" INTEGER NOT NULL,
    CONSTRAINT "Milestone_scoreboardId_fkey" FOREIGN KEY ("scoreboardId") REFERENCES "Scoreboard" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Player_email_key" ON "Player"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Player_playerNickname_key" ON "Player"("playerNickname");

-- CreateIndex
CREATE UNIQUE INDEX "Track_name_key" ON "Track"("name");
