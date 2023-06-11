
class CustomCamera{
    constructor(){
        this.myCam = createCamera();
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.dx = 0;
        this.dy = 0;
        this.dz = 0;
        this.amount = 0;
    }
    setPosition(x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.myCam.setPosition(x, y, z);
    }
    lookAt(x, y, z){
        this.myCam.lookAt(x, y, z);
    }
    move(x, y, z){
        this.dx = x;
        this.dy = y;
        this.dz = z;
    }
    setAmount(amount){
         this.amount = amount; 
    }
    update(){
        let _x = lerp(this.x, this.x+this.dx, this.amount);
        let _y = lerp(this.y, this.y+this.dy, this.amount);
        let _z = lerp(this.z, this.z+this.dz, this.amount);
        this.myCam.setPosition(_x, _y, _z);
    }
}
