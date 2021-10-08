import bootstrap from 'common/main'
import { APP_CONFIG } from '../../../common/app-config'
import { AppModule } from './app.module'

bootstrap(AppModule, APP_CONFIG.ANCHOR_POINT)
  .then()
  .catch((err) => console.error(err))
