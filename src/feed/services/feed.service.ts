import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateFeedPostDto } from '../dto/create-post.dto';
import { FeedPostEntity } from '../models/post.entity';
import { IFeedPost } from '../models/post.interface';

@Injectable()
export class FeedService {
  constructor(
    @InjectRepository(FeedPostEntity) private feedPostRepository: Repository<FeedPostEntity>
  ) {};

  async createPost(postDto: CreateFeedPostDto): Promise<IFeedPost> {
    const post = postDto;
    // const post = await this.feedPostRepository.save(postDto);
    return post;
  };
};
