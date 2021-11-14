import { SystemDataFormIO } from './system-data-form.modal';
import { UserDataFormIO } from './user-data-form.modal';

export interface RegisterUserFormIO {
  userDataForm: UserDataFormIO;
  systemDataForm: SystemDataFormIO;
}