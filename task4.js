function ElectricalAppliance(name, mode) {
  this.place = 'home',
  this.name = name,
  this.mode = mode
}

ElectricalAppliance.prototype.getMode = function(mode){
  console.log(`mode is turn ${mode}`) 
 }

ElectricalAppliance.prototype.getCapacity = function(capacity){
  console.log(`capacity is ${capacity} w`) ;
  return capacity;
 }

function KitchenElectricalAppliance(name, size, mode) {
  this.name = name,
  this.size = size,
  this.mode = mode
}

function MediaElectricalAppliance(name, internet, mode) {
  this.name = name,
  this.internet = internet,
  this.mode = mode
}

KitchenElectricalAppliance.prototype = new ElectricalAppliance();
KitchenElectricalAppliance.prototype.getMode = function(mode) {
  console.log(`Device mode is turn ${mode}`) 
 }

MediaElectricalAppliance.prototype = new ElectricalAppliance();
MediaElectricalAppliance.prototype.getInternet = function(internet) {
  console.log(`Device ${internet} internet`) 
 }

const computer = new ElectricalAppliance('computer');
const fridge = new KitchenElectricalAppliance('fridge', 'big');
const stove = new KitchenElectricalAppliance('stove', 'big', 'off');
const tv = new MediaElectricalAppliance('stove', '', 'off');
const projector = new MediaElectricalAppliance('toaster', 'not supports', 'on');

fridge.getCapacity(100)
computer.getCapacity(150)
fridge.getMode('on')
computer.getMode('on')
tv.getInternet('supports')