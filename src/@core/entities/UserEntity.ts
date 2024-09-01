import { UserDTO } from 'src/shared/dtos/UserDTO';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  constructor(userDTO: UserDTO) {
    this.name = userDTO?.name;
    this.email = userDTO?.email;
    this.password = userDTO?.password;
  }
}
