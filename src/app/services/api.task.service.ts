import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskModel } from 'src/model/task.model';

@Injectable({
  providedIn: 'root',
})
export class ApiTaskService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/tasks';
  }

  getAll(): Observable<TaskModel[]> {
    const response = this.http.get(this.url);
    return response as Observable<TaskModel[]>;
  }

  async get(id: TaskModel['id']): Promise<TaskModel> {
    const response = await fetch(this.url + (id as string));
    return response.json() as Promise<TaskModel>;
  }

  async create(item: Partial<TaskModel>): Promise<TaskModel> {
    const response = await fetch(this.url, {
      method: 'POST',
      body: JSON.stringify(item),
      headers: { 'Content-Type': 'application/json' },
    });
    return response.json() as Promise<TaskModel>;
  }

  async update(
    id: TaskModel['id'],
    item: Partial<TaskModel>
  ): Promise<TaskModel> {
    const response = await fetch(this.url + (id as string), {
      method: 'PATCH',
      body: JSON.stringify(item),
      headers: { 'Content-Type': 'application/json' },
    });
    return response.json() as Promise<TaskModel>;
  }

  async delete(id: TaskModel['id']): Promise<boolean> {
    const response = await fetch(this.url + (id as string), {
      method: 'DELETE',
    });
    return response.ok;
  }
}
