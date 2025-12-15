import { Component, inject, Input } from '@angular/core';
import { UsuarioService } from '../../services/usuario-service';
import { Iusuario } from '../../interfaces/iusuario';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-user-card',
  imports: [RouterLink],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css',
})
export class UserCard {

  sUsuarios = inject(UsuarioService);
  @Input() usuario!: Iusuario;

    async eliminarUsuario(usuario: Iusuario){

      const response = await this.sUsuarios.eliminarUsuarioID(usuario._id);
      if(response){
        alert(`Usuario ${usuario.first_name} eliminado correctamente.`);
      }else{
        alert(`Error al eliminar el usuario ${usuario.first_name}.`);
      }
  }
}
