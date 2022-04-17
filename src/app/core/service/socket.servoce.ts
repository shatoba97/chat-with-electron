import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  constructor(private socket: Socket){}

  public connect(token: number): any {
    // const newSocket = this.socket.
  }
}