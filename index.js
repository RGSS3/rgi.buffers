;(function(global){
  if('module' in global) module.exports = {};
  global.RE.$O.keymap["Ctrl-Enter"] = _ => RE.$CMD["run"]();
})(this);