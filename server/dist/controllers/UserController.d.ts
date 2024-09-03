import { UserService } from 'src/services/UserModule';
import { ResponseDTO } from 'src/shared/dtos/Response';
import { UserDTO } from 'src/shared/dtos/UserDTO';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    register(userDTO: UserDTO): Promise<ResponseDTO<unknown>>;
    list(): Promise<ResponseDTO<import("../@core/entities/UserEntity").UserEntity[]>>;
    signIn(userDTO: UserDTO): Promise<ResponseDTO<import("../shared/dtos/AuthenticationDTO").AuthenticationDTO>>;
}
