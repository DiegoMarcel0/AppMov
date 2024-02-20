import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  private objectSource = new BehaviorSubject<{}>({});
  private listSource = new BehaviorSubject<any{}>({});
  constructor() { }
}
