import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MealsService } from './meals.service';
import { MealsController } from './meals.controller';
import { Meal, MealSchema } from './schemas/meal.schema';
import { Drink, DrinkSchema } from './schemas/drink.schema';
import { Label, LabelSchema } from './schemas/label.schema';
import { LabelsModule } from './labels/labels.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Meal.name, schema: MealSchema },
      { name: Drink.name, schema: DrinkSchema },
      { name: Label.name, schema: LabelSchema },
    ]),
    LabelsModule,
  ],
  providers: [MealsService],
  controllers: [MealsController],
  exports: [MealsService],
})
export class MealsModule {}
