import {
  Component,
  OnChanges,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { UpdateDataService } from '../../services';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnChanges {
  @Input() user:User;
  @Output() updatedUser = new EventEmitter<User>();

  editUser = new FormGroup({
    firstName: new FormControl('', [ Validators.required ])
  });

  constructor( private updateService: UpdateDataService ) {}

  ngOnChanges() {
    if(this.user)
      this.editUser.patchValue({
        firstName: this.user.firstName
      });
  }

  saveUserData() {
    console.log(this.editUser.value)
    this.updateService.update(this.user.id, this.editUser.value)
      .subscribe(resp => {
        console.log('UPDATE:resp', resp);
        this.updatedUser.emit(resp);
      });
  }

}
