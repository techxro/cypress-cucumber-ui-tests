import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import AddAssetPage from "../../../../pages/addAsset.page";

describe(`User can add new asset`, () => {
    const addAsset = new AddAssetPage();

    Given(`user click on add assets`, () => {    
        addAsset.goToAddAsset()
    })

    When(`user enter asset number in correct format`, ()=>{
        cy.fixture(addAsset.selector.dataFile).then((data=>{
            addAsset.addNewAsset(data.assetNumberCorrectFomat)
        }))
       
    })

    Then(`asset should be added and message displayed correct format`, ()=>{
        expect(cy.get(addAsset.selector.validFormatMessage).should('have.text', 'Correct format'))
    })

})