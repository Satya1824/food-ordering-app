import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Meal } from './schemas/meal.schema';
import { Drink } from './schemas/drink.schema';
import { Label } from './schemas/label.schema';

@Injectable()
export class MealsService {
  constructor(@InjectModel(Meal.name) private mealModel: Model<Meal>) {}

  async findAll(
    page: number = 1,
    limit: number = 10,
  ): Promise<{ total: number; meals: Meal[] }> {
    const skip = (page - 1) * limit;
    const [total, meals] = await Promise.all([
      this.mealModel.countDocuments(),
      this.mealModel.find().skip(skip).limit(limit).exec(),
    ]);
    return { total, meals };
  }

  async findByTag(
    tag: string,
    page: number = 1,
    limit: number = 10,
  ): Promise<{ total: number; meals: Meal[] }> {
    const skip = (page - 1) * limit;
    const [total, meals] = await Promise.all([
      this.mealModel.countDocuments({ labels: tag }),
      this.mealModel.find({ labels: tag }).skip(skip).limit(limit).exec(),
    ]);
    return { total, meals };
  }
}
