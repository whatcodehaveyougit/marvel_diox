Feature: About Component

  Scenario: The About play displays correctly
    Given the user visits the page "/"
    When the user clicks the element which says "About"
    Then the page hyperlink should contain "about"
    When the user visits the page "/about"
    Then the user should see the string "Marvel Comics (or simply Marvel) is an American comic book"
