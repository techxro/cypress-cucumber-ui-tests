Feature: Add a new asset
Scenario: Add a new asset with unique number
Given user click on add assets
When user enter asset number in correct format
Then asset should be added and message displayed correct format

Scenario: Add a new asset with incorrect format
Given user click on add assets
When user enter asset number in incorrect format
Then asset should be added and message displayed incorrect format