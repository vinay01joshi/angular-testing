import { routes } from './app.route';
import { UsersComponent } from "./users/users.component";

describe('routes',()=>{
    it('shoud contain a route for /user',()=>{
        expect(routes).toContain({ path: 'users' , component: UsersComponent });
    });
})