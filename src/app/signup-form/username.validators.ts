//import { } from './username.validators';
import { AbstractControl, ValidationErrors, } from '@angular/forms';


export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0)
            return { cannotContainSpace: true };

        return null;
    }

    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            
            console.log('>>',control.value)
            setTimeout(() => {

                if (control.value === 'mosh'){
                    console.log('>>----------:',control.value)
                    
                    resolve({ shouldBeUnique: true });
                }
                    
                else
                    resolve(null);

            }, 2000);

        });



    }
}
