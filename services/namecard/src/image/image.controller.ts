import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
} from '@nestjs/common';
import { ImageService } from './image.service';
import * as path from 'path';
import { Response } from 'express';

@Controller('api/image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Get(':image')
  async findById(@Res() res: Response, @Param('image') image: string) {
    const filePath = path.resolve(__dirname, '..', 'images', `${image}`);
    res.set('Content-Type', 'image/png');
    res.set('Access-Control-Allow-Origin', '*');
    res.type('image/png');
    return res.sendFile(filePath);
  }
}
