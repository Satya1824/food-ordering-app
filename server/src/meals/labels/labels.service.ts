import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Label, LabelDocument } from '../schemas/label.schema';

@Injectable()
export class LabelsService {
  constructor(
    @InjectModel(Label.name) private labelModel: Model<LabelDocument>,
  ) {}

  async findAll(): Promise<Label[]> {
    return this.labelModel.find().exec();
  }
}
