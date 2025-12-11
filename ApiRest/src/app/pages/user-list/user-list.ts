import { Component, inject } from '@angular/core';
import { Iusuario } from '../../interfaces/iusuario';
import { UsuarioService } from '../../services/usuario-service';
import { UserCard } from "../../components/user-card/user-card";

@Component({
  selector: 'app-user-list',
  imports: [UserCard],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {

  arrUSuarios: Iusuario[] = [];
  Susuaruis = inject(UsuarioService);
  constructor(){
    this.arrUSuarios = [];
  }

  async eliminarUsuario(_id: string): Promise<void> {
    try{
      await this.Susuaruis.eliminarUsuarioID(_id);
      this.arrUSuarios = this.arrUSuarios.filter(usuario => usuario._id !== _id);
    }catch(error){
      console.error('Error al eliminar el usuario:', error);
    }
  }

  async ngOnInit(): Promise<void> {
    try{
      this.arrUSuarios = await this.Susuaruis.getAllUsers();
    }catch(error){
      console.error('Error al obtener los usuarios:', error);
    }
  }
}
