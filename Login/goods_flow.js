
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
 * @apiSuccessExample {json} Success-Response :
 * [
 *        "入库",
 *        "出库"
 * ]
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
 * @api {post} /goods_flow/queryOutGoods 货物入库信息
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
