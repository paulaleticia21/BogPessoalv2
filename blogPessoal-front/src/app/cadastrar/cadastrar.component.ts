import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AppRoutingModule } from './../app-routing.module';
import { AuthService } from './../service/auth.service';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  user: User = new User
  confirmarSenha: string
  TipoUsuario: string

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
  ngOnInit() {
    window.scroll(0, 0)


  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value

  }
  tipoUser(event: any) {
    this.TipoUsuario = event.target.value
  }

  cadastrar() {
    this.user.tipo = this.TipoUsuario

    if (this.user.senha != this.confirmarSenha) {
      alert('A senha estão incorretas.')
    }

    else {
      this.authService.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp
        this.router.navigate(['/entrar'])
        alert('Usuário cadastrado com sucesso!')
      })
    }



  }

}


