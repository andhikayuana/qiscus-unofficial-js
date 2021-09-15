import { LoginOrRegisterResponse } from './response'
import { IApiRequest, IRequestMethod } from '../api-request'

export function loginOrRegisterRequest(params: { userId: string, password: string, username: string, avatarUrl: string }): IApiRequest<LoginOrRegisterResponse> {
  return {
    url: '/api/v2.1/rest/login_or_register',
    method: IRequestMethod.Post,
    async format(json) {
      return {} as LoginOrRegisterResponse
    }
  }
}
