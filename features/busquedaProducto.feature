Feature: Búsqueda de productos en la tienda AskOmDch
  Como usuario quiero poder buscar productos en la tienda para validar los resultados según lo ingresado.

  Background:
    Given que el usuario ha iniciado sesión con username "Vicente" y password "1234"
    And está en la página "Store"

  Scenario: Buscar números "1212"
    When ingresa "1212" en la caja de búsqueda
    And hace click en el botón de búsqueda
    Then debería ver el mensaje "No products were found matching your selection."

  Scenario: Buscar caracteres especiales "$$%%&&"
    When ingresa "$$%%&&" en la caja de búsqueda
    And hace click en el botón de búsqueda
    Then debería ver el mensaje "No products were found matching your selection."

  Scenario: Buscar producto inexistente "video juego"
    When ingresa "video juego" en la caja de búsqueda
    And hace click en el botón de búsqueda
    Then debería ver el mensaje "No products were found matching your selection."

  Scenario: Buscar producto existente "blue jeans"
    When ingresa "blue jeans" en la caja de búsqueda
    And hace click en el botón de búsqueda
    Then debería ver el mensaje "Showing all 3 results"
