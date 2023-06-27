Feature: Search any flight

Scenario : 
Given A user that open flight page to buy some tickets
And User fill flight for particular destiny
When User click on search , a list of prices are displayed
And Click on ascendant order button
Then Flight should be order in ascendant mode
