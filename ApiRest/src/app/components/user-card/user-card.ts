import { Component, inject, Input } from '@angular/core';
import { UsuarioService } from '../../services/usuario-service';
import { Iusuario } from '../../interfaces/iusuario';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css',
})
export class UserCard {

  sUsuarios = inject(UsuarioService);
  @Input() usuario!: Iusuario;

    // deleteUsuario(usuario: string): void {
    //  // this.sUsuarios.eliminarUsuarioID(usuario._id)
    //     .then(() => {
    //       console.log(`Usuario con ID ${id} eliminado correctamente.`);
    //     })
    //     .catch((error) => {
    //       console.error('Error al eliminar el usuario:', error);
    //     });
    // }
}
