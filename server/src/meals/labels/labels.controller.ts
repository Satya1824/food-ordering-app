import { Controller, Get } from '@nestjs/common';
import { LabelsService } from './labels.service';
import { Label } from '../schemas/label.schema';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Labels')
@Controller('labels')
export class LabelsController {
  constructor(private readonly labelsService: LabelsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all labels' })
  @ApiResponse({ status: 200, description: 'Return a list of labels.' })
  async getLabels(): Promise<Label[]> {
    return this.labelsService.findAll();
  }
}
