import departmentService from "../services/DepartmentService.js";
import DBPool from "../helper/DBPool.js";
(async () => {
  try {
    let result = await departmentService.getList();
    console.log(result);

    // result = await departmentService.getList({ deptno: 102 });
    // console.log(result);

    // result = await departmentService.addList({
    //   dname: "MVC학과",
    //   loc: "여긴어뒤?",
    // });
    // console.log(result);

    // result = await departmentService.editItem({
    //   deptno: 102,
    //   dname: "MVC학과",
    //   loc: "여긴어뒤?",
    // });
    // console.log(result);

    // await departmentService.deleteItem({ deptno: 102 });

    result= await departmentService.getCount();
    console.log(result);
  } catch (e) {
    console.error(e);
  } finally {
    DBPool.close();
  }
})();
