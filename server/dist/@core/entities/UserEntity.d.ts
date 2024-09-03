import { UserDTO } from 'src/shared/dtos/UserDTO';
export declare class UserEntity {
    id: number;
    name: string;
    email: string;
    password: string;
    constructor(userDTO: UserDTO);
}
