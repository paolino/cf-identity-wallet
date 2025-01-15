Feature: IndividualIdentifierDelete

  Background:
    Given user is onboarded with skipped password creation

  Scenario: IndividualIdentifierDelete - Identifier removed by details screen
    Given user add KERI identifier through plus icon
    When user chose newly created identifier on Identifiers screen
    And tap Delete identifier button on Card Details screen
    And tap Confirm button on alert modal on Identifier Card Details screen
    And user enter passcode on Verify Passcode screen
    Then user can see toast message about deleted identifier on Identifiers screen
    And user can see Add An Identifier button on Identifiers screen

  Scenario: IndividualIdentifierDelete - Identifier removed by options
    Given user add KERI identifier through plus icon
    When user chose newly created identifier on Identifiers screen
    And user tap Options button on Card Details screen
    And tap Delete identifier option from Identifier Options modal
    And tap Confirm button on alert modal on Identifier Card Details screen
    And user enter passcode on Verify Passcode screen
    Then user can see toast message about deleted identifier on Identifiers screen
    And user can see Add An Identifier button on Identifiers screen
