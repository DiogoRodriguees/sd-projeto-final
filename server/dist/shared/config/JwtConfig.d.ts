export declare class JwtConfig {
    static SECRET: string;
    static EXPERED_TIME: string;
    static REGISTER: {
        global: boolean;
        secret: string;
        signOptions: {
            expiresIn: string;
        };
    };
}
