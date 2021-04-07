import {
  Component,
  OnChanges,
  Input
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnChanges {
  @Input() user:User;
  editUser = new FormGroup({
    firstName: new FormControl('', [ Validators.required ])
  });

  ngOnChanges() {
    if(this.user)
      this.editUser.patchValue({
        firstName: this.user.firstName
      });
  }

}
