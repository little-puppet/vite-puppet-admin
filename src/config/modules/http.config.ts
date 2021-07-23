import { InfoShowType, ContentType } from '@/types/common.d'

export interface HttpConfig {
  baseUrl: string
  timeout: number
  loading?: false
  errorShowType: InfoShowType
  successCode: any
  defaultHeader: object
}

const httpConfig: HttpConfig = {
  baseUrl: import.meta.env.VITE_APP_BASE_URL,
  timeout: 2000,
  loading: false,
  errorShowType: InfoShowType.NOTIFICATION,
  successCode: 0,
  defaultHeader: {
    ContentType: ContentType.FORM
  }
}

export default httpConfig
