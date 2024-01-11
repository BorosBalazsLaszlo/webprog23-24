function min(array, returnType) {
    const minValue = Math.min(array);
    
    return returnType === 'value' ? minValue : array.indexOf(minValue);
}
  