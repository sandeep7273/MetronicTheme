// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Partials
import { PartialsModule } from '../partials/partials.module';
// Pages
import { CoreModule } from '../../core/core.module';
import { MailModule } from './apps/mail/mail.module';
import { ECommerceModule } from './apps/e-commerce/e-commerce.module';
import { UserManagementModule } from './user-management/user-management.module';
import { MyPageComponent } from './my-page/my-page.component';
import { EditComponent } from './my-page/edit/edit.component'
import { MatTableModule, MatInputModule, MatFormFieldModule, MatButtonModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [MyPageComponent, EditComponent],
	exports: [],
	imports: [
		CommonModule,
		HttpClientModule,
		FormsModule,
		CoreModule,
		MatInputModule,
		MatFormFieldModule,
		MatButtonModule,
		PartialsModule,
		MailModule,
		ECommerceModule,
		UserManagementModule,MatTableModule,
		RouterModule.forChild([
			{
				path: 'pages',
				component: MyPageComponent,
				
			},
			{
				path: 'edit',
				component: EditComponent,
				
			},
		]),
	],
	providers: []
	
})

export class PagesModule {
}
