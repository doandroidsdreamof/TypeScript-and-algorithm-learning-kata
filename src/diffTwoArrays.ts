function diffArray(arr1: any, arr2: any) {
  const newArr: any = [...arr1, ...arr2];
  return newArr.filter((el: any, i: number) => !arr2.includes(el) || !arr1.includes(el));
}
