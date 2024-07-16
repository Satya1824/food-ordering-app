import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Label extends Document {
  @Prop({ required: true })
  label: string;
}

export const LabelSchema = SchemaFactory.createForClass(Label);

export type LabelDocument = Label & Document;
