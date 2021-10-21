import CreateRegister from '../integration/RegisterProcess';

const createRegister = new CreateRegister;
const data = '../fixtures/testData.json';

describe('user can register to the page', () => {
    it('check the user can filled all field on Gabung', () => {
        cy.fixture(data).then((data) => {
            cy.visit(data.url);
            createRegister.inputEmail(data.email);
            createRegister.inputPassword(data.password);
            createRegister.selectEyeButton();
            createRegister.inputConfirmPassword(data.password);
            createRegister.inputFirstName(data.firstName);
            createRegister.inputLastName(data.lastName);
            createRegister.inputPhoneNumber(data.phoneNumber);
            createRegister.inputResidence(data.residence);
        })
        createRegister.selectButtonSubmit();
    })
})