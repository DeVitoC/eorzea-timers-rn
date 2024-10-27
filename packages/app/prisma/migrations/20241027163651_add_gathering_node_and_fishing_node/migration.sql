-- CreateTable
CREATE TABLE "GatheringNode" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "time" INTEGER,
    "location" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "lvl" INTEGER NOT NULL,
    "stars" INTEGER NOT NULL,
    "x" DOUBLE PRECISION NOT NULL,
    "y" DOUBLE PRECISION NOT NULL,
    "expac" INTEGER NOT NULL,
    "gathering" INTEGER NOT NULL,

    CONSTRAINT "GatheringNode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FishingNode" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "time" INTEGER,
    "duration" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "lvl" INTEGER NOT NULL,
    "stars" INTEGER NOT NULL,
    "x" DOUBLE PRECISION NOT NULL,
    "y" DOUBLE PRECISION NOT NULL,
    "expac" INTEGER NOT NULL,
    "desynthLvl" INTEGER NOT NULL,
    "desynthJob" TEXT NOT NULL,
    "mooch" BOOLEAN NOT NULL,
    "moochFrom" TEXT[],
    "isWeatherChain" BOOLEAN NOT NULL,
    "weatherChain" TEXT[],
    "weather" TEXT[],
    "waterType" TEXT NOT NULL,
    "gathering" INTEGER NOT NULL,

    CONSTRAINT "FishingNode_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "GatheringNode_name_key" ON "GatheringNode"("name");

-- CreateIndex
CREATE UNIQUE INDEX "FishingNode_name_key" ON "FishingNode"("name");
