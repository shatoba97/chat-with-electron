export interface PreviewChatIO {
  id: number;
  chat_name: string;
  last_message?: string;
  icon?: Blob;
  messageCount?: number;
}
