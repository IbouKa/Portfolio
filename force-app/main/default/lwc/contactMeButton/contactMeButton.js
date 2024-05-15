import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import createdLead from '@salesforce/apex/ContactMeController.createdLead';

export default class ContactMeButton extends LightningElement {
    dialog;
    firstName;
    lastName;
    company;
    email;
    description;

    renderedCallback(){
        this.dialog = this.template.querySelector('.contact-dialog');
        this.firstName = this.template.querySelector('.firstName');
        this.lastName = this.template.querySelector('.lastName');
        this.company = this.template.querySelector('.company');
        this.email = this.template.querySelector('.email');
        this.description = this.template.querySelector('.description');
    }

    showDialog(){
        this.dialog.showModal();
    }
    closeDialog(){
        this.dialog.close();
    }
    handleSubmit(event){
        event.preventDefault();
        console.log('handle sub');
        console.log('firstName:',this.firstName.value);
        console.log('lastName:',this.lastName.value);
        console.log('company:',this.company.value);
        console.log('email:',this.email.value);
        console.log('description:',this.description.value);
        createdLead({
            firstName:this.firstName.value,
            lastName:this.lastName.value,
            company:this.company.value,
            email:this.email.value,
            description:this.description.value
        })
        .then(result => {
            console.log('result ',result);
            if (result.status=='Success') {
                this.dispatchEvent(
                    new ShowToastEvent({
                        'variant': 'success',
                        "title": "Success",
                        "message": 'Insert'
                    })
                );
            } else {
                
            }
        })
        .catch(error => {
            console.error('Error mes',error.getMessage());
        });
    }


 

 
}