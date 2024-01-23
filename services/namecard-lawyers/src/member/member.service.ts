import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { NameCardRepository } from '@namecard-lawyers/share';
import { promises as fsPromises } from 'fs';

import { Prisma } from '@prisma/client';

@Injectable()
export class MemberService {
  constructor(private readonly namecardRepo: NameCardRepository) {}

  async createMany(condition: Prisma.namecardCreateArgs) {
    return this.namecardRepo.createMany(condition);
  }

  async uploadFilesImages(id: string, body: any) {
    return body.forEach(async (element) => {
      const data = {
        namecard: { connect: { member_number: id } },
        idfile: element.filename,
        path: element.path,
        namefile: element.originalname,
        updatedAt: new Date(),
      } as Prisma.images_namecardCreateInput;
      return await this.namecardRepo.createImagesAppointment(data);
    });
  }

  async findByCondition(conditionscondition: any) {
    const conditions = {
      where: {
        id: Number(conditionscondition.id),
      },
    } as Prisma.namecardFindFirstArgs;
    return this.namecardRepo.findByCondition(conditions);
  }
  async findAll() {
    return this.namecardRepo.findAll();
  }

  async update(condition: Prisma.namecardUpdateArgs) {
    return this.namecardRepo.update(condition);
  }

  async remove(id: number, namecardID: string) {
    const idmember = Number(id);
    const condition = {
      where: {
        id: idmember,
      },
      select: { images_namecard: true },
    } as Prisma.namecardDeleteArgs;
    const product = (await this.namecardRepo.findFirst(condition)) as any;
    if (product?.images_namecard) {
      product?.images_namecard.map((image: any) => this.deleteFile(image.path));
    }
    if (idmember) {
      const conditionImages = {
        where: {
          id: idmember,
        },
      } as Prisma.namecardDeleteArgs;
      const deleteuser = await this.namecardRepo.delete(conditionImages);
      return deleteuser;
    } else {
      throw new HttpException('BAD REQUEST', HttpStatus.BAD_REQUEST);
    }
    return null;
    // if (deleteuser) {
    //   const conditioniamge = {
    //     where: { images_namecard: namecardID },
    //   } as Prisma.images_namecardDeleteManyArgs;
    //   const deleteImage = await this.namecardRepo.deleteMany(conditioniamge);
    //   return deleteImage;
    // }
    // return deleteuser;
  }

  async deleteFile(path: string) {
    const filePath = `${process.env.PATH_MOUNTDIR_IMAGES}/${path}`;
    try {
      await fsPromises.unlink(filePath);
      console.log(`File ${path} has been deleted successfully.`);
    } catch (err) {
      console.error(`Error deleting file ${path}: ${err.message}`);
    }
  }

  async removeImage(images_ghs: string) {
    const condition = {
      where: { images_namecard: images_ghs },
    } as Prisma.images_namecardDeleteManyArgs;
    return await this.namecardRepo.deleteMany(condition);
  }
}
