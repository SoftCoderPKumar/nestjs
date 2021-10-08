import { BootstrapAppOptions } from '../const'

export const APP_CONFIG: { [key: string]: BootstrapAppOptions } = {
  ANCHOR_POINT: {
    description: 'Documentation for Anchor Point API',
    port: 5100,
    route: 'anchor-point',
    title: 'Anchor Point API',
    tag: ['Anchor Point'],
    transform: true,
    paramWhiteList: true,
    paramForbidNonWhiteList: true
  },
  NOTIFICATION: {
    description: 'Documentation for Notification API',
    port: 5200,
    route: 'notification',
    title: 'Notification API',
    tag: ['Notification'],
    transform: true,
    paramWhiteList: true,
    paramForbidNonWhiteList: true
  }
}
