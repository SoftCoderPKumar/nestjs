
import { NotificationModule } from './notification.module';
import bootstrap from 'common/main'
import { APP_CONFIG } from '../../../common/app-config'

bootstrap(NotificationModule, APP_CONFIG.NOTIFICATION)
  .then()
  .catch((err) => console.error(err))
