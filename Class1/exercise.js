// Bài 1: Tìm số lớn nhất trong mảng
const findMax = (arr) => {
  return arr.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
  });
};
// Bài 2: Tìm số nhỏ nhất trong mảng

// Bài 3: Viết hàm cho phép truyền vào 1 mảng các số, kết quả trả về là 1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2

// Ví dụ : [4,2,5,6,2,7] => [0,0,1,0,0,1]
const getDivide = (arr) => arr.map((el) => el % 2);
console.log(getDivide([4, 2, 5, 6, 2, 7]));

// Bài 4: Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần
const multiStr = (str) => str.repeat(10);

console.log(multiStr('cuongnt'));


// Bài 5: Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang.

// Ví dụ: repeatString(‘a’) => Kết quả trả về là ‘a-a-a-a-a-a-a-a-a-a’
const multStr2 = (str) => (str + "-").repeat(10).slice(0, -1);

console.log(multStr2('cuongnt'));


// Bài 6: Viết function để kiểm tra 1 giá trị có nằm trong mảng hay không?

// checkElementExist([1,2,3,4,5], 5) => true
// checkElementExist([1,2,3,4,5], 6) => false


// const checkElementExist = (arr, num) => arr.find((el) => { return el === num});
const checkElementExist = (arr, num) => arr.indexOf(num) !== -1;
const checkElementExist2 = (arr, num) => arr.includes(num);

console.log(checkElementExist([1,2,3,4,5], 5));
console.log(checkElementExist2([1,2,3,4,5], 6));

// Bài 7: Viết function truyền vào 1 mảng các số, và 1 giá trị bất kỳ. Trả về mảng mới với các giá trị lớn hơn giá trị truyền vào

// getElementGreater([1,2,3,4,5], 3) => [4,5]
// getElementGreater([1,2,3,4,5], 5) => []

const getElementGreater = (arr, num) => arr.filter(el => el > num);
console.log(getElementGreater([1,2,3,4,5], 5));
// Bài 8: Viết function để tạo mã màu HEX ngẫu nhiên.

// randomHexCode() => #728a98
// randomHexCode() => #a72938
// const randomHexCode = () => {
//   let res = ''; 
//   for(let i = 0; i < 6; i++) {
//     res += Math.floor(Math.random() * 16).toString(16);
//   }
//   return res;
// }

const randomHexCode = () => {
  const arrHex = Array.from({length: 6}, () => Math.floor(Math.random() * 16).toString(16));
  return arrHex.join('');
}

console.log(randomHexCode());

// Bài 9: Viết function để tạo mã màu RGB ngẫu nhiên.

// randomRgbCode() => rgb(213,43,133)
// randomRgbCode() => rgb(12,32,122)
const randomSubRgb = () => Math.floor(Math.random() * 256);
const randomRgbCode = () => `rgb(${randomSubRgb()}, ${randomSubRgb()}, ${randomSubRgb()})`;
console.log(randomRgbCode());

// Bài 10. Viết function vào 1 mảng tên học viên, sắp xếp lại mảng này theo chiều ngược của bảng chữ cái.
// sortStudents([‘Nam’, ‘Hoa’, ‘Tuấn’]) => [‘Tuấn’, ‘Nam’, ‘Hoa’]

const sortStudents = (arr) => arr.sort((a, b) => b.toLowerCase().localeCompare(a.toLowerCase()));

console.log(sortStudents(['Nam', 'Hoa', 'Tuấn']))
// Bài 11: Viết function đổi chỗ ngẫu nhiên vị trí của các phần tử trong mảng

// shuffle([1,2,3,4,5]) => [2,3,4,1,5]
// shuffle([1,2,3,4,5]) => [4,2,3,5,1]
// Bài 12: Viết function để lấy sự phần tử không xuất hiện ở cả 2 mảng

// symmetricDifference([1, 2, 3], [1, 2, 4]) => [3,4]
const symmetricDifference = (a, b) => {
  const setA = new Set(a);
  const setB = new Set(b);
  return [...new Set([...setA].filter(x => !setB.has(x)).concat([...setB].filter(x => !setA.has(x))))];
};
console.log(symmetricDifference([1, 2, 3], [1, 2, 4]));

// Bài 13: Viết function lấy tất cả các phần tử không trùng nhau trong cả 2 mảng

// union([1, 2, 3, 1], [4, 3, 2, 4]) => [1,2,3,4]
// union([1, 2, 3, 2, 3], [1, 2, 3, 1, 2]) => [1,2,3]

const union = (a, b) => {
  const set = new Set(a);
  b.forEach(el => set.add(el));
  return [...set];
};


console.log(union([1, 2, 3, 1], [4, 3, 2, 4]));
// console.log(union([1, 2, 3, 2, 3], [1, 2, 3, 1, 2]));

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "cb9a458a06mshde112963846efd9p157915jsnef64db61ee49"
  },
};

const ress = fetch(
  "https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

console.log(ress);