import { ImageService } from './image.service';
import { Response } from 'express';
export declare class ImageController {
    private readonly imageService;
    constructor(imageService: ImageService);
    findById(res: Response, image: string): Promise<void>;
}
