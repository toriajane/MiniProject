/*FLEXBOX EXAMPLE*/

  function set_dog_pen_space_around() {
    let dog_pen = document.getElementById("dog-pen");
    dog_pen.style.justifyContent = "space-around";
  }
  function set_dog_pen_space_evenly() {
    let dog_pen = document.getElementById("dog-pen");
    dog_pen.style.justifyContent = "space-evenly";
  }
  function set_dog_pen_space_between() {
    let dog_pen = document.getElementById("dog-pen");
    dog_pen.style.justifyContent = "space-between";
  }
  function set_dog_pen_space_none() {
    let animal_pen = document.getElementById("dog-pen");
    animal_pen.style.justifyContent = "start";
  }

  /*SYNTAX EXAMPLES*/

  function set_background_color() {
    let background_color = document.getElementById("dropdown-maltese");
    let maltese_element = document.getElementById("maltese");
    maltese_element.style.backgroundColor = background_color.value;
  }

  function set_border_style() {
    let border_style = document.getElementById("dropdown-corgi");
    let corgi_element = document.getElementById("corgi");
    corgi_element.style.borderStyle = border_style.value;
  }

  function set_opacity() {
    let opacity = document.getElementById("dropdown-retriever");
    let retriever_element = document.getElementById("retriever_icon");
    retriever_element.style.opacity = opacity.value;
  }

  function set_angle() {
    let angle = document.getElementById("dropdown-terrier");
    let terrier_element = document.getElementById("terrier_icon");
    terrier_element.style.rotate = angle.value;
  }