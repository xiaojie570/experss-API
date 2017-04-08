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
    "url": "/car_oil/addOneRecord",
    "title": "增加一条加油记录",
    "permission": [
      {
        "name": "none"
      }
    ],
    "group": "car_oil",
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
            "field": "money",
            "description": "<p>金额.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "显示所有车的加油记录\n [\n       {\n         \"id\": 1,\n         \"car_id\": null,\n         \"license_plate\": \"辽C111111\",\n         \"money\": 100,\n         \"year\": \"2017\",\n         \"month\": null,\n         \"day\": \"3\"\n       },\n ]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "1-->车牌照不能为空\n{\n   \"status\": \"1\"\n}\n\n2-->金额不能为空\n{\n   \"status\": \"2\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Login/car_oil.js",
    "groupTitle": "car_oil",
    "name": "PostCar_oilAddonerecord"
  },
  {
    "type": "post",
    "url": "/car_oil/deleteOneRecordByid",
    "title": "删除一条加油记录",
    "permission": [
      {
        "name": "none"
      }
    ],
    "group": "car_oil",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>加油id.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "显示所有车的加油记录\n [\n       {\n         \"id\": 1,\n         \"car_id\": null,\n         \"license_plate\": \"辽C111111\",\n         \"money\": 100,\n         \"year\": \"2017\",\n         \"month\": null,\n         \"day\": \"3\"\n       },\n ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Login/car_oil.js",
    "groupTitle": "car_oil",
    "name": "PostCar_oilDeleteonerecordbyid"
  },
  {
    "type": "post",
    "url": "/car_oil/queryAll",
    "title": "查询所有加油记录",
    "permission": [
      {
        "name": "none"
      }
    ],
    "group": "car_oil",
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "显示所有加油记录\n [\n       {\n         \"id\": 1,\n         \"car_id\": null,\n         \"license_plate\": \"辽C111111\",\n         \"money\": 100,\n         \"year\": \"2017\",\n         \"month\": null,\n         \"day\": \"3\"\n       },\n       {\n         \"id\": 2,\n         \"car_id\": null,\n         \"license_plate\": \"辽C123456\",\n         \"money\": 100,\n         \"year\": \"2017\",\n         \"month\": null,\n         \"day\": \"3\"\n       }\n  ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Login/car_oil.js",
    "groupTitle": "car_oil",
    "name": "PostCar_oilQueryall"
  },
  {
    "type": "post",
    "url": "/car_oil/queryRecordByLicense_plate",
    "title": "按车牌照查询加油记录",
    "permission": [
      {
        "name": "none"
      }
    ],
    "group": "car_oil",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "license_plate",
            "description": "<p>车牌号.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "显示一辆车的加油记录\n [\n       {\n         \"id\": 1,\n         \"car_id\": null,\n         \"license_plate\": \"辽C111111\",\n         \"money\": 100,\n         \"year\": \"2017\",\n         \"month\": null,\n         \"day\": \"3\"\n       },\n ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Login/car_oil.js",
    "groupTitle": "car_oil",
    "name": "PostCar_oilQueryrecordbylicense_plate"
  },
  {
    "type": "post",
    "url": "/car_oil/queryRecordByLicense_plate",
    "title": "按车牌照查找加油记录",
    "permission": [
      {
        "name": "none"
      }
    ],
    "group": "car_oil",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>加油id.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "\n[\n      {\n        \"id\": 1,\n        \"car_id\": null,\n        \"license_plate\": \"辽C111111\",\n        \"money\": 100,\n        \"year\": \"2017\",\n        \"month\": null,\n        \"day\": \"3\"\n      },\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Login/car_oil.js",
    "groupTitle": "car_oil",
    "name": "PostCar_oilQueryrecordbylicense_plate"
  },
  {
    "type": "post",
    "url": "/car_oil/updateOneRecordByid",
    "title": "按加油id修改加油记录",
    "permission": [
      {
        "name": "none"
      }
    ],
    "group": "car_oil",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>加油id.</p>"
          },
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
            "field": "money",
            "description": "<p>金额.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "显示所有加油记录\n [\n       {\n         \"id\": 1,\n         \"car_id\": null,\n         \"license_plate\": \"辽C111111\",\n         \"money\": 100,\n         \"year\": \"2017\",\n         \"month\": null,\n         \"day\": \"3\"\n       },\n ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Login/car_oil.js",
    "groupTitle": "car_oil",
    "name": "PostCar_oilUpdateonerecordbyid"
  },
  {
    "type": "post",
    "url": "/car_repair/addOneRecord",
    "title": "增加一条维修记录",
    "permission": [
      {
        "name": "none"
      }
    ],
    "group": "car_repair",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "license_plate",
            "description": "<p>车牌号.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "service_details",
            "description": "<p>车辆维修细节.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "money",
            "description": "<p>维修金额.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "显示所有维修记录\n [\n   {\n     \"id\": 5,\n     \"car_id\": null,\n     \"year\": \"2017\",\n     \"month\": \"4\",\n     \"day\": \"7\",\n     \"license_plate\": \"辽C111111\",\n     \"service_details\": \"修轮胎\",\n     \"money\": 100,\n     \"employee_name\": null\n   },\n   {\n     \"id\": 6,\n     \"car_id\": null,\n     \"year\": \"2017\",\n     \"month\": \"4\",\n     \"day\": \"7\",\n     \"license_plate\": \"辽C111111\",\n     \"service_details\": \"修轮胎\",\n     \"money\": 100,\n     \"employee_name\": \"司机4\"\n   }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Login/car_repair.js",
    "groupTitle": "car_repair",
    "name": "PostCar_repairAddonerecord"
  },
  {
    "type": "post",
    "url": "/car_repair/deleteOneRecord",
    "title": "删除一条维修记录",
    "permission": [
      {
        "name": "none"
      }
    ],
    "group": "car_repair",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>记录id.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "显示所有维修记录\n [\n   {\n     \"id\": 5,\n     \"car_id\": null,\n     \"year\": \"2017\",\n     \"month\": \"4\",\n     \"day\": \"7\",\n     \"license_plate\": \"辽C111111\",\n     \"service_details\": \"修轮胎\",\n     \"money\": 100,\n     \"employee_name\": null\n   },\n   {\n     \"id\": 6,\n     \"car_id\": null,\n     \"year\": \"2017\",\n     \"month\": \"4\",\n     \"day\": \"7\",\n     \"license_plate\": \"辽C111111\",\n     \"service_details\": \"修轮胎\",\n     \"money\": 100,\n     \"employee_name\": \"司机4\"\n   }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Login/car_repair.js",
    "groupTitle": "car_repair",
    "name": "PostCar_repairDeleteonerecord"
  },
  {
    "type": "post",
    "url": "/car_repair/queryAll",
    "title": "查询所有维修记录",
    "permission": [
      {
        "name": "none"
      }
    ],
    "group": "car_repair",
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "显示所有维修记录\n [\n   {\n     \"id\": 5,\n     \"car_id\": null,\n     \"year\": \"2017\",\n     \"month\": \"4\",\n     \"day\": \"7\",\n     \"license_plate\": \"辽C111111\",\n     \"service_details\": \"修轮胎\",\n     \"money\": 100,\n     \"employee_name\": null\n   },\n   {\n     \"id\": 6,\n     \"car_id\": null,\n     \"year\": \"2017\",\n     \"month\": \"4\",\n     \"day\": \"7\",\n     \"license_plate\": \"辽C111111\",\n     \"service_details\": \"修轮胎\",\n     \"money\": 100,\n     \"employee_name\": \"司机4\"\n   }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Login/car_repair.js",
    "groupTitle": "car_repair",
    "name": "PostCar_repairQueryall"
  },
  {
    "type": "post",
    "url": "/car_repair/queryByMonth",
    "title": "查询当月维修记录",
    "permission": [
      {
        "name": "none"
      }
    ],
    "group": "car_repair",
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": " [\n   {\n     \"id\": 5,\n     \"car_id\": null,\n     \"year\": \"2017\",\n     \"month\": \"4\",\n     \"day\": \"7\",\n     \"license_plate\": \"辽C111111\",\n     \"service_details\": \"修轮胎\",\n     \"money\": 100,\n     \"employee_name\": null\n   },\n   {\n     \"id\": 6,\n     \"car_id\": null,\n     \"year\": \"2017\",\n     \"month\": \"4\",\n     \"day\": \"7\",\n     \"license_plate\": \"辽C111111\",\n     \"service_details\": \"修轮胎\",\n     \"money\": 100,\n     \"employee_name\": \"司机4\"\n   }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Login/car_repair.js",
    "groupTitle": "car_repair",
    "name": "PostCar_repairQuerybymonth"
  },
  {
    "type": "post",
    "url": "/car_repair/queryByMonthandlicense_plate",
    "title": "一辆车当月维修记录",
    "permission": [
      {
        "name": "none"
      }
    ],
    "group": "car_repair",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "license_plate",
            "description": "<p>车牌号.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "\n [\n   {\n     \"id\": 5,\n     \"car_id\": null,\n     \"year\": \"2017\",\n     \"month\": \"4\",\n     \"day\": \"7\",\n     \"license_plate\": \"辽C111111\",\n     \"service_details\": \"修轮胎\",\n     \"money\": 100,\n     \"employee_name\": null\n   },\n   {\n     \"id\": 6,\n     \"car_id\": null,\n     \"year\": \"2017\",\n     \"month\": \"4\",\n     \"day\": \"7\",\n     \"license_plate\": \"辽C111111\",\n     \"service_details\": \"修轮胎\",\n     \"money\": 100,\n     \"employee_name\": \"司机4\"\n   }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Login/car_repair.js",
    "groupTitle": "car_repair",
    "name": "PostCar_repairQuerybymonthandlicense_plate"
  },
  {
    "type": "post",
    "url": "/car_repair/queryByYear",
    "title": "查询当年维修记录",
    "permission": [
      {
        "name": "none"
      }
    ],
    "group": "car_repair",
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "[\n   {\n      \"id\": 2,\n      \"car_id\": null,\n      \"year\": \"2017\",\n      \"month\": \"5\",\n      \"day\": \"7\",\n      \"license_plate\": \"辽C111111\",\n      \"service_details\": \"修轮胎\",\n      \"money\": 100,\n      \"employee_name\": null\n    },\n   {\n     \"id\": 3,\n     \"car_id\": null,\n     \"year\": \"2017\",\n     \"month\": \"6\",\n     \"day\": \"7\",\n     \"license_plate\": \"辽C111111\",\n     \"service_details\": \"修轮胎\",\n     \"money\": 100,\n     \"employee_name\": null\n   }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Login/car_repair.js",
    "groupTitle": "car_repair",
    "name": "PostCar_repairQuerybyyear"
  },
  {
    "type": "post",
    "url": "/car_repair/queryByYearandlicense_plate",
    "title": "一辆车当年维修记录",
    "permission": [
      {
        "name": "none"
      }
    ],
    "group": "car_repair",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "license_plate",
            "description": "<p>车牌号.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "\n [\n   {\n     \"id\": 5,\n     \"car_id\": null,\n     \"year\": \"2017\",\n     \"month\": \"4\",\n     \"day\": \"7\",\n     \"license_plate\": \"辽C111111\",\n     \"service_details\": \"修轮胎\",\n     \"money\": 100,\n     \"employee_name\": null\n   },\n   {\n     \"id\": 6,\n     \"car_id\": null,\n     \"year\": \"2017\",\n     \"month\": \"4\",\n     \"day\": \"7\",\n     \"license_plate\": \"辽C111111\",\n     \"service_details\": \"修轮胎\",\n     \"money\": 100,\n     \"employee_name\": \"司机4\"\n   }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Login/car_repair.js",
    "groupTitle": "car_repair",
    "name": "PostCar_repairQuerybyyearandlicense_plate"
  },
  {
    "type": "post",
    "url": "/employee/addPosition",
    "title": "增加职位类型",
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
            "field": "position",
            "description": "<p>职位名称.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "[\n   \"司机\",\n   \"会计\",\n   \"卸货员\",\n   \"装载员\"\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Login/employee.js",
    "groupTitle": "employee",
    "name": "PostEmployeeAddposition"
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
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "1-->更新失败\n{\n   \"status\": \"1\"\n}",
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
            "description": "<p>token中的username.</p>"
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
    "url": "/employee/updatePosition",
    "title": "更新职位类型",
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
          "content": "[\n    \"司机\",\n    \"会计\",\n    \"卸货员\",\n    \"装货员\"\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "1-->更新失败\n{\n   \"status\": \"1\"\n}\n\n2-->不能更新该职位，因为有该职位的员工\n{\n   \"status\": \"2\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Login/employee.js",
    "groupTitle": "employee",
    "name": "PostEmployeeUpdateposition"
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
    "url": "/goods/addGoods",
    "title": "增加一个货物",
    "permission": [
      {
        "name": "none"
      }
    ],
    "group": "goods",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "loc_id",
            "description": "<p>储位.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "count",
            "description": "<p>货物数量.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "goods_name",
            "description": "<p>货物名称.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "显示刚刚增加的货物信息\n[\n   {\n     \"id\": 18,\n     \"loc_id\": 5,\n     \"count\": 10,\n     \"goods_name\": \"大串\"\n   }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "1-->储位没有位置了，需要重新增加一个储位\n{\n  \"status\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Login/goods.js",
    "groupTitle": "goods",
    "name": "PostGoodsAddgoods"
  },
  {
    "type": "post",
    "url": "/goods/queryAll",
    "title": "查询所有货物",
    "permission": [
      {
        "name": "none"
      }
    ],
    "group": "goods",
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "[\n   {\n     \"id\": 1,\n     \"loc_id\": 1,\n     \"count\": 10,\n     \"goods_name\": \"锡纸金针菇\"\n   },\n   {\n     \"id\": 2,\n     \"loc_id\": 1,\n     \"count\": 10,\n     \"goods_name\": \"锡纸花甲粉\"\n   },\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Login/goods.js",
    "groupTitle": "goods",
    "name": "PostGoodsQueryall"
  },
  {
    "type": "post",
    "url": "/storage_location/queryNoGoods_id",
    "title": "查找没有货物的储位",
    "permission": [
      {
        "name": "none"
      }
    ],
    "group": "goods",
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "[\n    {\n     \"loc_id\": 5\n   },\n   {\n     \"loc_id\": 6\n   }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Login/goods.js",
    "groupTitle": "goods",
    "name": "PostStorage_locationQuerynogoods_id"
  },
  {
    "type": "post",
    "url": "/goods_flow/addGoods_flow",
    "title": "货物流动",
    "permission": [
      {
        "name": "none"
      }
    ],
    "group": "goods_flow",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "goods_id",
            "description": "<p>货物id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "loc_id",
            "description": "<p>货物储位id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "car_id",
            "description": "<p>汽车id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>入库出库类型.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "money",
            "description": "<p>货物单价.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "count",
            "description": "<p>货物数量.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "查找所有货物流动信息\n[\n    {\n          \"id\": 15,\n          \"goods_id\": 4,\n          \"loc_id\": null,\n          \"car_id\": 1,\n          \"type\": \"入库\",\n          \"username\": \"3\",\n          \"count\": 5,\n          \"money\": 10\n        },\n       {\n         \"id\": 16,\n         \"goods_id\": 4,\n         \"loc_id\": null,\n         \"car_id\": 1,\n         \"type\": \"入库\",\n         \"username\": \"3\",\n         \"count\": 6,\n         \"money\": 10\n     }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "1-->货物没有储位了，需要创建储位\n{\n     \"status\":\"1\"\n}\n\n2-->没有该货物，需要先创建该货物\n{\n     \"status\":\"2\"\n}\n\n3-->货物数量不足，不能出库\n{\n     \"status\":\"3\"\n}\n\n4-->货物id为空\n{\n     \"status\":\"4\"\n}\n\n5-->车辆不能为空\n{\n     \"status\":\"5\"\n}\n\n6-->货物出入库类型不能为空\n{\n     \"status\":\"6\"\n}\n\n7-->货物数量为空\n{\n     \"status\":\"7\"\n}\n\n8-->货物金额为空\n{\n     \"status\":\"8\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Login/goods_flow.js",
    "groupTitle": "goods_flow",
    "name": "PostGoods_flowAddgoods_flow"
  },
  {
    "type": "post",
    "url": "/goods_flow/flow_typeDao",
    "title": "查找入库出库类型",
    "permission": [
      {
        "name": "none"
      }
    ],
    "group": "goods_flow",
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "[\n       \"入库\",\n       \"出库\"\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Login/goods_flow.js",
    "groupTitle": "goods_flow",
    "name": "PostGoods_flowFlow_typedao"
  },
  {
    "type": "post",
    "url": "/goods_flow/queryAll",
    "title": "查找所有货物流动信息",
    "permission": [
      {
        "name": "none"
      }
    ],
    "group": "goods_flow",
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "[\n    {\n          \"id\": 15,\n          \"goods_id\": 4,\n          \"loc_id\": null,\n          \"car_id\": 1,\n          \"type\": \"入库\",\n          \"username\": \"3\",\n          \"count\": 5,\n          \"money\": 10\n        },\n       {\n         \"id\": 16,\n         \"goods_id\": 4,\n         \"loc_id\": null,\n         \"car_id\": 1,\n         \"type\": \"入库\",\n         \"username\": \"3\",\n         \"count\": 6,\n         \"money\": 10\n     }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Login/goods_flow.js",
    "groupTitle": "goods_flow",
    "name": "PostGoods_flowQueryall"
  },
  {
    "type": "post",
    "url": "/goods_flow/queryByUsername",
    "title": "查询自己的入库出库信息",
    "permission": [
      {
        "name": "none"
      }
    ],
    "group": "goods_flow",
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "[\n   {\n     \"id\": 8,\n     \"goods_id\": 3,\n     \"loc_id\": 2,\n     \"car_id\": 1,\n     \"type\": \"入库\",\n     \"username\": \"3\",\n     \"count\": 20,\n     \"money\": 10\n   },\n   {\n     \"id\": 9,\n     \"goods_id\": 3,\n     \"loc_id\": 2,\n     \"car_id\": 1,\n     \"type\": \"出库\",\n     \"username\": \"3\",\n     \"count\": 20,\n     \"money\": 10\n   }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Login/goods_flow.js",
    "groupTitle": "goods_flow",
    "name": "PostGoods_flowQuerybyusername"
  },
  {
    "type": "post",
    "url": "/goods_flow/queryByUsernameAndIn",
    "title": "查询自己的入库信息",
    "permission": [
      {
        "name": "none"
      }
    ],
    "group": "goods_flow",
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "[\n   {\n     \"id\": 8,\n     \"goods_id\": 3,\n     \"loc_id\": 2,\n     \"car_id\": 1,\n     \"type\": \"入库\",\n     \"username\": \"3\",\n     \"count\": 20,\n     \"money\": 10\n   },\n   {\n     \"id\": 12,\n     \"goods_id\": 3,\n     \"loc_id\": 2,\n     \"car_id\": 1,\n     \"type\": \"入库\",\n     \"username\": \"3\",\n     \"count\": 5,\n     \"money\": 10\n   },\n   {\n     \"id\": 13,\n     \"goods_id\": 3,\n     \"loc_id\": null,\n     \"car_id\": 1,\n     \"type\": \"入库\",\n*      \"username\": \"3\",\n     \"count\": 5,\n     \"money\": 10\n   }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Login/goods_flow.js",
    "groupTitle": "goods_flow",
    "name": "PostGoods_flowQuerybyusernameandin"
  },
  {
    "type": "post",
    "url": "/goods_flow/queryByUsernameAndOut",
    "title": "查询自己的出库信息",
    "permission": [
      {
        "name": "none"
      }
    ],
    "group": "goods_flow",
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "[\n   {\n     \"id\": 9,\n     \"goods_id\": 3,\n     \"loc_id\": 2,\n     \"car_id\": 1,\n     \"type\": \"出库\",\n     \"username\": \"3\",\n     \"count\": 20,\n     \"money\": 10\n   },\n   {\n     \"id\": 10,\n     \"goods_id\": 3,\n     \"loc_id\": 2,\n     \"car_id\": 1,\n     \"type\": \"出库\",\n     \"username\": \"3\",\n     \"count\": 2,\n     \"money\": 10\n   }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Login/goods_flow.js",
    "groupTitle": "goods_flow",
    "name": "PostGoods_flowQuerybyusernameandout"
  },
  {
    "type": "post",
    "url": "/goods_flow/queryInGoods",
    "title": "货物入库信息",
    "permission": [
      {
        "name": "none"
      }
    ],
    "group": "goods_flow",
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "[\n   {\n     \"id\": 1,\n     \"goods_id\": 1,\n     \"loc_id\": 1,\n     \"car_id\": 1,\n     \"type\": \"入库\",\n     \"username\": \"1\",\n     \"count\": null,\n     \"money\": null\n   },\n   {\n     \"id\": 3,\n     \"goods_id\": 1,\n     \"loc_id\": 1,\n     \"car_id\": 1,\n     \"type\": \"入库\",\n     \"username\": \"1\",\n     \"count\": 10,\n     \"money\": 10\n   }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Login/goods_flow.js",
    "groupTitle": "goods_flow",
    "name": "PostGoods_flowQueryingoods"
  },
  {
    "type": "post",
    "url": "/goods_flow/queryOutGoods",
    "title": "货物出库信息",
    "permission": [
      {
        "name": "none"
      }
    ],
    "group": "goods_flow",
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "[\n   {\n     \"id\": 9,\n     \"goods_id\": 3,\n     \"loc_id\": 2,\n     \"car_id\": 1,\n     \"type\": \"出库\",\n     \"username\": \"3\",\n     \"count\": 20,\n     \"money\": 10\n   },\n   {\n     \"id\": 10,\n     \"goods_id\": 3,\n     \"loc_id\": 2,\n     \"car_id\": 1,\n     \"type\": \"出库\",\n     \"username\": \"3\",\n     \"count\": 2,\n     \"money\": 10\n   }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Login/goods_flow.js",
    "groupTitle": "goods_flow",
    "name": "PostGoods_flowQueryoutgoods"
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
    "url": "/storage_location/addOne",
    "title": "增加一个储位",
    "permission": [
      {
        "name": "none"
      }
    ],
    "group": "storage",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "size",
            "description": "<p>储位大小.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "增加成功，返回所有储位记录\n[\n {\n \"loc_id\": 1,\n \"size\": 1000,\n \"goods_id\": 1,\n \"surplus_size\": 2870\n},\n{\n \"loc_id\": 2,\n \"size\": 1000,\n \"goods_id\": null,\n \"surplus_size\": 1000\n},\n{\n \"loc_id\": 3,\n \"size\": 100,\n \"goods_id\": null,\n \"surplus_size\": 90\n}\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Login/storage_lation.js",
    "groupTitle": "storage",
    "name": "PostStorage_locationAddone"
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
  },
  {
    "type": "post",
    "url": "/storage_location/queryOnestorage_locationbyId",
    "title": "查询一个储位",
    "permission": [
      {
        "name": "none"
      }
    ],
    "group": "storage",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "loc_id",
            "description": "<p>储位id.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "[\n  {\n    \"loc_id\": 1,\n     \"size\": 1000,\n     \"goods_id\": 1,\n     \"surplus_size\": 2870\n   }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Login/storage_lation.js",
    "groupTitle": "storage",
    "name": "PostStorage_locationQueryonestorage_locationbyid"
  },
  {
    "type": "post",
    "url": "/storage_location/updateOnestorage_locationbyId",
    "title": "更新储位大小",
    "permission": [
      {
        "name": "none"
      }
    ],
    "group": "storage",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "loc_id",
            "description": "<p>储位loc_id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "size",
            "description": "<p>储位大小.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "更新成功，返回所有储位记录\n[\n {\n \"loc_id\": 1,\n \"size\": 1000,\n \"goods_id\": 1,\n \"surplus_size\": 2870\n},\n{\n \"loc_id\": 2,\n \"size\": 1000,\n \"goods_id\": null,\n \"surplus_size\": 1000\n},\n{\n \"loc_id\": 3,\n \"size\": 100,\n \"goods_id\": null,\n \"surplus_size\": 90\n}\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Login/storage_lation.js",
    "groupTitle": "storage",
    "name": "PostStorage_locationUpdateonestorage_locationbyid"
  }
] });
