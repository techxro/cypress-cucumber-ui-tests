import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import AddAssetPage from "../../../../pages/addAsset.page";

describe(`User tries to add an asset with incorrect format`, () => {
    const addAsset = new AddAssetPage();

Given(`user clicks on add assets`, () => {    
    addAsset.goToAddAsset()
})

When(`user enter asset number in incorrect format`, ()=>{
    cy.fixture(addAsset.selector.dataFile).then((data=>{
        addAsset.addNewAsset(data.assetNumberInCorrectFomat)
    }))
   
})

Then(`asset should be added and message displayed incorrect format`, ()=>{
    expect(cy.get(addAsset.selector.invalidFormatMessage).should('have.text', 'Incorrect format'))
})
})