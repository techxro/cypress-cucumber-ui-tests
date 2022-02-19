class AddAssetPage {
    constructor() {
        this.selector = {
            addAssetLink: '[testid="add-asset"]',
            assetInput: '#defaultFormAddAsset',
            dataFile: 'asset.json',
            submit: 'button[type="submit"]',
            validFormatMessage: '.valid-feedback',
            invalidFormatMessage: '.invalid-feedback'
        }
    }

     goToAddAsset() {
        cy.get(this.selector.addAssetLink)
        .click()
    }

    addNewAsset(assetNum){
            cy.get(this.selector.assetInput)
            .type(assetNum)
        cy.get(this.selector.submit)
        .click();
    }
}

export default AddAssetPage