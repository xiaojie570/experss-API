/**
 * @api {post} /car/queryAllCar 查询所有车辆
 * @apiPermission none
 * @apiGroup car
 *
 *
 * @apiSuccessExample {json} Success-Response :
 * {
 *  "status": "0"
 * }
 *
 */




/**
 * @api {post} /car/addCar 增加车辆
 * @apiPermission none
 * @apiGroup car
 *
 * @apiParam {String} license_plate 车牌照.
 * @apiParam {String} position  员工职位.
 * @apiParam {String} employee_name  员工姓名.
 *
 *
 *
 * @apiSuccess {String} status 返回status值给客户端
 * 
 * @apiSuccessExample {json} Success-Response :
 * 0-->增加成功
 * {
 *    "status": "0"
 * }
 *
 * @apiErrorExample {json} Error-Response:
 * 1-->license_plate(车牌照)为空
 * {
 *    "status": "1"
 * }
 *
 * 2-->position(职位)为空
 * {
 *    "status": "2"
 * }
 * 3-->employee_name(名字)为空
 * {
 *    "status": "2"
 * }
 * 4-->职称和名字不匹配
 * {
 *      "status": "4"
 * }
 */


/**
 * @api {post} /car/queryOneCar 查询One
 * @apiPermission none
 * @apiGroup car
 *
 * @apiParam {String} id 车的id.
 *
 * @apiSuccessExample {json} Success-Response :
 *  {
 *      "id": 1,
 *      "cti_id": null,
 *      "license_plate": "辽C123456",
 *      "employee_name": "司机2",
 *      "position": "司机"
 *  }
 *
 */



/**
 * @api {post} /car/updateOneCarInfo 更改
 * @apiPermission none
 * @apiGroup car
 *
 * @apiParam {String} license_plate 车牌照.
 * @apiParam {String} employee_name  员工姓名.
 * @apiParam {String} position  员工职位.
 *
 *
 * @apiSuccessExample {json} Success-Response :
 * 0-->更新成功
 * {
 *    "status": "0"
 * }
 *
 * @apiErrorExample {json} Error-Response:
 * 2-->车牌照为空
 * {
 *      "status":"2"
 * }
 *
 * 3-->司机为空
 * {
 *      "status":"3"
 * }
 *
 * 4-->职位为空
 * {
 *      "status":"4"
 * }
 *
 * 5-->不可以重复添加（车牌号和司机）
 * {
 *      "status":"5"
 * }
 *
 * 6-->职位和名字不匹配
 * {
 *      "status":"6"
 * }
 *
 *
 */




/**
 * @api {post} /employee/selectEmployeePosition 职位类型
 * @apiPermission none
 * @apiGroup car
 *
 *
 * @apiSuccessExample {json} Success-Response :
 *
 * [
 *  "司机",
 *  "会计"
 * ]
 *
 */



/**
 * @api {post} /employee/selectEmployee_nameByPosition 按职位找员工
 * @apiPermission none
 * @apiGroup car
 *
 * @apiParam {String} position 职位.
 *
 * @apiSuccessExample {json} Success-Response :
 *
 * [
 *   "司机1",
 *  "司机2",
 *   "司机3",
 *   "付杰",
 *   "dapang"
 * ]
 *
 */
