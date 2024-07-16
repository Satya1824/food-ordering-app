import { ApiProperty } from '@nestjs/swagger';

export class getMeals {
  @ApiProperty({ type: String, required: false })
  tag?: string;
  @ApiProperty({ type: Number, required: false })
  page?: number;
  @ApiProperty({ type: Number, required: false })
  limit?: number;
}
