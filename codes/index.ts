
function toReturnStr(str:string | string[]) :string {
    if(typeof str === 'object') {
       return str.toString() 
    }else{
      return str
    }
}
