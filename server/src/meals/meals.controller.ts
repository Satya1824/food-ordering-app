import { Controller, Get, Query } from '@nestjs/common';
import { MealsService } from './meals.service';
import { getMeals } from './dto/meals.dto';

@Controller('meals')
export class MealsController {
  constructor(private readonly mealsService: MealsService) {}

  @Get()
  async getMeals(
    @Query() query: getMeals,
  ): Promise<{ total: number; meals: any[] }> {
    if (query.tag) {
      return this.mealsService.findByTag(query.tag, query.page, query.limit);
    }
    return this.mealsService.findAll(query.page, query.limit);
  }
}
