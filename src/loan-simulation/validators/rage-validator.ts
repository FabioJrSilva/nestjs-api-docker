import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ name: 'Rage', async: false })
export class RageValidator implements ValidatorConstraintInterface {
  validate(value: number, args: ValidationArguments) {
    return value >= 1000 && value <= 10000; // for async validations you must return a Promise<boolean> here
  }

  defaultMessage(args: ValidationArguments) {
    // here you can provide default error message if validation failed
    return 'Invalid rage!';
  }
}
