export const PI = 3.14159265358979323846;

 export function getCircumference(r) {
  return 2 * PI * r;
}

export function getArea(r) {
  return PI * Math.pow(r, 2);
}

export function getvolume(r) {
   return (4/3) * PI * Math.pow(r, 3);
}
