import {
  Component,
  Input,
  OnChanges,
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
  selector: 'app-field-update',
  templateUrl: './field-update.component.html',
  styleUrls: ['./field-update.component.scss']
})
export class FieldUpdateComponent implements OnChanges {
  @Input() user: User;
  @Input() labelToken: string;
  @Output() updatedUser = new EventEmitter<User>();

  editUser = new FormGroup({
    fieldName: new FormControl('', [ Validators.required ])
  });

  constructor( private updateService: UpdateDataService ) {}

  ngOnChanges() {
    if(this.user)
      this.editUser.patchValue({
        fieldName: this.user[this.labelToken]
      });
  }

  saveUserData() {
    console.log(this.editUser.value)
    let data = {};
    data[this.labelToken] = this.editUser.get('fieldName').value;
    this.updateService.update(this.user.id, data)
      .subscribe(resp => {
        console.log('UPDATE:resp', resp);
        this.user = resp;
        this.updatedUser.emit(resp);
      });
  }
}
