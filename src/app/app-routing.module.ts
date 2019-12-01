import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimateComponent } from './animate/animate.component';

const routes: Routes = [
	{
		path: 'main',
		component: AnimateComponent
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
