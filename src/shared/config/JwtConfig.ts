export class JwtConfig {
  public static SECRET = 'secret';
  public static EXPERED_TIME = '3600s';
  public static REGISTER = {
    global: true,
    secret: JwtConfig.SECRET,
    signOptions: { expiresIn: JwtConfig.EXPERED_TIME },
  };
}
