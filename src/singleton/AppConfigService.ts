export class AppConfigService {
  private static instance: AppConfigService | null = null;

  private constructor(
    public readonly companyName: string,
    public readonly footer: string
  ) {}

  public static getInstance(
    companyName: string = "Default Company",
    footer: string = "Default Footer"
  ): AppConfigService {
    if (!AppConfigService.instance) {
      AppConfigService.instance = new AppConfigService(companyName, footer);
    }
    return AppConfigService.instance;
  }
}