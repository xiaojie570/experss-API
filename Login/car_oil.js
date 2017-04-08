/**
 * @api {post} /car_oil/queryAll 查询所有加油记录
 * @apiPermission none
 * @apiGroup car-oil
 *
 * @apiSuccessExample {json} Success-Response :
 * 显示所有加油记录
 *  [
 *        {
 *          "id": 1,
 *          "car_id": null,
 *          "license_plate": "辽C111111",
 *          "money": 100,
 *          "year": "2017",
 *          "month": null,
 *          "day": "3"
 *        },
 *        {
 *          "id": 2,
 *          "car_id": null,
 *          "license_plate": "辽C123456",
 *          "money": 100,
 *          "year": "2017",
 *          "month": null,
 *          "day": "3"
 *        }
 *   ]
 *
 */


/**
 * @api {post} /car_oil/queryRecordByLicense_plate 按车牌照查询加油记录
 * @apiPermission none
 * @apiGroup car-oil
 *
 * @apiParam {String} license_plate 车牌号.
 *
 * @apiSuccessExample {json} Success-Response :
 * 显示一辆车的加油记录
 *  [
 *        {
 *          "id": 1,
 *          "car_id": null,
 *          "license_plate": "辽C111111",
 *          "money": 100,
 *          "year": "2017",
 *          "month": null,
 *          "day": "3"
 *        },
 *  ]
 *
 */


/**
 * @api {post} /car_oil/deleteOneRecordByid 删除一条加油记录
 * @apiPermission none
 * @apiGroup car-oil
 *
 * @apiParam {String} id 加油id.
 *
 * @apiSuccessExample {json} Success-Response :
 * 显示所有车的加油记录
 *  [
 *        {
 *          "id": 1,
 *          "car_id": null,
 *          "license_plate": "辽C111111",
 *          "money": 100,
 *          "year": "2017",
 *          "month": null,
 *          "day": "3"
 *        },
 *  ]
 *
 */

/**
 * @api {post} /car_oil/queryRecordByLicense_plate 按车牌照查找加油记录
 * @apiPermission none
 * @apiGroup car-oil
 *
 * @apiParam {String} id 加油id.
 *
 * @apiSuccessExample {json} Success-Response :
 *
 *  [
 *        {
 *          "id": 1,
 *          "car_id": null,
 *          "license_plate": "辽C111111",
 *          "money": 100,
 *          "year": "2017",
 *          "month": null,
 *          "day": "3"
 *        },
 *  ]
 *
 */

/**
 * @api {post} /car_oil/updateOneRecordByid 按加油id修改加油记录
 * @apiPermission none
 * @apiGroup car-oil
 *
 * @apiParam {String} id 加油id.
 * @apiParam {String} license_plate 车牌照.
 * @apiParam {String} money 金额.
 *
 * @apiSuccessExample {json} Success-Response :
 * 显示所有加油记录
 *  [
 *        {
 *          "id": 1,
 *          "car_id": null,
 *          "license_plate": "辽C111111",
 *          "money": 100,
 *          "year": "2017",
 *          "month": null,
 *          "day": "3"
 *        },
 *  ]
 *
 */

/**
 * @api {post} /car_oil/addOneRecord 增加一条加油记录
 * @apiPermission none
 * @apiGroup car-oil
 *
 * @apiParam {String} license_plate 车牌照.
 * @apiParam {String} money 金额.
 *
 * @apiSuccessExample {json} Success-Response :
 * 显示所有车的加油记录
 *  [
 *        {
 *          "id": 1,
 *          "car_id": null,
 *          "license_plate": "辽C111111",
 *          "money": 100,
 *          "year": "2017",
 *          "month": null,
 *          "day": "3"
 *        },
 *  ]
 *
 * @apiErrorExample {json} Error-Response:
 * 1-->车牌照不能为空
 * {
 *    "status": "1"
 * }
 *
 * 2-->金额不能为空
 * {
 *    "status": "2"
 * }
 *
 */


