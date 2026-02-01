import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Receta } from './recetas/receta.entity'; 
import { Ingrediente } from './ingredientes/ingrediente.entity';
import { RecetasModule } from './recetas/receta.module';
import { IngredientesModule } from './ingredientes/ingredientes.module';
import { AuthController } from './auth/auth.controller';
import { I18nModule, 
  QueryResolver, AcceptLanguageResolver,
HeaderResolver, I18nJsonLoader } from 'nestjs-i18n';
import * as path from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({ 
      type: 'sqlite', 
      database: 'database.sqlite', 
      entities: [Receta, Ingrediente], 
      synchronize: true, 
      }), 
    RecetasModule, 
    IngredientesModule,
        I18nModule.forRoot({
      fallbackLanguage: 'en',
      loader: I18nJsonLoader,
      loaderOptions: { path: path.join(__dirname, '/i18n/'), watch: true },
      resolvers: [
        { use: QueryResolver, options: ['lang'] }, // ?lang=es
        AcceptLanguageResolver,                   // header Accept-Language
        new HeaderResolver(['x-lang']),           
      ],
    }),
  ],
  controllers: [
    AppController,
    AuthController
  ],
  providers: [AppService],
})
export class AppModule {}