// classes

//syntax
class ClassName {
    //cunstroctor that sets the blue print
    constructor(name) {
        this.name = name; // dynamic parameter
        this.company = "itskillcenter" //default parameter
    }
    
}

// every class must be instantiated in order to create objects
const a = new ClassName("John");
console.log(a, "a");


//GETTER - GETS ITEM FROM THE CONSTRUCTOR

//1. create a giant bird class

class Bird {
    constructor (name, beak_shape, color, leg_length, night_vision, is_a_raptor, wing_size, can_fly, bald, size, diet) {
        this.name = name;
        this.beak_shape = beak_shape;
        this.color = color;
        this.leg_length = leg_length;
        this.night_vision = night_vision;
        this.is_a_raptor = is_a_raptor;
        this.wing_size = wing_size;
        this.can_fly = can_fly;
        this.bald = bald;
        this.size = size;
        this.diet = diet;
    }
}

//2. create something that represents inheritance

class BirdType extends Bird {
    constructor(name, beak_shape, color, leg_length, night_vision, is_a_raptor, wing_size, can_fly, bald, size, diet, can_swim) {
        super(name, beak_shape, color, leg_length, night_vision, is_a_raptor, wing_size, can_fly, bald, size, diet);
        this.can_swim = can_swim;
    }
}

const bird1 = new BirdType("Eagle", "Slightly Curved", "White & Black", "Slightly Long", "Can't See In The Dark", "Yes", "Big Wing", "Yes", "No", "Big", "Canivorous", "No");

console.log(bird1, "bird1");