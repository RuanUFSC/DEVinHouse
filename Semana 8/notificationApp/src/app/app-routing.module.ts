import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
	{
		path: 'home',
		children: [
			{
				path: '',
				component: HomeComponent
			},
			{
				path: 'lidos',
				component: HomeComponent
			},
			{
				path: 'nao-lidos',
				component: HomeComponent
			},
			{
				path: 'todos',
				component: HomeComponent
			}
		]
	},
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
  	{
		path: 'sobre',
		component: AboutComponent
	},
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule { }
