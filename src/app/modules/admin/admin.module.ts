import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminDashboardComponent} from './components/admin-dashboard/admin-dashboard.component';
import {PostTaskComponent} from './components/post-task/post-task.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {MatButton, MatIconAnchor, MatIconButton} from "@angular/material/button";
import {NzFormControlComponent, NzFormItemComponent, NzFormLabelComponent} from "ng-zorro-antd/form";
import {NzInputDirective} from "ng-zorro-antd/input";
import {NzDatePickerComponent} from "ng-zorro-antd/date-picker";
import {NzOptionComponent, NzSelectComponent} from "ng-zorro-antd/select";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {MatCard, MatCardContent, MatCardHeader} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";
import {UpdateTaskComponent} from './components/update-task/update-task.component';
import {MatIcon} from "@angular/material/icon";
import { MatIconModule } from '@angular/material/icon';
import {NzIconDirective} from "ng-zorro-antd/icon";
import {NzTooltipDirective} from "ng-zorro-antd/tooltip";
import { ViewTaskDetailsComponent } from './components/view-task-details/view-task-details.component';
import {MatMenu, MatMenuItem} from "@angular/material/menu";
import {NzCardComponent, NzCardMetaComponent} from "ng-zorro-antd/card";
import {NzColDirective} from "ng-zorro-antd/grid";
import {NzAvatarComponent} from "ng-zorro-antd/avatar";
import {NzDividerComponent} from "ng-zorro-antd/divider";
import { GetUsersComponent } from './components/get-users/get-users.component';
import {NzTableComponent} from "ng-zorro-antd/table";


@NgModule({
  declarations: [
    AdminDashboardComponent,
    PostTaskComponent,
    UpdateTaskComponent,
    ViewTaskDetailsComponent,
  ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        ReactiveFormsModule,
        MatInput,

        MatDatepicker,
        MatDatepickerInput,
        MatOption,
        MatSelect,
        MatDatepickerToggle,
        MatButton,
        NzFormItemComponent,
        NzFormLabelComponent,
        NzFormControlComponent,
        NzInputDirective,
        NzDatePickerComponent,
        NzSelectComponent,
        NzOptionComponent,
        NzButtonComponent,
        MatCard,
        MatDivider,
        MatIcon,
        MatIconButton,
        MatIconAnchor,
        MatIconModule,
        NzIconDirective,
        NzTooltipDirective,
        MatMenu,
        MatMenuItem,
        MatCardContent,
        MatLabel,
        MatFormField,
        NzCardComponent,
        NzColDirective,
        MatCardHeader,
        NzCardMetaComponent,
        NzAvatarComponent,
        NzDividerComponent,
        NzTableComponent

    ],
})
export class AdminModule { }
