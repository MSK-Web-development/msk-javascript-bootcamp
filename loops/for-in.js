for (variable in object)
  statement

  
Example:-
  /*for-in loop in object*/
  const person = {
    name: 'Suraj',
    age: 18
  };

  for (let key in person)
    console.log(key, person[key])


  /*for-in loop in array*/
  const colors = ['red', 'green', 'blue'];
  
  for (let index in colors)
    console.log(index)


/* Mostly for-in loop is used to iterate properties of an **Object** */
