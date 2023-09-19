-- CreateTable
CREATE TABLE "arts" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "status" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "arts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "requests" (
    "id" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "paid" BOOLEAN NOT NULL DEFAULT false,
    "artId" TEXT NOT NULL,

    CONSTRAINT "requests_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "arts_name_key" ON "arts"("name");

-- CreateIndex
CREATE UNIQUE INDEX "arts_url_key" ON "arts"("url");

-- AddForeignKey
ALTER TABLE "requests" ADD CONSTRAINT "requests_artId_fkey" FOREIGN KEY ("artId") REFERENCES "arts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
