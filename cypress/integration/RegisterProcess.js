class CreateRegister {
 getfieldEmail(){return cy.xpath('//input[@id="email"]')};
 getFieldPassword(){return cy.xpath('//input[@id="password"]')};
 getFieldConfirmPassword(){return cy.xpath('//input[@id="confirm-password"]')};
 getFieldFirstName(){return cy.xpath('//*[@id="first-name"]')};
 getFieldLastName(){return cy.xpath('//*[@id="last-name"]')};
 getFieldPhoneNumber(){return cy.xpath('//*[@id="mobile-phone"]')}
 getFieldResidence(){return cy.xpath('//*[@id="residence-city"]')};
 getEyeButton(){return cy.get(':nth-child(3) > .password-container > .show-password > .fa')};
 getButtonSubmit(){return cy.get('.btn')};


 inputEmail(email){
     return this.getfieldEmail()
     .type(`${email}`)
 };

 inputPassword(password){
     return this.getFieldPassword()
     .type(`${password}`)
 };

 inputConfirmPassword(confirm){
     return this.getFieldConfirmPassword()
     .type(`${confirm}`)
 };

 inputFirstName(firstname){
     return this.getFieldFirstName()
     .type(`${firstname}`)
 };

 inputLastName(lastname){
     return this.getFieldLastName()
     .type(`${lastname}`)
 };

 inputPhoneNumber(phonenumber){
     return this.getFieldPhoneNumber()
     .type(`${phonenumber}`)
 };

 inputResidence(residence){
     return this.getFieldResidence()
     .type(`${residence}`)
     .type(`{enter}`)
 };

 selectEyeButton(){
     return this.getEyeButton()
     .click();
 };

 selectButtonSubmit(){
     return this.getButtonSubmit()
     .click({force: true})
 }

}
export default CreateRegister