const studentsXML = `<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;

const parser = new DOMParser();
const xmlDOM = parser.parseFromString(studentsXML, "text/xml");
const listNode = xmlDOM.querySelector("list");

const studentsNode = listNode.getElementsByTagName("student");

let obj = {};
obj.list = [];
for (let i = 0; i < studentsNode.length; i++) {
  let student = {};
  student.name =
    studentsNode[i].querySelector("first").textContent +
    " " +
    studentsNode[i].querySelector("second").textContent;
  student.age = Number(studentsNode[i].querySelector("age").textContent);
  student.prof = studentsNode[i].querySelector("prof").textContent;
  student.lang = studentsNode[i].querySelector("name").getAttribute("lang");
  obj.list.push(student);
}

// let js = JSON.stringify(list, null, "\t");

// console.log(js);
console.log(obj);
