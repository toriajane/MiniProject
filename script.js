/*FLEXBOX EXAMPLE*/

function set_animal_pen_space_around() {
    let animal_pen = document.getElementById("animal-pen");
    animal_pen.style.justifyContent = "space-around";
  }
  function set_animal_pen_space_evenly() {
    let animal_pen = document.getElementById("animal-pen");
    animal_pen.style.justifyContent = "space-evenly";
  }
  function set_animal_pen_space_between() {
    let animal_pen = document.getElementById("animal-pen");
    animal_pen.style.justifyContent = "space-between";
  }
  function set_animal_pen_space_none() {
    let animal_pen = document.getElementById("animal-pen");
    animal_pen.style.justifyContent = "start";
  }

  /*SYNTAX EXAMPLES*/

  function set_background_color() {
    let background_color = document.getElementById("dropdown-hamster");
    let hamster_element = document.getElementById("hamster");
    hamster_element.style.backgroundColor = background_color.value;
  }

  function set_border_style() {
    let border_style = document.getElementById("dropdown-turtle");
    let turtle_element = document.getElementById("turtle");
    turtle_element.style.borderStyle = border_style.value;
  }