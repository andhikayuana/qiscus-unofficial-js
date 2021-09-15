export type Response<T> = {
  status: number
  results: T
}

export type User<Extras = Record<string, any>> = {
  id: string
  username: string
  active: boolean
  avatarUrl: boolean
  extras: Extras
}

export type LoginOrRegisterResponse = Response<{
  user: User
}>

export type GetUserProfileResponse = Response<{
  user: User
}>

export type GetUserTokenResponse = Response<{
  token: string
}>


export type Room = {
  id: string
  name: string
  avatarUrl: string
  channelId: string
  type: string
  options: Record<string, any>
}

export type GetRoomsInfoResponse = Response<{
  rooms: Room[]
}>

export type UpdateRoomResponse = Response<{
  changed: boolean
  room: Room
}>

export type GetRoomParticipantsResponse = Response<{
  participants: User[]
}>
export type AddRoomParticipantsResponse = Response<{
  participantsAdded: User[]
}>
export type RemoveRoomParticipantsResponse = Response<{
  participantsRemoved: User[]
}>

export type GetUserRoomsResponse = Response<{
  meta: {
    currentPage: number
    totalRoom: number
  }
  rooms: Room[]
}>

export type Comment<E = Record<string, any>, P = Record<string, any>> = {
  id: number
  message: string
  timestamp: Date,
  type: string
  user: User
  extras: Record<string, any>
  payload: P
}
export type PostCommentResponse = Response<{
  comment: Comment
}>
export type LoadCommentsResponse = Response<{
  comments: Comment<Record<string, any>, {
    objectEmail: string
    objectEmailList: any
    objectUsername: string
    objectUsernameList: any
    payload: { type: string }
    roomName: string
    subjectEmail: string
    subjectUsername: string
    type: string
  } | Record<string, any> | undefined>[]
}>

export type PostSystemEventMessageResponse = Response<{
  comment: Comment<{
    qiscusIosPn: { aps: { contentAvailability: number } }
  }, {
    objectEmail: string
    objectEmailList: any
    objectUsername: string
    objectUsernameList: any
    roomName: string
    subjectEmail: string
    subjectUsername: string
    type: string
    payload: {
      adminEmail: string
      type: string
    }
  }>
}>

export type GetUnreadCountResponse = Response<{
  unreadCounts: {
    roomId: string
    unreadCount: number
  }[]
}>

export type GetUsersResponse = Response<{
  meta: {
    totalData: number
    totalPage: number
  }
  users: User<{ type: string, userBubbleColor: any }>[]
}>

export type LoadCommentsWithRangeResponse = Response<{
  comments: Comment<{ action: string }>[]
}>

export type GetOrCreateChannelResponse = Response<{
  changed: boolean
  room: Room
}>

export type GetAverageReplyTimeUserResponse = Response<{
  data: {
    duration: {
      average: number
      longest: number
      shortest: number
    }
    userId: string
  }
  endTime: string
  startTime: string
}>

export type GetWebhookLogsResponse = Response<{
  webhookLogs: {
    attemptedAt: Date,
    endpoint: string
    errorMessage: string
    id: number
    isSuccess: boolean
    requestBody: Date
    responseBody: string
    responseCode: number
  }[]
}>

export type DeactivateUserResponse = Response<{
  message: string
}>

export type ReactivateUserResponse = Response<{
  message: string
}>
