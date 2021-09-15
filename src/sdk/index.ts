export class SDKRestApi {
  constructor(readonly appCode: string, readonly secretKey: string) {}

  async loginOrRegister(params: { userId: string, password: string, username?: string, avatarUrl?: string }): Promise<void> {}
	async getUserProfile(userId: string): Promise<void> {}
	async getUserToken(userId: string): Promise<void> {}
	async resetUserToken(userId: string): Promise<void> {}
	async createRoom(params: {name: string, creator: string, participants: string[], avatarUrl?: string, options?: Record<string, any> }): Promise<void> {}
	async getOrCreateRoomWithTarget(userIds: string[], options?: Record<string, any>): Promise<void> {}
	async getRoomsInfo(): Promise<void> {}
	async updateRoom(): Promise<void> {}
	async getRoomParticipants(roomId: string, page?: number, limit?: number): Promise<void> {}
	async addRoomParticipants(roomId: string, userIds: string[]): Promise<void> {}
	async removeRoomParticipants(): Promise<void> {}
	async getUserRooms(userId: string, page?: number, limit?: number): Promise<void> {}
	async postComment(params: {userId: string, roomId: string, message: string, type: string, extras?: Record<string, any>, payload?: Record<string, any>}): Promise<void> {}
	async loadComments(roomId: string, page?: number, limit?: number): Promise<void> {}
	async postSystemEventMessage(params: {roomId:string, message: string, payload?: Record<string, any>, extras?: Record<string, any>}): Promise<void> {}
	async getUnreadCount(userId: string, roomIds?: string[]): Promise<void> {}
	async getUsers(params: {page?: number, limit?: number, showAll?: boolean, orderQuery?: string}): Promise<void> {}
	async loadCommentsWithRange(params: {roomId: string, firstCommentId: string, lastCommentId: string}): Promise<void> {}
	async getOrCreateChannel(params: {uniqueId: string, name?: string, participants?: string[], avatarUrl?: string, options?: Record<string, any>}): Promise<void> {}
	async getAverageReplyTimeUser(params: {userId: string, startTime: string, endTime: string}): Promise<void> {}

  /**
   * Get webhook logs
   *
   * @param {Object} params
   * @param {number} params.page
   * @param {number} params.limit
   * @param {string} params.type -- 'all' (default), 'mobile', 'rest'
   */
	async getWebhookLogs(params: { page?: number, limit?: number, type?: string }): Promise<void> {}
	async deactivateUser(userIds: string[]): Promise<void> {}
	async reactivateUser(userIds: string[]): Promise<void> {}
}
