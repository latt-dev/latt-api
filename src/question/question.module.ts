import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { QuestionController } from './question.controller';
import { QuestionService } from './question.service';
import { QuestionEntity } from './question.entity';

@Module({
  imports: [TypeOrmModule.forFeature([QuestionEntity])],
  controllers: [QuestionController],
  providers: [QuestionService],
})
export class QuestionModule {}
