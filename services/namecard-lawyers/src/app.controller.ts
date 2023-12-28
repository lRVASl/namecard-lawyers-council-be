import { Controller, UseFilters } from '@nestjs/common';
import { AppErrorExceptionFilter } from '@namecard-lawyers/share';
import { NamecardService } from './app.service';

@UseFilters(AppErrorExceptionFilter)
@Controller('namecard-lawyers')
export class NamecardController {
  constructor(private namecardService: NamecardService) {}
}
