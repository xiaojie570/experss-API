define({ "api": [
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
    "group": "D__Login_Login_js",
    "groupTitle": "D__Login_Login_js",
    "name": "PostUsersLogin"
  },
  {
    "type": "post",
    "url": "/users/register",
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
            "description": "<p>返回status值给客户端用于验证（0--&gt; 注册成功；1--&gt;用户名已存在）</p>"
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
          "content": "1-->用户名已存在\n{\n   \"status\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Login/Login.js",
    "group": "D__Login_Login_js",
    "groupTitle": "D__Login_Login_js",
    "name": "PostUsersRegister"
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
    "group": "D__Login_Login_js",
    "groupTitle": "D__Login_Login_js",
    "name": "PostUsersRegister_judgeusername"
  }
] });
