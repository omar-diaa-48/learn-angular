import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { HeaderComponent } from 'src/app/header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipesItemComponent } from './recipes/recipes-list/recipes-item/recipes-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { CustomComponent } from './custom/custom.component';
import { GameControlComponent } from './custom/game-control/game-control.component';
import { OddComponent } from './custom/odd/odd.component';
import { EvenComponent } from './custom/even/even.component';
import { ElementBehaviorDirective } from './shared/element-behavior.directive';
import { RenderUnlessDirective } from './shared/render-unless.directive';
import { DropdownDirective } from './shared/dropdown.directive';
import { ActiveUsersComponent } from './custom/active-users/active-users.component';
import { InactiveUsersComponent } from './custom/inactive-users/inactive-users.component';
import { UserComponent } from './custom/user/user.component';
import { UsersService } from './services/users.service';
import { LogginService } from './services/logging.service';
import { RecipeService } from './recipes/recipe.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { RecipeResolver } from './resolvers/recipe.resolver';
import { LoaderComponent } from './shared/loader/loader.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './custom/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    RecipesItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    CustomComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    ElementBehaviorDirective,
    RenderUnlessDirective,
    DropdownDirective,
    ActiveUsersComponent,
    InactiveUsersComponent,
    UserComponent,
    NotFoundComponent,
    LoaderComponent,
    FormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [UsersService, LogginService, RecipeService, ShoppingListService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
