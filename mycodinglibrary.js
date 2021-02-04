function isTouching(a_x1,b_x2) {
    if (a_x1.x - b_x2.x < b_x2.width/2 + a_x1.width/2
      && b_x2.x - a_x1.x < b_x2.width/2 + a_x1.width/2
      && a_x1.y - b_x2.y < b_x2.height/2 +a_x1.height/2
      &&b_x2.y - a_x1.y < b_x2.height/2 + a_x1.height/2) {
  return true;
  
  }
  else {
  return  false;
  }
  }