import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('roles')
export class RolesEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  label: string;
}
