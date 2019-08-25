import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

export class EventBus {
  private bus = new Subject<{event: string, data: any}>();


  public announce(event: string, data?: any) {
    this.bus.next({event: event, data: data});
  }

  public listen(event: string): Observable<any> {
    return this.bus.asObservable().filter(item => item.event === event)
      .map(item => item.data);
  }
}
