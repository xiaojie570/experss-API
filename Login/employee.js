
/**
 * @api {post} /employee/selectEmployeePosition 职位类型
 * @apiPermission none
 * @apiGroup employee
 *
 * @apiSuccessExample {json} Success-Response :
 * [
 * "司机",
 * "会计"
 * ]
 */



/**
 * @api {post} /employee/updateStaffposition 更新员工信息
 * @apiPermission none
 * @apiGroup employee
 *
 * @apiParam {String} employee_name 职员名字.
 * @apiParam {String} telephone  职员电话.
 * @apiParam {String} location  职员住址.
 * @apiParam {String} position  职员职位.
 *
 *
 * @apiSuccess {String} status 返回status值给客户端用于判断（0--> 更新成功；1-->更新失败；2-->更新失败 员工职位不存在）
 * 
 * @apiSuccessExample {json} Success-Response :
 * 0-->更新成功
 * {
 *    "status": "0"
 * }
 *
 * @apiErrorExample {json} Error-Response:
 * 1-->更新失败
 * {
 *    "status": "1"
 * }
 *  2-->更新失败 员工职位不存在
 * {
 *    "status": "2"
 * }
 *
 */