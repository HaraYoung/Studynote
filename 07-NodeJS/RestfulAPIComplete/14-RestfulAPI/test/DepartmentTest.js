import DBPool from "../helper/DBPool.js";
import professorService from "../services/ProfessorService.js";

(async () => {
  try {
    let result = await professorService.getList();
    console.log(result);

    // result = await professorService.getItem({ profno: 9902 });
    // console.log(result);

    // result = await professorService.addItem({
    //   name: "김교수",
    //   userid: "prokim123",
    //   position: "교수",
    //   sal: 300,
    //   hiredate: "2022-01-03 00:00:00",
    //   comm: 10,
    //   deptno: 302
    // });
    // console.log(result);

    // result = await professorService.editItem({
    //   profno: 9931,
    //   name: "김교수",
    //   userid: "prokim123",
    //   position: "교수",
    //   sal: 200,
    //   hiredate: "2022-01-03 00:00:00",
    //   comm: 15,
    //   deptno: 302,
    // });
    //console.log(result);

    // await professorService.deleteItem({profno: 9930});

    // result = await professorService.getCount();
    // console.log(result);
  } catch (e) {
    console.error(e);
  } finally {
    DBPool.close();
  }
})();
