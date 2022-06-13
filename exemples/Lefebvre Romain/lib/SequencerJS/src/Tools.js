/*----------------------------------------*\
  21.2.camera - Tools.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2021-02-14 18:32:12
  @Last Modified time: 2021-02-17 23:08:00
\*----------------------------------------*/

export const divAndMod = (value, divisor) => {
	let i = 0;
	let rest = value
	while(rest >= divisor){
		rest = rest - divisor;
		i ++;
	}
	return [i, rest]
}

export const isFunction = (functionToCheck) => {
 return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}

export const isNumber = (value) => {
	return typeof value === "number" && isFinite(value);
}