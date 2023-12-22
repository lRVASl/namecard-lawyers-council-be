-- CreateTable
CREATE TABLE "images_namecard" (
    "id" SERIAL NOT NULL,
    "idfile" VARCHAR(200) NOT NULL,
    "path" VARCHAR(200) NOT NULL,
    "namefile" VARCHAR(200) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP NOT NULL,
    "images_namecard" TEXT
);

-- CreateTable
CREATE TABLE "namecard" (
    "id" SERIAL NOT NULL,
    "member_number" VARCHAR(255) NOT NULL,
    "name_th" VARCHAR(255) NOT NULL,
    "lastname_th" VARCHAR(255) NOT NULL,
    "name_en" VARCHAR(255) NOT NULL,
    "lastname_en" VARCHAR(255) NOT NULL,
    "position" TEXT NOT NULL,
    "phone_number" VARCHAR(50),
    "email" VARCHAR(50),
    "line" VARCHAR(50),
    "facebook" VARCHAR(100),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "namecard_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "images_namecard_id_key" ON "images_namecard"("id");

-- CreateIndex
CREATE UNIQUE INDEX "namecard_id_key" ON "namecard"("id");

-- CreateIndex
CREATE UNIQUE INDEX "namecard_member_number_key" ON "namecard"("member_number");

-- AddForeignKey
ALTER TABLE "images_namecard" ADD CONSTRAINT "images_namecard_images_namecard_fkey" FOREIGN KEY ("images_namecard") REFERENCES "namecard"("member_number") ON DELETE SET NULL ON UPDATE CASCADE;
