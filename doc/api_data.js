define({ "api": [
  {
    "type": "post",
    "url": "/employee/selectEmployeePosition",
    "title": "找出员工职位的类型（不需要输入，直接点选），下来菜单的样式",
    "permission": [
      {
        "name": "none"
      }
    ],
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
    "filename": "Login/Login.js",
    "group": "D__nodewebpack_api_Login_Login_js",
    "groupTitle": "D__nodewebpack_api_Login_Login_js",
    "name": "PostEmployeeSelectemployeeposition"
  },
  {
    "type": "post",
    "url": "/employee/updateStaffposition",
    "title": "点击更新提交-->更新职员信息，按照session里的username更新.",
    "permission": [
      {
        "name": "none"
      }
    ],
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
    "filename": "Login/Login.js",
    "group": "D__nodewebpack_api_Login_Login_js",
    "groupTitle": "D__nodewebpack_api_Login_Login_js",
    "name": "PostEmployeeUpdatestaffposition"
  },
  {
    "type": "post",
    "url": "/users/login",
    "title": "登录.",
    "permission": [
      {
        "name": "none"
      }
    ],
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
    "group": "D__nodewebpack_api_Login_Login_js",
    "groupTitle": "D__nodewebpack_api_Login_Login_js",
    "name": "PostUsersLogin"
  },
  {
    "type": "post",
    "url": "/users/register_judgeUsername",
    "title": "注册判断用户名是否正确.",
    "permission": [
      {
        "name": "none"
      }
    ],
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
    "group": "D__nodewebpack_api_Login_Login_js",
    "groupTitle": "D__nodewebpack_api_Login_Login_js",
    "name": "PostUsersRegister_judgeusername"
  },
  {
    "type": "post",
    "url": "/users/registerUser",
    "title": "注册判断用户名密码是否正确.",
    "permission": [
      {
        "name": "none"
      }
    ],
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
    "group": "D__nodewebpack_api_Login_Login_js",
    "groupTitle": "D__nodewebpack_api_Login_Login_js",
    "name": "PostUsersRegisteruser"
  }
] });
