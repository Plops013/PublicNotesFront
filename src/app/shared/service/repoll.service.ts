import { Observable, ReplaySubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RepollService {

  subject: ReplaySubject<any> = new ReplaySubject();
  obs: Observable<any> = this.subject.asObservable();

  notify = (data: any) => {
    this.subject.next(data);
  }

}

