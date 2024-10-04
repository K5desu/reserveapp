-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "mail" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reserve" (
    "id" SERIAL NOT NULL,
    "author_id" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "date" TEXT NOT NULL,
    "starttime" TEXT NOT NULL,
    "finishtime" TEXT NOT NULL,
    "room_number" TEXT NOT NULL,
    "isRenatal" BOOLEAN NOT NULL,

    CONSTRAINT "reserve_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "news" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "news_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_mail_key" ON "user"("mail");

-- AddForeignKey
ALTER TABLE "reserve" ADD CONSTRAINT "reserve_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
