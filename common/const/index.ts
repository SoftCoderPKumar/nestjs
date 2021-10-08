export interface BootstrapAppOptions {
    description: string
    route: string
    title: string
    version?: string
    port: number
    cors?: {
      origin?: string[] | string
      credentials?: boolean
    }
    tag: string[]
    transform?: boolean
    paramWhiteList?: boolean
    paramForbidNonWhiteList?: boolean
  }
  