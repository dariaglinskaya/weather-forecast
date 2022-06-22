import { registerDecorator, ValidationOptions } from 'class-validator';
import { dayDiffFromNow } from '../utils/utils';

export function IsInDaysRange(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'isInDaysRange',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: string) {
          const dayDiff = dayDiffFromNow(new Date(value));
          return dayDiff <= 7 && dayDiff >= 0;
        },
        defaultMessage() {
          return 'The given date is out of the 7 days range from the current day';
        },
      },
    });
  };
}
