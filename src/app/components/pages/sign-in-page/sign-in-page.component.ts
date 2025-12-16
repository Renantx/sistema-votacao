import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/shared/services/login.service';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent implements OnInit {

  usuario: string = '';
  senha: string = '';

  constructor(private router: Router,
              private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  redirectToIndex() {
    this.router.navigate(['/inicio']);
  }

  autenticarUsuario() {
    if (!this.usuario.trim() || !this.senha.trim()) {
      alert('Por favor, preencha usuário e senha.');
      return;
    }

    this.loginService.autenticarUsuario(this.usuario, this.senha).subscribe(
      (response) => {
        if (response.success) {
          console.log('Login realizado com sucesso', response);
          // Aqui você pode armazenar o token ou informações do usuário se necessário
          this.router.navigate(['/inicio']); // Redireciona após login bem-sucedido
        } else {
          alert('Usuário não encontrado ou credenciais inválidas.');
        }
      },
      (error) => {
        alert('Erro ao autenticar. Tente novamente.');
      }
    );
  }
}
