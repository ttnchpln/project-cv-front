import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { HttpClient } from "@angular/common/http"
import { Contact } from "../models/contact.model"

@Injectable({
  providedIn: "root",
})

export class ContactService {

  constructor(private http: HttpClient) {
  }

  private contactUrl = "http://localhost:8080/contact"

  send(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.contactUrl, contact)
  }

}
