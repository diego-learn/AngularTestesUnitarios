import {Component} from '@angular/core';
import {UsuariosService} from './services/usuarios.service';
import {catchError, map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interceptorApp';


  constructor(private usuarioService: UsuariosService) {

    this.usuarioService.obternerUsuarios().pipe(
      map(resp => resp['data']),

      catchError(error => {
        console.error(error);

        throw error;
      })
    ).subscribe(res => {
      console.log(res);
    });

  }


}
