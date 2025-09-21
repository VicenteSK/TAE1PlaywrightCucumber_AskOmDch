Feature: Login en AskOmDch
  Como usuario
  Quiero poder iniciar sesión
  Para acceder a mi cuenta

  Scenario: Login exitoso
    Given que estoy en la página principal "https://askomdch.com/"
    When hago click en el botón de login
    And inicio sesión con username "Vicente" y password "1234"
    Then debería ver en la página el texto "My Account"

  Scenario: Username invalido
    Given que estoy en la página principal "https://askomdch.com/"
    When hago click en el botón de login
    And inicio sesión con username "wrong_username" y password "1234"
    Then debería ver el mensaje de error "Error: The username wrong_username is not registered on this site."

  Scenario: Password invalido
    Given que estoy en la página principal "https://askomdch.com/"
    When hago click en el botón de login
    And inicio sesión con username "Vicente" y password "wrong_password"
    Then debería ver el mensaje de error "Error: The password you entered for the username Vicente is incorrect. Lost your password?"

  Scenario: Username vacío
    Given que estoy en la página principal "https://askomdch.com/"
    When hago click en el botón de login
    And inicio sesión con username "" y password "1234"
    Then debería ver el mensaje de error "Error: Username is required."

  Scenario: Password vacío
    Given que estoy en la página principal "https://askomdch.com/"
    When hago click en el botón de login
    And inicio sesión con username "Vicente" y password ""
    Then debería ver el mensaje de error "Error: The password field is empty."
