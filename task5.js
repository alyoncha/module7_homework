class ElectricalAppliance {
  constructor(name, mode) {
    this.place = 'home',
    this.name = name,
    this.mode = mode
  }
  getMode(mode){
    console.log(`mode is turn ${mode}`) 
  }
  getCapacity(capacity){
    console.log(`capacity is ${capacity} w`) ;
    return capacity;
  }
}

class KitchenElectricalAppliance extends ElectricalAppliance {    
  constructor(size, name, mode){
    super(mode);
    super(name);
    this.size = size
  }	 
  getMode(mode){
    console.log(`Device mode is turn ${mode}`) 
  }
}

class MediaElectricalAppliance extends ElectricalAppliance {    
  constructor(internet, name, mode){
    super(mode);
    super(name);
    this.internet = internet
  }	
  getInternet(internet){
    console.log(`Device ${internet} internet`) 
  }
}

let computer = new ElectricalAppliance('computer');
const fridge = new KitchenElectricalAppliance('fridge', 'big');
const stove = new KitchenElectricalAppliance('stove', 'big', 'off');
const tv = new MediaElectricalAppliance('stove', '', 'off');
const projector = new MediaElectricalAppliance('toaster', 'not supports', 'on');

fridge.getCapacity(100)
computer.getCapacity(150)
fridge.getMode('on')
computer.getMode('on')
tv.getInternet('supports')