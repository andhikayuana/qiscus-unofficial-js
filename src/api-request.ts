
export interface IApiRequest<Result> {
  readonly url: string
  readonly method: IRequestMethod
  readonly body?: Record<string, any>
  readonly params?: Record<string, any>

  format(json: Record<string, any>): Promise<Result>
}

export enum IRequestMethod {
  Get = 'get',
  Post = 'post',
  Patch = 'patch',
  Put = 'put',
  Delete = 'delete',
}
