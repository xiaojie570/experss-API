/**
 * @api {post} /employee_salary/selectOneMonthSumMoney 查找当月总流动金额
 * @apiPermission none
 * @apiGroup employee-salary
 *
 * @apiParam {String} username 用户名.
 * 
 * @apiSuccessExample {json} Success-Response :
 *[
 *    {
 *      "id": 28,
 *      "goods_id": 18,
 *      "loc_id": 5,
 *      "car_id": 1,
 *      "type": "入库",
 *      "username": "7",
 *      "count": 12,
 *      "money": 50,
 *      "year": "2017",
 *      "month": "4",
 *      "day": "2"
 *    },
 *    {
 *      "id": 29,
 *      "goods_id": 1,
 *      "loc_id": 1,
 *      "car_id": 1,
 *      "type": "入库",
 *      "username": "7",
 *      "count": 100,
 *      "money": 100,
 *      "year": "2017",
 *      "month": "4",
 *      "day": "2"
 *    }
 * ]
 */

/**
 * @api {post} /employee_salary/queryAll显示所有人的工资
 * @apiPermission none
 * @apiGroup employee-salary
 * 
 * @apiSuccessExample {json} Success-Response :
 * [
 *    {
 *      "id": 1,
 *      "salary": 2030,
 *      "year": "2017",
 *      "month": "4",
 *      "username": "7",
 *      "employee_name": "司机2",
 *      "money": 10600
 *    }
 * ]
 *
 */


/**
 * @api {post} /employee_salary/showSalary   显示自己的工资
 * @apiPermission none
 * @apiGroup employee-salary
 * 
 * @apiSuccessExample {json} Success-Response :
 * [
 *    {
 *      "id": 1,
 *      "salary": 2030,
 *      "year": "2017",
 *      "month": "4",
 *      "username": "7",
 *      "employee_name": "司机2",
 *      "money": 10600
 *    }
 * ]
 *
 */
