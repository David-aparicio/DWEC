import { Component, inject } from '@angular/core';
import { Iusuario } from '../../interfaces/iusuario';
import { UsuarioService } from '../../services/usuario-service';
import { UserCard } from "../../components/user-card/user-card";
import { Iapi } from '../../interfaces/iapi';

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

 

  async ngOnInit(): Promise<void> {
    try{
      this.arrUSuarios = await this.Susuaruis.getAllUsers();
    }catch(error){
      console.error('Error al obtener los usuarios:', error);
    }
  }
}
