/**
 * @api {post} /storage_location/queryAll 所有储位
 * @apiPermission none
 * @apiGroup storage
 *
 * 
 *  @apiSuccessExample {json} Success-Response :
 * [
 *  {
 *  "loc_id": 1,
 *  "size": 1000,
 *  "goods_id": 1,
 *  "surplus_size": 2870
 * },
 * {
 *  "loc_id": 2,
 *  "size": 1000,
 *  "goods_id": null,
 *  "surplus_size": 1000
 * },
 * {
 *  "loc_id": 3,
 *  "size": 100,
 *  "goods_id": null,
 *  "surplus_size": 90
 * }
 * ]
 */



/**
 * @api {post} /storage_location/queryOnestorage_locationbyId 查询一个储位
 * @apiPermission none
 * @apiGroup storage
 *
 * @apiParam {String} loc_id 储位id.
 *  
 *  @apiSuccessExample {json} Success-Response :
 * [
 *   {
 *     "loc_id": 1,
 *      "size": 1000,
 *      "goods_id": 1,
 *      "surplus_size": 2870
 *    }
 * ]
 */



/**
 * @api {post} /storage_location/updateOnestorage_locationbyId 更新储位大小
 * @apiPermission none
 * @apiGroup storage
 *
 * @apiParam {String} loc_id 储位loc_id.
 * @apiParam {String} size 储位大小.
 *
 * @apiSuccessExample {json} Success-Response :
 * 更新成功，返回所有储位记录
 * [
 *  {
 *  "loc_id": 1,
 *  "size": 1000,
 *  "goods_id": 1,
 *  "surplus_size": 2870
 * },
 * {
 *  "loc_id": 2,
 *  "size": 1000,
 *  "goods_id": null,
 *  "surplus_size": 1000
 * },
 * {
 *  "loc_id": 3,
 *  "size": 100,
 *  "goods_id": null,
 *  "surplus_size": 90
 * }
 * ]
 */

/**
 * @api {post} /storage_location/addOne 增加一个储位
 * @apiPermission none
 * @apiGroup storage
 *
 * @apiParam {String} size 储位大小.
 *
 * @apiSuccessExample {json} Success-Response :
 * 增加成功，返回所有储位记录
 * [
 *  {
 *  "loc_id": 1,
 *  "size": 1000,
 *  "goods_id": 1,
 *  "surplus_size": 2870
 * },
 * {
 *  "loc_id": 2,
 *  "size": 1000,
 *  "goods_id": null,
 *  "surplus_size": 1000
 * },
 * {
 *  "loc_id": 3,
 *  "size": 100,
 *  "goods_id": null,
 *  "surplus_size": 90
 * }
 * ]
 */

