import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"



Given('A user that open flight page to buy some tickets',()=>{
    cy.visit('file:///C:/Users/ugoga/Downloads/site/flights.html')

})

When ('User fill flight for particular destiny',()=>{

    cy.get('[name="flight-from"]').select("Merida")
    cy.get('[name="flight-to"]').select("CDMX")
    cy.get('input#departing').type('08/12/2023')
    cy.get('input#returning').type('08/18/2023')
    cy.get('select#travelers').type('1')
    
})

When('When User click on search , a list of prices are displayed',()=>{
    cy.get('button.btn')
})


When('And Click on ascendant order button',()=>{
    cy.get('select#sort').select('Price ascending')
})

Then('Flight should be order in ascendant mode',()=>{
let elements
elements= cy.get('span.price').invoke('text')

})