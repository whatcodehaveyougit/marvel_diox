Feature: Character Component

  Scenario: The user vists the character page
    Given the user visits the page "/"
    When the user clicks on the first element which says "Find out more"
    Then the user should see the string "List of comics for this character:"
    And the user should not see the string "Join 3-D MAN, CLOUD 9, KOMODO, HARDBALL"
    When the user clicks the element which says "Avengers: The Initiative (2007) #19"
    Then the user should see the string "Join 3-D MAN, CLOUD 9, KOMODO, HARDBALL"
