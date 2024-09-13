import { Injectable } from '@nestjs/common';
import { CassandraService } from 'src/cassandra/cassandra.service';
import { PublicationDTO } from 'src/shared/dtos/PublicationDTO';

@Injectable()
export class PublicationService {
  constructor(private readonly cassandraService: CassandraService) {}

  // Método para listagem de todas as publicações
  public async list() {
    return await this.cassandraService.listPosts();
  }

  // Método responsável por criar uma nova publicação
  public async create(autorId: string, publicationDTO: PublicationDTO) {
    const result = await this.cassandraService.createPost(autorId, publicationDTO.title, publicationDTO.content);
    return result;
  }
}
