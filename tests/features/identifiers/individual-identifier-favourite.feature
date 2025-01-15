Feature: IndividualIdentifierFavourite

  Background:
    Given user is onboarded with skipped password creation
    And identifier is created and user can see Card Details screen for KERI

  Scenario: IndividualIdentifierFavourite - Chose favourite identifier
    Given user tap Favourite button on Card Details screen
    When tap Done button on Card Details screen
    Then user can see chosen identifier as his favourite on Identifiers screen
