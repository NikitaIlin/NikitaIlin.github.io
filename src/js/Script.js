"use strict"
let a = 10000, a1 = 30000, a2 = 40000, b = 10000, b1 = 20000, b2 = 5000, c = 10000, c1 = 15000, c2 = 20000, res, res1;

let type = prompt("Выберите тип сайта: 1 - Визитка, 2 - Интернет магазин, 3 - Корпоративный сайт");{

    if (type == 1) {
        console.log("Визитка", a);
    } else if (type == 2) {
        console.log("Интернет магазин", a1);
    } else if (type == 3) {
        console.log("Корпоративный сайт", a2);
    }
}
let des = prompt("Выберите дизайн сайта: 1 - Шаблонный тип, 2 - Кастомный тип, 3 - Копи-паста ");{

    if (des == 1 && type == 1) {
        res = a + b;
        console.log("Шаблонный тип +", b)
    }else if (des == 1 && type == 2){
        res = a1 + b;
        console.log("Шаблонный тип +", b)
    }else if (des == 1 && type == 3){
        res = a2 + b;
        console.log("Шаблонный тип +", b)
    }
                else if (des == 2 && type == 1) {
                    res = a + b1;
                        console.log("Кастомный тип +", b1);
                }else if(des == 2 && type == 2){
                    res = a1 + b1;
                    console.log("Кастомный тип +", b1);
                }else if(des == 2 && type == 3){
                    res = a2 + b1;
                    console.log("Кастомный тип +", b1);
                }
                            else if (des == 3 && type == 1) {
                                res = a + b2;
                                console.log("Копи-паста +", b2);
                            }else if (des == 3 && type == 2) {
                                res = a1 + b2;
                                console.log("Копи-паста +", b2);
                            }else if (des == 3 && type ==3 ) {
                                res = a2 + b2;
                                console.log("Копи-паста +", b2);
                            }

}

let adapt = prompt("Адаптивность: 1 - Мобильные устройства, 2 - Крупные гаджеты, 3 - Все устройства, 0 -Не нужно");{

    if (adapt == 1 && des == 1 && type == 1) {
        res1 = res + c;
        console.log("Мобильные устройства +", c);
    }else if(adapt == 1 && des == 1 && type == 2) {
        res1 = res + c;
        console.log("Мобильные устройства +", c);
    }else if(adapt == 1 && des == 1 && type == 3) {
        res1 = res + c;
        console.log("Мобильные устройства +", c);
    }
            else if(adapt == 1 && des == 2 && type == 1) {
                res1 = res + c;
                console.log("Мобильные устройства +", c);
            }else if(adapt == 1 && des == 2 && type == 2) {
                res1 = res + c;
                console.log("Мобильные устройства +", c);
            }else if(adapt == 1 && des == 2 && type == 3) {
                res1 = res + c;
                console.log("Мобильные устройства +", c);
            }
                    else if(adapt == 1 && des == 3 && type == 1) {
                        res1 = res + c;
                        console.log("Мобильные устройства +", c);
                    }else if(adapt == 1 && des == 3 && type == 2) {
                        res1 = res + c;
                        console.log("Мобильные устройства +", c);
                    }else if(adapt == 1 && des == 3 && type == 3) {
                        res1 = res + c;
                        console.log("Мобильные устройства +", c);
                    }


    else if (adapt == 2 && des == 1 && type == 1) {
        res1 = res + c1;
        console.log("Крупные гаджеты +", c1);
   }else if (adapt == 2 && des == 1 && type == 2) {
        res1 = res + c1;
        console.log("Крупные гаджеты +", c1);
   }else if (adapt == 2 && des == 1 && type == 3) {
        res1 = res + c1;
        console.log("Крупные гаджеты +", c1);
   }
         else if (adapt == 2 && des == 1 && type == 1) {
                res1 = res + c1;
                console.log("Крупные гаджеты +", c1);
           }else if (adapt == 2 && des == 1 && type == 2) {
                res1 = res + c1;
                console.log("Крупные гаджеты +", c1);
           }else if (adapt == 2 && des == 1 && type == 3) {
                res1 = res + c1;
                console.log("Крупные гаджеты +", c1);
           }
                else if (adapt == 2 && des == 2 && type == 1) {
                    res1 = res + c1;
                    console.log("Крупные гаджеты +", c1);
               }else if (adapt == 2 && des == 2 && type == 2) {
                    res1 = res + c1;
                    console.log("Крупные гаджеты +", c1);
               }else if (adapt == 2 && des == 2 && type == 3) {
                    res1 = res + c1;
                    console.log("Крупные гаджеты +", c1);
               }
                    else if (adapt == 3 && des == 1 && type == 1) {
                        res1 = res + c2;
                        console.log("Все устройства +",c2);
                    }else if (adapt == 3 && des == 1 && type == 2) {
                        res1 = res + c2;
                        console.log("Все устройства +",c2);
                    }else if (adapt == 3 && des == 1 && type == 3) {
                        res1 = res + c2;
                        console.log("Все устройства +",c2);
                    }
                        else if (adapt == 3 && des == 2 && type == 1) {
                            res1 = res + c2;
                            console.log("Все устройства +",c2);
                        }else if (adapt == 3 && des == 2 && type == 2) {
                            res1 = res + c2;
                            console.log("Все устройства +",c2);
                        }else if (adapt == 3 && des == 2 && type == 3) {
                            res1 = res + c2;
                            console.log("Все устройства +",c2);
                        }
                                else if (adapt == 3 && des == 3 && type == 1) {
                                    res1 = res + c2;
                                    console.log("Все устройства +",c2);
                                }else if (adapt == 3 && des == 3 && type == 2) {
                                    res1 = res + c2;
                                    console.log("Все устройства +",c2);
                                }else if (adapt == 3 && des == 3 && type == 3) {
                                    res1 = res + c2;
                                    console.log("Все устройства +",c2);
                                }else console.log("Без адаптивности"); 
}

let cost = prompt("Узнать стоимость? да/нет");
 if (cost ="да" && adapt != 0 ){
     console.log("Стоимость сайта", res1, "рублей.")
 }else console.log("Стоимость сайта" ,res, "рублей.")