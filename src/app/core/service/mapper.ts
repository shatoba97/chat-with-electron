import { Constructor } from '@angular/material/core/common-behaviors/constructor'

//TODO implement logic for simple mapping or u can use https://github.com/typestack/class-transformer

export const mapFromDto = <T>(dtoModel: {}, _class: Constructor<T>): T => {
  return new _class(dtoModel);
}