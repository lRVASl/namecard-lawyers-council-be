import { Injectable } from '@nestjs/common';
import { NameCardRepository } from '@namecard-lawyers/share';

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
    const condition = {
      where: {
        id: Number(id),
      },
    } as Prisma.namecardDeleteArgs;
    const deleteuser = await this.namecardRepo.delete(condition);
    if (deleteuser) {
      const conditioniamge = {
        where: { images_namecard: namecardID },
      } as Prisma.images_namecardDeleteManyArgs;
      const deleteImage = await this.namecardRepo.deleteMany(conditioniamge);
      return deleteImage;
    }
    return deleteuser;
  }

  async removeImage(images_ghs: string) {
    const condition = {
      where: { images_namecard: images_ghs },
    } as Prisma.images_namecardDeleteManyArgs;
    return await this.namecardRepo.deleteMany(condition);
  }
}
