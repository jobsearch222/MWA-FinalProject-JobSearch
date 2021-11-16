import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest} from "@angular/common/http";
import {environment as env} from "../../environments/environment";
import { ActivatedRoute } from '@angular/router'
 
const baseUrl= 'http://localhost:3000/Job/add/Employer'

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor() { }
}
