import { Controller, UseFilters } from '@nestjs/common';
import { AppErrorExceptionFilter } from '@osd-register/share';
import { EvoteService } from './app.service';

@UseFilters(AppErrorExceptionFilter)
@Controller('osd-register')
export class EvoteController {
  constructor(private evoteService: EvoteService) {}
}
