define({ "api": [
  {
    "type": "post",
    "url": "/car/addCar",
    "title": "增加车辆",
    "permission": [
      {
        "name": "none"
      }
    ],
    "group": "car",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "license_plate",
            "description": "<p>车牌照.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "position",
            "description": "<p>员工职位.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "employee_name",
            "description": "<p>员工姓名.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>返回status值给客户端</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response :",
          "content": "0-->增加成功\n{\n   \"status\": \"0\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "1-->license_plate(车牌照)为空\n{\n   \"status\": \"1\"\n}\n\n2-->position(职位)为空\n{\n   \"status\": \"2\"\n}\n3-->employee_name(名字)为空\n{\n   \"status\": \"2\"\n}\n4-->职称和名字不匹配\n{\n     \"status\": \"4\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Login/car.js",
    "groupTitle": "car",
    "name": "PostCarAddcar"
  },
  {
    "type": "post",
    "url": "/car/queryAllCar",
    "title": "查询所有车辆",
    "permission": [
      {
        "name": "none"
      }
    ],
    "group": "car",
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "{\n \"status\": \"0\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Login/car.js",
    "groupTitle": "car",
    "name": "PostCarQueryallcar"
  },
  {
    "type": "post",
    "url": "/car/queryOneCar",
    "title": "查询One",
    "permission": [
      {
        "name": "none"
      }
    ],
    "group": "car",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>车的id.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "{\n    \"id\": 1,\n    \"cti_id\": null,\n    \"license_plate\": \"辽C123456\",\n    \"employee_name\": \"司机2\",\n    \"position\": \"司机\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Login/car.js",
    "groupTitle": "car",
    "name": "PostCarQueryonecar"
  },
  {
    "type": "post",
    "url": "/car/updateOneCarInfo",
    "title": "更改",
    "permission": [
      {
        "name": "none"
      }
    ],
    "group": "car",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "license_plate",
            "description": "<p>车牌照.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "employee_name",
            "description": "<p>员工姓名.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "position",
            "description": "<p>员工职位.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "0-->更新成功\n{\n   \"status\": \"0\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "2-->车牌照为空\n{\n     \"status\":\"2\"\n}\n\n3-->司机为空\n{\n     \"status\":\"3\"\n}\n\n4-->职位为空\n{\n     \"status\":\"4\"\n}\n\n5-->不可以重复添加（车牌号和司机）\n{\n     \"status\":\"5\"\n}\n\n6-->职位和名字不匹配\n{\n     \"status\":\"6\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Login/car.js",
    "groupTitle": "car",
    "name": "PostCarUpdateonecarinfo"
  },
  {
    "type": "post",
    "url": "/employee/selectEmployee_nameByPosition",
    "title": "按职位找员工",
    "permission": [
      {
        "name": "none"
      }
    ],
    "group": "car",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "position",
            "description": "<p>职位.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "\n[\n  \"司机1\",\n \"司机2\",\n  \"司机3\",\n  \"付杰\",\n  \"dapang\"\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Login/car.js",
    "groupTitle": "car",
    "name": "PostEmployeeSelectemployee_namebyposition"
  },
  {
    "type": "post",
    "url": "/employee/selectEmployeePosition",
    "title": "职位类型",
    "permission": [
      {
        "name": "none"
      }
    ],
    "group": "car",
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "\n[\n \"司机\",\n \"会计\"\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Login/car.js",
    "groupTitle": "car",
    "name": "PostEmployeeSelectemployeeposition"
  },
  {
    "type": "post",
    "url": "/employee/modifyPassword",
    "title": "修改密码",
    "permission": [
      {
        "name": "none"
      }
    ],
    "group": "employee",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>新密码.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>session中的username.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "0-->修改成功\n{\n    \"status\": \"0\"\n}\n\n2-->密码为空\n{\n    \"status\": \"2\"\n}\n\n 3-->新密码与旧密码重复\n {\n     \"status\": \"3\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Login/employee.js",
    "groupTitle": "employee",
    "name": "PostEmployeeModifypassword"
  },
  {
    "type": "post",
    "url": "/employee/queryAll",
    "title": "查询所有员工信息",
    "permission": [
      {
        "name": "none"
      }
    ],
    "group": "employee",
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "[\n       {\n         \"id\": 1,\n         \"employee_name\": \"司机1\",\n         \"telephone\": \"3300817\",\n         \"salary\": null,\n         \"location\": \"辽宁\",\n         \"username\": \"8\",\n         \"position\": \"司机\"\n       },\n       {\n         \"id\": 2,\n         \"employee_name\": \"会计1\",\n         \"telephone\": \"3300817\",\n         \"salary\": null,\n         \"location\": \"辽宁\",\n         \"username\": \"12\",\n         \"position\": \"会计\"\n       }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Login/employee.js",
    "groupTitle": "employee",
    "name": "PostEmployeeQueryall"
  },
  {
    "type": "post",
    "url": "/employee/selectByUsername",
    "title": "查询个人信息",
    "permission": [
      {
        "name": "none"
      }
    ],
    "group": "employee",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>session中的username.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "0-->查询成功\n{\n  \"employee_name\": \"司机3\",\n  \"telephone\": \"3300817\",\n  \"salary\": null,\n  \"location\": \"辽宁鞍山\",\n  \"position\": \"司机\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Login/employee.js",
    "groupTitle": "employee",
    "name": "PostEmployeeSelectbyusername"
  },
  {
    "type": "post",
    "url": "/employee/selectEmployeePosition",
    "title": "职位类型",
    "permission": [
      {
        "name": "none"
      }
    ],
    "group": "employee",
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "[\n\"司机\",\n\"会计\"\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Login/employee.js",
    "groupTitle": "employee",
    "name": "PostEmployeeSelectemployeeposition"
  },
  {
    "type": "post",
    "url": "/employee/updateStaffposition",
    "title": "更新员工信息",
    "permission": [
      {
        "name": "none"
      }
    ],
    "group": "employee",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "employee_name",
            "description": "<p>职员名字.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "telephone",
            "description": "<p>职员电话.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>职员住址.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "position",
            "description": "<p>职员职位.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>返回status值给客户端用于判断（0--&gt; 更新成功；1--&gt;更新失败；2--&gt;更新失败 员工职位不存在）</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response :",
          "content": "0-->更新成功\n{\n   \"status\": \"0\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "1-->更新失败\n{\n   \"status\": \"1\"\n}\n 2-->更新失败 员工职位不存在\n{\n   \"status\": \"2\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Login/employee.js",
    "groupTitle": "employee",
    "name": "PostEmployeeUpdatestaffposition"
  },
  {
    "type": "post",
    "url": "/users/queryAll",
    "title": "查询所有用户名密码",
    "permission": [
      {
        "name": "none"
      }
    ],
    "group": "employee",
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "[\n {\n     \"id\": 1,\n     \"username\": \"1\",\n     \"password\": \"123456\",\n     \"role\": \"1\"\n   },\n   {\n     \"id\": 2,\n     \"username\": \"2\",\n     \"password\": \"2\",\n     \"role\": null\n   },\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Login/Login.js",
    "groupTitle": "employee",
    "name": "PostUsersQueryall"
  },
  {
    "type": "post",
    "url": "/employee/logout",
    "title": "注销",
    "permission": [
      {
        "name": "none"
      }
    ],
    "group": "login_register",
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "0-->注销成功\n{\n   \"status\": \"0\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Login/Login.js",
    "groupTitle": "login_register",
    "name": "PostEmployeeLogout"
  },
  {
    "type": "post",
    "url": "/users/login",
    "title": "登录",
    "permission": [
      {
        "name": "none"
      }
    ],
    "group": "login_register",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example: 以下信息已在数据库内创建，可直接用来认证",
          "content": "{\n   \"username\": \"5\"\n   \"password\": \"5\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>返回status值给客户端用于验证（0--&gt; 用户名密码正确；1--&gt;无此用户；2--&gt;密码错误）</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response :",
          "content": "0-->用户名密码正确\n{\n   \"status\": \"0\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "1-->用户名不存在\n{\n   \"status\": \"1\"\n}\n\n2-->密码错误\n{\n   \"status\": \"2\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Login/Login.js",
    "groupTitle": "login_register",
    "name": "PostUsersLogin"
  },
  {
    "type": "post",
    "url": "/users/register_judgeUsername",
    "title": "注册(判断用户名)",
    "permission": [
      {
        "name": "none"
      }
    ],
    "group": "login_register",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example: 以下信息已在数据库内创建，可直接用来认证",
          "content": "{\n   \"username\": \"2\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>返回status值给客户端用于验证（0--&gt; 用户名不存在，可以进行注册；1--&gt;用户名已存在）</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response :",
          "content": "0-->用户名不存在，可以进行注册\n{\n   \"status\": \"0\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "1-->用户名已存在\n{\n   \"status\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Login/Login.js",
    "groupTitle": "login_register",
    "name": "PostUsersRegister_judgeusername"
  },
  {
    "type": "post",
    "url": "/users/registerUser",
    "title": "注册",
    "permission": [
      {
        "name": "none"
      }
    ],
    "group": "login_register",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example: 以下信息已在数据库内创建，可直接用来认证",
          "content": "{\n   \"username\": \"2\"\n   \"password\": \"2\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>返回status值给客户端用于验证（0--&gt; 注册成功；1--&gt;用户名已存在;2---&gt;密码为空）</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response :",
          "content": "0-->注册成功\n{\n   \"status\": \"0\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "1-->用户名已存在\n{\n   \"status\": \"1\"\n}\n2-->密码为空\n{\n   \"status\": \"2\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Login/Login.js",
    "groupTitle": "login_register",
    "name": "PostUsersRegisteruser"
  },
  {
    "type": "post",
    "url": "/storage_location/queryAll",
    "title": "所有储位",
    "permission": [
      {
        "name": "none"
      }
    ],
    "group": "storage",
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "[\n {\n \"loc_id\": 1,\n \"size\": 1000,\n \"goods_id\": 1,\n \"surplus_size\": 2870\n},\n{\n \"loc_id\": 2,\n \"size\": 1000,\n \"goods_id\": null,\n \"surplus_size\": 1000\n},\n{\n \"loc_id\": 3,\n \"size\": 100,\n \"goods_id\": null,\n \"surplus_size\": 90\n}\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Login/storage_lation.js",
    "groupTitle": "storage",
    "name": "PostStorage_locationQueryall"
  }
] });
