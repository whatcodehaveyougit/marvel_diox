Feature: Home Component

  Scenario: The data from the Marvel API loads correctly
    Given the user visits the page "/"
    Then the user should see the string "3-D Man"
    And the user should see the string "A-Bomb (HAS)"
    And the user should see the string "A.I.M."

  Scenario: The home page search box works filters monsters (regardless of cAsE)
    Given the user visits the page "/"
    Then the user should see the string "A-Bomb"
    When the user types "3-d m" into the input element with the name "search-monsters"
    Then the user should see the string "3-D Man"
    And the user should not see the string "A-Bomb"
