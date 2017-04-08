
/**
 * @api {post} /employee/updatePosition 更新职位类型
 * @apiPermission none
 * @apiGroup employee
 *
 * @apiSuccessExample {json} Success-Response :
 * [
 *     "司机",
 *     "会计",
 *     "卸货员",
 *     "装货员"
 * ]
 *
 *
 * @apiErrorExample {json} Error-Response:
 * 1-->更新失败
 * {
 *    "status": "1"
 * }
 *
 * 2-->不能更新该职位，因为有该职位的员工
 * {
 *    "status": "2"
 * }
 *
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


/**
 * @api {post} /employee/modifyPassword 修改密码
 * @apiPermission none
 * @apiGroup employee
 *
 * @apiParam {String} password 新密码.
 * @apiParam {String} username session中的username.
 *
 *  @apiSuccessExample {json} Success-Response :
 * 0-->修改成功
 * {
 *     "status": "0"
 * }
 *
 * 2-->密码为空
 * {
 *     "status": "2"
 * }
 *
 *  3-->新密码与旧密码重复
 *  {
 *      "status": "3"
 *  }
 */


/**
 * @api {post} /employee/selectByUsername 查询个人信息
 * @apiPermission none
 * @apiGroup employee
 *
 * @apiParam {String} username token中的username.
 *
 *  @apiSuccessExample {json} Success-Response :
 * 0-->查询成功
 * {
 *   "employee_name": "司机3",
 *   "telephone": "3300817",
 *   "salary": null,
 *   "location": "辽宁鞍山",
 *   "position": "司机"
 * }
 */



/**
 * @api {post} /employee/queryAll 查询所有员工信息
 * @apiPermission none
 * @apiGroup employee
 *
 *  @apiSuccessExample {json} Success-Response :
 * [
 *        {
 *          "id": 1,
 *          "employee_name": "司机1",
 *          "telephone": "3300817",
 *          "salary": null,
 *          "location": "辽宁",
 *          "username": "8",
 *          "position": "司机"
 *        },
 *        {
 *          "id": 2,
 *          "employee_name": "会计1",
 *          "telephone": "3300817",
 *          "salary": null,
 *          "location": "辽宁",
 *          "username": "12",
 *          "position": "会计"
 *        }
 * ]
 *
 *  @apiErrorExample {json} Error-Response:
 * 1-->更新失败
 * {
 *    "status": "1"
 * }
 */



/**
 * @api {post} /employee/addPosition 增加职位类型
 * @apiPermission none
 * @apiGroup employee
 *
 * @apiParam {String} position 职位名称.
 *
 *  @apiSuccessExample {json} Success-Response :
 *[
 *    "司机",
 *    "会计",
 *    "卸货员",
 *    "装载员"
 *]
 */
