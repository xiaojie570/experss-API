/**
 * @api {post} /car_repair/queryByYear 查询当年维修记录
 * @apiPermission none
 * @apiGroup car-repair
 *
 * @apiSuccessExample {json} Success-Response :
 * [
 *    {
 *       "id": 2,
 *       "car_id": null,
 *       "year": "2017",
 *       "month": "5",
 *       "day": "7",
 *       "license_plate": "辽C111111",
 *       "service_details": "修轮胎",
 *       "money": 100,
 *       "employee_name": null
 *     },
 *    {
 *      "id": 3,
 *      "car_id": null,
 *      "year": "2017",
 *      "month": "6",
 *      "day": "7",
 *      "license_plate": "辽C111111",
 *      "service_details": "修轮胎",
 *      "money": 100,
 *      "employee_name": null
 *    }
 *]
 *
 */



/**
 * @api {post} /car_repair/queryByMonth 查询当月维修记录
 * @apiPermission none
 * @apiGroup car-repair
 *
 * @apiSuccessExample {json} Success-Response :
 *  [
 *    {
 *      "id": 5,
 *      "car_id": null,
 *      "year": "2017",
 *      "month": "4",
 *      "day": "7",
 *      "license_plate": "辽C111111",
 *      "service_details": "修轮胎",
 *      "money": 100,
 *      "employee_name": null
 *    },
 *    {
 *      "id": 6,
 *      "car_id": null,
 *      "year": "2017",
 *      "month": "4",
 *      "day": "7",
 *      "license_plate": "辽C111111",
 *      "service_details": "修轮胎",
 *      "money": 100,
 *      "employee_name": "司机4"
 *    }
 * ]
 *
 */


/**
 * @api {post} /car_repair/queryAll 查询所有维修记录
 * @apiPermission none
 * @apiGroup car-repair
 *
 * @apiSuccessExample {json} Success-Response :
 * 显示所有维修记录
 *  [
 *    {
 *      "id": 5,
 *      "car_id": null,
 *      "year": "2017",
 *      "month": "4",
 *      "day": "7",
 *      "license_plate": "辽C111111",
 *      "service_details": "修轮胎",
 *      "money": 100,
 *      "employee_name": null
 *    },
 *    {
 *      "id": 6,
 *      "car_id": null,
 *      "year": "2017",
 *      "month": "4",
 *      "day": "7",
 *      "license_plate": "辽C111111",
 *      "service_details": "修轮胎",
 *      "money": 100,
 *      "employee_name": "司机4"
 *    }
 * ]
 *
 */


/**
 * @api {post} /car_repair/queryByYearandlicense_plate 一辆车当年维修记录
 * @apiPermission none
 * @apiGroup car-repair
 *
 * @apiParam {String} license_plate 车牌号.
 *
 * @apiSuccessExample {json} Success-Response :
 *
 *  [
 *    {
 *      "id": 5,
 *      "car_id": null,
 *      "year": "2017",
 *      "month": "4",
 *      "day": "7",
 *      "license_plate": "辽C111111",
 *      "service_details": "修轮胎",
 *      "money": 100,
 *      "employee_name": null
 *    },
 *    {
 *      "id": 6,
 *      "car_id": null,
 *      "year": "2017",
 *      "month": "4",
 *      "day": "7",
 *      "license_plate": "辽C111111",
 *      "service_details": "修轮胎",
 *      "money": 100,
 *      "employee_name": "司机4"
 *    }
 * ]
 *
 */

/**
 * @api {post} /car_repair/queryByMonthandlicense_plate 一辆车当月维修记录
 * @apiPermission none
 * @apiGroup car-repair
 *
 * @apiParam {String} license_plate 车牌号.
 *
 * @apiSuccessExample {json} Success-Response :
 *
 *  [
 *    {
 *      "id": 5,
 *      "car_id": null,
 *      "year": "2017",
 *      "month": "4",
 *      "day": "7",
 *      "license_plate": "辽C111111",
 *      "service_details": "修轮胎",
 *      "money": 100,
 *      "employee_name": null
 *    },
 *    {
 *      "id": 6,
 *      "car_id": null,
 *      "year": "2017",
 *      "month": "4",
 *      "day": "7",
 *      "license_plate": "辽C111111",
 *      "service_details": "修轮胎",
 *      "money": 100,
 *      "employee_name": "司机4"
 *    }
 * ]
 *
 */

/**
 * @api {post} /car_repair/deleteOneRecord 删除一条维修记录
 * @apiPermission none
 * @apiGroup car-repair
 *
 * @apiParam {String} id 记录id.
 *
 * @apiSuccessExample {json} Success-Response :
 * 显示所有维修记录
 *  [
 *    {
 *      "id": 5,
 *      "car_id": null,
 *      "year": "2017",
 *      "month": "4",
 *      "day": "7",
 *      "license_plate": "辽C111111",
 *      "service_details": "修轮胎",
 *      "money": 100,
 *      "employee_name": null
 *    },
 *    {
 *      "id": 6,
 *      "car_id": null,
 *      "year": "2017",
 *      "month": "4",
 *      "day": "7",
 *      "license_plate": "辽C111111",
 *      "service_details": "修轮胎",
 *      "money": 100,
 *      "employee_name": "司机4"
 *    }
 * ]
 *
 */


/**
 * @api {post} /car_repair/addOneRecord 增加一条维修记录
 * @apiPermission none
 * @apiGroup car-repair
 *
 * @apiParam {String} license_plate 车牌号.
 * @apiParam {String} service_details  车辆维修细节.
 * @apiParam {String} money  维修金额.
 *
 * @apiSuccessExample {json} Success-Response :
 * 显示所有维修记录
 *  [
 *    {
 *      "id": 5,
 *      "car_id": null,
 *      "year": "2017",
 *      "month": "4",
 *      "day": "7",
 *      "license_plate": "辽C111111",
 *      "service_details": "修轮胎",
 *      "money": 100,
 *      "employee_name": null
 *    },
 *    {
 *      "id": 6,
 *      "car_id": null,
 *      "year": "2017",
 *      "month": "4",
 *      "day": "7",
 *      "license_plate": "辽C111111",
 *      "service_details": "修轮胎",
 *      "money": 100,
 *      "employee_name": "司机4"
 *    }
 * ]
 *
 */