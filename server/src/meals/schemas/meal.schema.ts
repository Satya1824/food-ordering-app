import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Drink } from './drink.schema';
import { Label } from './label.schema';

@Schema()
export class Meal extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  starter: string;

  @Prop({ required: true })
  desert: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true, type: [String] })
  labels: string[];

  @Prop({ required: true })
  img: string;

  @Prop({ type: [Drink], default: [] })
  drinks: Drink[];
}

export const MealSchema = SchemaFactory.createForClass(Meal);
