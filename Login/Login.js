
/**
 * @api {post} /users/login 登录.
 * @apiPermission none
 * @apoGroup A
 *
 * @apiParam {String} username 用户名.
 * @apiParam {String} password  密码.
 * @apiParamExample Request-Example: 以下信息已在数据库内创建，可直接用来认证
 * {
 *    "username": "5"
 *    "password": "5"
 * }
 *
 * @apiSuccess {String} status 返回status值给客户端用于验证（0--> 用户名密码正确；1-->无此用户；2-->密码错误）
 * 
 * @apiSuccessExample {json} Success-Response :
 * 0-->用户名密码正确
 * {
 *    "status": "0"
 * }
 *
 * @apiErrorExample {json} Error-Response:
 * 1-->用户名不存在
 * {
 *    "status": "1"
 * }
 *
 * 2-->密码错误
 * {
 *    "status": "2"
 * }
 */




/**
 * @api {post} /users/register_judgeUsername 注册判断用户名是否正确.
 * @apiPermission none
 * @apoGroup A
 *
 * @apiParam {String} username 用户名.
 * @apiParamExample Request-Example: 以下信息已在数据库内创建，可直接用来认证
 * {
 *    "username": "2"
 * }
 *
 * @apiSuccess {String} status 返回status值给客户端用于验证（0--> 用户名不存在，可以进行注册；1-->用户名已存在）
 * 
 * @apiSuccessExample {json} Success-Response :
 * 0-->用户名不存在，可以进行注册
 * {
 *    "status": "0"
 * }
 *
 * @apiErrorExample {json} Error-Response:
 * 1-->用户名已存在
 * {
 *    "status": "1"
 * }
 *
 *
 */


/**
 * @api {post} /users/registerUser 注册判断用户名密码是否正确.
 * @apiPermission none
 * @apoGroup A
 *
 * @apiParam {String} username 用户名.
 * @apiParam {String} password  密码.
 * @apiParamExample Request-Example: 以下信息已在数据库内创建，可直接用来认证
 * {
 *    "username": "2"
 *    "password": "2"
 * }
 *
 * @apiSuccess {String} status 返回status值给客户端用于验证（0--> 注册成功；1-->用户名已存在;2--->密码为空）
 * 
 * @apiSuccessExample {json} Success-Response :
 * 0-->注册成功
 * {
 *    "status": "0"
 * }
 *
 * @apiErrorExample {json} Error-Response:
 * 1-->用户名已存在
 * {
 *    "status": "1"
 * }
 * 2-->密码为空
 * {
 *    "status": "2"
 * }
 */


/**
 * @api {post} /employee/selectEmployeePosition 找出员工职位的类型（不需要输入，直接点选），下来菜单的样式
 * @apiPermission none
 * @apoGroup B
 *
 *
 * @apiSuccessExample {json} Success-Response :
 * [
 * "司机",
 * "会计"
 * ]
 */



/**
 * @api {post} /employee/updateStaffposition 点击更新提交-->更新职员信息，按照session里的username更新.
 * @apiPermission none
 * @apoGroup B
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