import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { I18nService, I18nLang } from 'nestjs-i18n';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly i18n: I18nService ,
  ) {}

  @Get()
  async getHello(
    @I18nLang() lang: string,
  ): Promise<string> {
    console.log('Language requested:', lang);
    console.log('this.i18n.getTranslations():', await this.i18n.getTranslations());
    const translated = await this.i18n.translate('HELLO', { lang });
    console.log('translated HELLO:', translated);
    return translated as any;
  }
}