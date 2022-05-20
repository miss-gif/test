function Student(name, korean, english, math) {
  this.이름 = name;
  this.국어 = korean;
  this.영어 = english;
  this.수학 = math;
  // 총점
  this.getSum = function () {
    return this.국어 + this.영어 + this.수학;
  };
  // 평균
  this.getAverage = function () {
    return this.getSum() / students.length;
  };
  this.toString = function () {
    return this.이름 + "\t" + this.국어 + "\t" + this.영어 + "\t" + this.수학 + "\t" + this.getSum() + "\t" + this.getAverage();
  };
}

// 학생 성적
let students = [];
students.push(new Student("김동수", 100, 90, 80));
students.push(new Student("이동수", 90, 80, 70));
students.push(new Student("박동수", 80, 70, 60));

// 출력 값
let output = "이름\t국어\t영어\t수학\t총점\t평균\n" + "</br>";
for (let i in students) {
  output += students[i].toString() + "\n" + "</br>";
}

const text = document.querySelector(".text");

text.innerHTML += output;
