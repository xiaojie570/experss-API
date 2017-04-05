define({ "api": [
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
  }
] });
