export type LoginOrRegisterRequest = {
  userId: string
  password: string
  username: string
  avatarUrl: string
}

export type ResetUserTokenRequest = {
  userId: string
}

export type CreateRoomRequest = {
  name: string
  creator: string
  participantIds: string[],
  avatarUrl?: string
  options?: Record<string, any>
}

export type getOrCreateRoomWithTargetRequest = {
  userIds: string[]
  options?: Record<string, any>
}

export type UpdateRoomRequest = {
  roomId: string
}
