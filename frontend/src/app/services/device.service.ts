import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { Device } from '../model/device.model';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  private baseUrl: string;

  constructor(private http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
    this.baseUrl = baseUrl ? baseUrl : '';
  }
  getDevices(): Observable<Array<Device>> {
    return this.http.get<Array<Device>>(this.baseUrl + "/getDevices");
  }
  getDevice(id: number): Observable<Device> {
    return this.http.get<Device>(this.baseUrl + "/getDevice/" + id);
  }
  updateDevice(device: Device) {
    let url = this.baseUrl + '/updateDevice';
    console.log("updatedevice: ", device, url);
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };

    return this.http.put(url, JSON.stringify(device), options);
  }
  searchDevices(name: string): Observable<Array<Device>> {
    return this.http.get<Array<Device>>(this.baseUrl + "/getProducts");
  }
}
