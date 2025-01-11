export default function orderByProps(object, orderList) {
    //пустой массив, который будет содержать отсортированные свойства объекта
    const result = [];
    //проверяется, существует ли свойство в объекте, если да, то свойство добавляется в массив, после свойство удаляется из исходного объекта.
    for (const property of orderList) {
      if (property in object) {
        result.push({
          key: property,
          value: object[property],
        });
        delete object[property];
      }
    }
    //оставшиеся свойства сортируются по ключам и добавляются в массив
    for (const property of Object.keys(object).sort()) {
      result.push({
        key: property,
        value: object[property],
      });
    }
    return result;
  }