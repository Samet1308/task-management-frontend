import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzSpinModule} from "ng-zorro-antd/spin";
import {NzHeaderComponent, NzLayoutModule} from "ng-zorro-antd/layout";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzIconModule} from "ng-zorro-antd/icon";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSelectModule} from "@angular/material/select";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatChipsModule} from "@angular/material/chips";
import {MatMenuModule} from "@angular/material/menu";
import {MatRadioModule} from "@angular/material/radio";
import {MatDividerModule} from "@angular/material/divider";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatDialogModule} from "@angular/material/dialog";
import {MatTableModule} from "@angular/material/table";
import { ViewTaskDetailsComponent } from './components/view-task-details/view-task-details.component';
import {NzAvatarComponent} from "ng-zorro-antd/avatar";
import {NzTooltipDirective} from "ng-zorro-antd/tooltip";


@NgModule({
  declarations: [
    DashboardComponent,
    ViewTaskDetailsComponent
  ],
    imports: [
        CommonModule,
        EmployeeRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        NzButtonModule,
        NzFormModule,
        NzGridModule,
        NzInputModule,
        NzSpinModule,
        NzHeaderComponent,
        NzCardModule,
        NzIconModule,
        NzLayoutModule,
        MatIconModule, MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatToolbarModule,
        MatSelectModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
        MatPaginatorModule,
        MatChipsModule,
        MatMenuModule,
        MatRadioModule,
        MatDividerModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatRadioModule,
        MatDialogModule,
        MatTableModule, NzAvatarComponent, NzTooltipDirective
    ]
})
export class EmployeeModule { }
