import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import * as querystring from 'querystring';


@Injectable()
export class HttpService {
    private headers: HttpHeaders;
    constructor(private http: HttpClient,
    ) {
        this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    }
    private handler(error): boolean {
        console.error(error);
        switch (error.status) {
            case 500:
                console.log('Something went wrong in server side', 'danger', 'bottom');
                return true;
            case 400:
                console.log('Validation Error', 'danger', 'bottom');
                return true;
            case 401:
                return true;
            default:
                return false;
        }
    }

    get<T>(endpoint: string, ...params: any[]): Promise<T> {
        for (const param of params) {
            endpoint = endpoint + '/' + param;
        }
        return new Promise<T>((resolve, reject) => {
            this.http.get<T>(endpoint).subscribe(res => {
                resolve(res);
            }, err => {
                if (this.handler(err)) {
                    reject(null);
                } else {
                    reject(err);
                }
            });
        });
    }

    post<T>(endpoint: string, data: any): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            this.http.post<T>(endpoint, JSON.stringify(data), { headers: this.headers }).subscribe(res => {
                resolve(res);
            }, err => {
                if (this.handler(err)) {
                    reject(null);
                } else {
                    reject(err);
                }
            });
        });
    }

    put<T>(endpoint: string, data: any): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            this.http.put<T>(endpoint, JSON.stringify(data), { headers: this.headers }).subscribe(res => {
                resolve(res);
            }, err => {
                if (this.handler(err)) {
                    reject(null);
                } else {
                    reject(err);
                }
            });
        });
    }

    patch<T>(endpoint: string, data?: any): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            this.http.patch<T>(endpoint, JSON.stringify(data), { headers: this.headers }).subscribe(res => {
                resolve(res);
            }, err => {
                if (this.handler(err)) {
                    reject(null);
                } else {
                    reject(err);
                }
            });
        });
    }

    delete<T>(endpoint: string): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            this.http.delete<T>(endpoint).subscribe(res => {
                resolve(res);
            }, err => {
                if (this.handler(err)) {
                    reject(null);
                } else {
                    reject(err);
                }
            });
        });
    }
}
