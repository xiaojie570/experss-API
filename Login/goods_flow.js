/**
 * @api {post} /goods_flow/queryAll 查找所有货物流动信息
 * @apiPermission none
 * @apiGroup goods_flow
 *
 * @apiSuccessExample {json} Success-Response :
 * [
 *     {
 *           "id": 15,
 *           "goods_id": 4,
 *           "loc_id": null,
 *           "car_id": 1,
 *           "type": "入库",
 *           "username": "3",
 *           "count": 5,
 *           "money": 10
 *         },
 *        {
 *          "id": 16,
 *          "goods_id": 4,
 *          "loc_id": null,
 *          "car_id": 1,
 *          "type": "入库",
 *          "username": "3",
 *          "count": 6,
 *          "money": 10
 *      }
 * ]
 *
 */



/**
 * @api {post} /goods_flow/flow_typeDao 查找入库出库类型
 * @apiPermission none
 * @apiGroup goods_flow
 *
 * @apiSuccessExample {json} Success-Response :
 * [
 *        "入库",
 *        "出库"
 * ]
 *
 */



/**
 * @api {post} /goods_flow/addGoods_flow 货物流动
 * @apiPermission none
 * @apiGroup goods_flow
 *
 * @apiParam {String} goods_id  货物id.
 * @apiParam {String} loc_id  货物储位id.
 * @apiParam {String} car_id  汽车id.
 * @apiParam {String} type  入库出库类型.
 * @apiParam {String} money  货物单价.
 * @apiParam {String} count  货物数量.
 *
 * @apiSuccessExample {json} Success-Response :
 * 查找所有货物流动信息
 * [
 *     {
 *           "id": 15,
 *           "goods_id": 4,
 *           "loc_id": null,
 *           "car_id": 1,
 *           "type": "入库",
 *           "username": "3",
 *           "count": 5,
 *           "money": 10
 *         },
 *        {
 *          "id": 16,
 *          "goods_id": 4,
 *          "loc_id": null,
 *          "car_id": 1,
 *          "type": "入库",
 *          "username": "3",
 *          "count": 6,
 *          "money": 10
 *      }
 * ]
 *
 *
 *
 * @apiErrorExample {json} Error-Response:
 * 1-->货物没有储位了，需要创建储位
 * {
 *      "status":"1"
 * }
 *
 * 2-->没有该货物，需要先创建该货物
 * {
 *      "status":"2"
 * }
 *
 * 3-->货物数量不足，不能出库
 * {
 *      "status":"3"
 * }
 *
 * 4-->货物id为空
 * {
 *      "status":"4"
 * }
 *
 * 5-->车辆不能为空
 * {
 *      "status":"5"
 * }
 *
 * 6-->货物出入库类型不能为空
 * {
 *      "status":"6"
 * }
 *
 * 7-->货物数量为空
 * {
 *      "status":"7"
 * }
 *
 * 8-->货物金额为空
 * {
 *      "status":"8"
 * }
 *
 *
 */


/**
 * @api {post} /goods_flow/queryInGoods 货物入库信息
 * @apiPermission none
 * @apiGroup goods_flow
 *
 * @apiSuccessExample {json} Success-Response :
 *[
 *    {
 *      "id": 1,
 *      "goods_id": 1,
 *      "loc_id": 1,
 *      "car_id": 1,
 *      "type": "入库",
 *      "username": "1",
 *      "count": null,
 *      "money": null
 *    },
 *    {
 *      "id": 3,
 *      "goods_id": 1,
 *      "loc_id": 1,
 *      "car_id": 1,
 *      "type": "入库",
 *      "username": "1",
 *      "count": 10,
 *      "money": 10
 *    }
 * ]
 *
 */


/**
 * @api {post} /goods_flow/queryOutGoods 货物出库信息
 * @apiPermission none
 * @apiGroup goods_flow
 *
 * @apiSuccessExample {json} Success-Response :
 *[
 *    {
 *      "id": 9,
 *      "goods_id": 3,
 *      "loc_id": 2,
 *      "car_id": 1,
 *      "type": "出库",
 *      "username": "3",
 *      "count": 20,
 *      "money": 10
 *    },
 *    {
 *      "id": 10,
 *      "goods_id": 3,
 *      "loc_id": 2,
 *      "car_id": 1,
 *      "type": "出库",
 *      "username": "3",
 *      "count": 2,
 *      "money": 10
 *    }
 *]
 *
 */


/**
 * @api {post} /goods_flow/queryByUsername 查询自己的入库出库信息
 * @apiPermission none
 * @apiGroup goods_flow
 *
 * @apiSuccessExample {json} Success-Response :
 * [
 *    {
 *      "id": 8,
 *      "goods_id": 3,
 *      "loc_id": 2,
 *      "car_id": 1,
 *      "type": "入库",
 *      "username": "3",
 *      "count": 20,
 *      "money": 10
 *    },
 *    {
 *      "id": 9,
 *      "goods_id": 3,
 *      "loc_id": 2,
 *      "car_id": 1,
 *      "type": "出库",
 *      "username": "3",
 *      "count": 20,
 *      "money": 10
 *    }
 * ]
 *
 */


/**
 * @api {post} /goods_flow/queryByUsernameAndOut 查询自己的出库信息
 * @apiPermission none
 * @apiGroup goods_flow
 *
 * @apiSuccessExample {json} Success-Response :
 * [
 *    {
 *      "id": 9,
 *      "goods_id": 3,
 *      "loc_id": 2,
 *      "car_id": 1,
 *      "type": "出库",
 *      "username": "3",
 *      "count": 20,
 *      "money": 10
 *    },
 *    {
 *      "id": 10,
 *      "goods_id": 3,
 *      "loc_id": 2,
 *      "car_id": 1,
 *      "type": "出库",
 *      "username": "3",
 *      "count": 2,
 *      "money": 10
 *    }
 * ]
 *
 */

/**
 * @api {post} /goods_flow/queryByUsernameAndIn 查询自己的入库信息
 * @apiPermission none
 * @apiGroup goods_flow
 *
 * @apiSuccessExample {json} Success-Response :
 * [
 *    {
 *      "id": 8,
 *      "goods_id": 3,
 *      "loc_id": 2,
 *      "car_id": 1,
 *      "type": "入库",
 *      "username": "3",
 *      "count": 20,
 *      "money": 10
 *    },
 *    {
 *      "id": 12,
 *      "goods_id": 3,
 *      "loc_id": 2,
 *      "car_id": 1,
 *      "type": "入库",
 *      "username": "3",
 *      "count": 5,
 *      "money": 10
 *    },
 *    {
 *      "id": 13,
 *      "goods_id": 3,
 *      "loc_id": null,
 *      "car_id": 1,
 *      "type": "入库",
 **      "username": "3",
 *      "count": 5,
 *      "money": 10
 *    }
 * ]
 *
 */
