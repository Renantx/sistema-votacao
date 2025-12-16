import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'https://1portodos.com.br/ResidencialVillage/autenticador.php';

  constructor(private http: HttpClient) { }

  autenticarUsuario(usuario: string, senha: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    const body = {
      usuario: usuario,
      senha: senha
    };

    return this.http.post<any>(this.apiUrl, body, { headers });
  }
}
