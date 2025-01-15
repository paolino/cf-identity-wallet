Feature: IndividualIdentifierEdit

  Background:
    Given user is onboarded with skipped password creation

  Scenario: IndividualIdentifierEdit - User can cancel edit for KERI default identifier
    Given identifier is created and user can see Card Details screen for KERI
    When user tap Options button on Card Details screen
    And user tap Edit identifier option from Identifier Options modal
    And user modify display name on Edit Identifier modal
    And user tap Cancel button on Identifier Edit modal
    Then user can see Card Details screen for KERI

  Scenario: IndividualIdentifierEdit - User can change display name for KERI default identifier
    Given identifier is created and user can see Card Details screen for KERI
    When user tap Options button on Card Details screen
    And user tap Edit identifier option from Identifier Options modal
    And user modify display name on Edit Identifier modal
    And user tap Confirm Changes button on Edit Identifier modal
    Then user can see toast message about updated identifier
    And user can see Card Details screen with new display name
