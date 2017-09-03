import { UserDetailsComponent } from "./user-details/user-details.component";
import { UsersComponent } from "./users/users.component";
import { TodosComponent } from "./todos/todos.component";
import { HomeComponent } from "./home/home.component";

export const routes = [
  { path: 'users/:id', component: UserDetailsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'todos', component: TodosComponent },
  { path: '', component: HomeComponent },
];