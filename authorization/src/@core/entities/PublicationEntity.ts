import { PublicationDTO } from 'src/shared/dtos/PublicationDTO';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('publications')
export class PublicationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  autorId: number;

  @Column()
  title: string;

  @Column()
  content: string;

  constructor(title: string, content: string, autorId: number) {
    this.title = title;
    this.content = content;
    this.autorId = autorId;
  }

  static create(publicationDTO: PublicationDTO, autorId: number) {
    const { title, content } = publicationDTO;
    return new PublicationEntity(title, content, autorId);
  }
}
