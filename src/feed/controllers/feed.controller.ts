import { Body, Controller, Post } from '@nestjs/common';

import { CreateFeedPostDto } from '../dto/create-post.dto';
import { IFeedPost } from '../models/post.interface';
import { FeedService } from '../services/feed.service';

@Controller('feed')
export class FeedController {
  constructor(private feedService: FeedService) {};

  @Post('create')
  create(@Body() dto: CreateFeedPostDto) {
    return this.feedService.createPost(dto);
  };
};
