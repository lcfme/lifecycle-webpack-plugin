import defaults from './const';

//helpers:
function dasherize(inStr) {
  return inStr.replace(/::/g, '/')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
    .replace(/([a-z\d])([A-Z])/g, '$1_$2')
    .replace(/_/g, '-')
    .toLowerCase()
}

export default class LifecycleWebpackPlugin{
  constructor(inOptions){
    this.options = Object.assign(defaults, {
      debug: false
    },inOptions);
  }

  apply(compiler){
    const keys = Object.keys( this.options );
    keys.forEach(item=>{
      if(this.options.debug){
        console.log(dasherize(item), this.options[item]);
      }else{
        compiler.plugin(dasherize(item), this.options[item]);
      }
    });
  }
}
