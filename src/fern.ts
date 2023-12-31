import p5 from 'p5';

/**
 * Origin: Center
 */
type Circle = {
    type: "Circle",
    x: number,
    y: number,
    rotation: number,
    radius: number;

    /**
     * allow extra fields, useful for letting the library user add data like
     * colors that will then be used in the renderer functions
     */
    [x: string | number | symbol]: any;
};

/**
 * Origin: top left
 */
type Rectangle = {
    type: "Rectangle",
    x: number,
    y: number,
    rotation: number,
    width: number,
    height: number,

    /**
     * allow extra fields, useful for letting the library user add data like
     * colors that will then be used in the renderer functions
     */
    [x: string | number | symbol]: any;
};

type Object = Circle | Rectangle;

export class Fern {
    private _objects: Object[];

    /**
     * Every object with `type` `"Circle"` will be rendered by this function
     * 
     * The origin point of a circle is its center
     */
    public circleRenderer: (p5: p5, circle: Circle) => void;

    /**
     * Every object with `type` `"Rectangle"` will be rendered by this function
     * 
     * The origin point of a rectangle is top left
     */
    public rectangleRenderer: (p5: p5, rectangle: Rectangle) => void;

    constructor() {
        this._objects = [];

        this.circleRenderer = () => { };
        this.rectangleRenderer = () => { };
    }

    /**
     * Add an object to the Fern world
     * @param object The object to be added
     */
    addObject(object: Object): void {
        this._objects.push(object);
    }

    /**
     * Update the Fern world by a single tick
     * 
     * Should be called once at the end of the p5js `draw` function
     * @param deltaTime Time elapsed since last frame
     */
    update(deltaTime: number): void {
    }

    /**
     * Render all objects in the Fern world
     * 
     * Should be called once at the end of the p5js `draw` function, right before `Fern.update`
     * @param p5 p5js instance
     */
    render(p5: p5): void {
        this._objects.forEach(object => {
            if (object.type === "Circle") {
                this.circleRenderer(p5, object);
            } else if (object.type === "Rectangle") {
                this.rectangleRenderer(p5, object);
            }
        });
    }
}