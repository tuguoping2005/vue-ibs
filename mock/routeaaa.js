function test (){

return {
  "code": 0,
  "message": "调用成功",
  "data": {
    "count": 40,
    "list": [
      {
        "id": 1,
        "haschildren": 1,
        "pid": 0,
        "name": "",
        "type": 1,
        "hidden": "1",
        "title": "系统管理",
        "icon": "form",
        "path": "/system",
        "permission": "",
        "sort": 99,
        "component": "Layout",
        "status": 1,
        "meta": {
          "title": "系统管理",
          "icon": "form",
          "roles": []
        },
        "children": [
          {
            "id": 15,
            "haschildren": 1,
            "pid": 1,
            "name": "menu",
            "type": 2,
            "hidden": "1",
            "title": "菜单管理",
            "icon": "dashboard",
            "path": "/system/menu",
            "permission": "",
            "sort": 12,
            "component": "system/menu/index",
            "status": 1,
            "meta": {
              "title": "菜单管理",
              "icon": "dashboard",
              "roles": [
                "add",
                "edit",
                "delete"
              ]
            }
          },
          {
            "id": 16,
            "haschildren": 1,
            "pid": 1,
            "name": "user",
            "type": 2,
            "hidden": "1",
            "title": "用户管理",
            "icon": "dashboard",
            "path": "/system/user",
            "permission": "",
            "sort": 11,
            "component": "system/user/index",
            "status": 1,
            "meta": {
              "title": "用户管理",
              "icon": "dashboard",
              "roles": [
                "add",
                "edit",
                "delete"
              ]
            }
          },
          {
            "id": 23,
            "haschildren": 1,
            "pid": 1,
            "name": "role",
            "type": 2,
            "hidden": "1",
            "title": "角色管理",
            "icon": "dashboard",
            "path": "/system/role",
            "permission": "",
            "sort": 10,
            "component": "system/roles/index",
            "status": 1,
            "meta": {
              "title": "角色管理",
              "icon": "dashboard",
              "roles": [
                "add",
                "edit",
                "delete",
                "give"
              ]
            }
          },
          {
            "id": 42,
            "haschildren": 1,
            "pid": 1,
            "name": "sms",
            "type": 2,
            "hidden": "1",
            "title": "短信列表",
            "icon": "menu",
            "path": "/training/msgs",
            "permission": "",
            "sort": 0,
            "component": "system/msgs/index",
            "status": 1,
            "meta": {
              "title": "短信列表",
              "icon": "menu",
              "roles": [
                "export"
              ]
            }
          }
        ]
      },
      {
        "id": 79,
        "haschildren": 1,
        "pid": 0,
        "name": "",
        "type": 1,
        "hidden": "1",
        "title": "用户管理",
        "icon": "user",
        "path": "/member",
        "permission": "",
        "sort": 98,
        "component": "Layout",
        "status": 1,
        "meta": {
          "title": "用户管理",
          "icon": "user",
          "roles": []
        },
        "children": [{
            "id": 80,
            "haschildren": 0,
            "pid": 79,
            "name": "memberList",
            "type": 2,
            "hidden": "1",
            "title": "用户列表",
            "icon": "menu",
            "path": "/member/memberList",
            "permission": "",
            "sort": 0,
            "component": "member/memberList/index",
            "status": 1,
            "meta": {
              "title": "用户列表",
              "icon": "menu",
              "roles": []
            }
          },
          {
            "id": 81,
            "haschildren": 0,
            "pid": 79,
            "name": "memberMsg",
            "type": 2,
            "hidden": "1",
            "title": "用户消息",
            "icon": "menu",
            "path": "/member/memberMsg",
            "permission": "",
            "sort": 0,
            "component": "member/memberMsg/index",
            "status": 1,
            "meta": {
              "title": "用户消息",
              "icon": "menu",
              "roles": []
            }
          }
        ]
      },
      {
        "id": 86,
        "haschildren": 1,
        "pid": 0,
        "name": "",
        "type": 1,
        "hidden": "1",
        "title": "知识产品",
        "icon": "education",
        "path": "/product",
        "permission": "",
        "sort": 97,
        "component": "Layout",
        "status": 1,
        "meta": {
          "title": "知识产品",
          "icon": "education",
          "roles": []
        },
        "children": [{
            "id": 88,
            "haschildren": 0,
            "pid": 86,
            "name": "category",
            "type": 2,
            "hidden": "1",
            "title": "类别管理",
            "icon": "education",
            "path": "/product/category",
            "permission": "",
            "sort": 10,
            "component": "product/category/index",
            "status": 1,
            "meta": {
              "title": "类别管理",
              "icon": "education",
              "roles": []
            }
          },
          {
            "id": 87,
            "haschildren": 0,
            "pid": 86,
            "name": "courseList",
            "type": 2,
            "hidden": "1",
            "title": "课程管理",
            "icon": "theme",
            "path": "/product/courseList",
            "permission": "",
            "sort": 0,
            "component": "product/courseList/index",
            "status": 1,
            "meta": {
              "title": "课程管理",
              "icon": "theme",
              "roles": []
            }
          },
          {
            "id": 89,
            "haschildren": 0,
            "pid": 86,
            "name": "addcourse",
            "type": 2,
            "hidden": "0",
            "title": "新增课程",
            "icon": "dashboard",
            "path": "/product/addcourse",
            "permission": "",
            "sort": 0,
            "component": "product/addcourse/index",
            "status": 1,
            "meta": {
              "title": "新增课程",
              "icon": "dashboard",
              "roles": []
            }
          },
          {
            "id": 90,
            "haschildren": 0,
            "pid": 86,
            "name": "column",
            "type": 2,
            "hidden": "1",
            "title": "专栏管理",
            "icon": "list",
            "path": "/product/column",
            "permission": "",
            "sort": 0,
            "component": "product/column/index",
            "status": 1,
            "meta": {
              "title": "专栏管理",
              "icon": "list",
              "roles": []
            }
          },
          {
            "id": 91,
            "haschildren": 0,
            "pid": 86,
            "name": "editcourse",
            "type": 2,
            "hidden": "0",
            "title": "编辑课程",
            "icon": "dashboard",
            "path": "/product/editcourse/:id",
            "permission": "",
            "sort": 0,
            "component": "product/editcourse/index",
            "status": 1,
            "meta": {
              "title": "编辑课程",
              "icon": "dashboard",
              "roles": []
            }
          }
        ]
      },
      {
        "id": 46,
        "haschildren": 1,
        "pid": 0,
        "name": "",
        "type": 1,
        "hidden": "1",
        "title": "直播管理",
        "icon": "international",
        "path": "/live",
        "permission": "",
        "sort": 2,
        "component": "Layout",
        "status": 1,
        "meta": {
          "title": "直播管理",
          "icon": "international",
          "roles": []
        },
        "children": [{
            "id": 47,
            "haschildren": 0,
            "pid": 46,
            "name": "liveList",
            "type": 2,
            "hidden": "1",
            "title": "直播列表",
            "icon": "menu",
            "path": "/live/liveList",
            "permission": "",
            "sort": 0,
            "component": "live/liveList/index",
            "status": 1,
            "meta": {
              "title": "直播列表",
              "icon": "menu",
              "roles": []
            }
          },
          {
            "id": 48,
            "haschildren": 0,
            "pid": 46,
            "name": "auditList",
            "type": 2,
            "hidden": "1",
            "title": "审核列表",
            "icon": "menu",
            "path": "/live/auditList",
            "permission": "",
            "sort": 0,
            "component": "live/auditList/index",
            "status": 1,
            "meta": {
              "title": "审核列表",
              "icon": "menu",
              "roles": []
            }
          },
          {
            "id": 49,
            "haschildren": 0,
            "pid": 46,
            "name": "config",
            "type": 2,
            "hidden": "1",
            "title": "直播配置",
            "icon": "menu",
            "path": "/live/config",
            "permission": "",
            "sort": 0,
            "component": "live/config/index",
            "status": 1,
            "meta": {
              "title": "直播配置",
              "icon": "menu",
              "roles": []
            }
          },
          {
            "id": 50,
            "haschildren": 0,
            "pid": 46,
            "name": "addlive",
            "type": 2,
            "hidden": "0",
            "title": "创建直播间",
            "icon": "menu",
            "path": "/live/addlive",
            "permission": "",
            "sort": 0,
            "component": "live/addlive/index",
            "status": 1,
            "meta": {
              "title": "创建直播间",
              "icon": "menu",
              "roles": []
            }
          },
          {
            "id": 51,
            "haschildren": 0,
            "pid": 46,
            "name": "editlive",
            "type": 2,
            "hidden": "0",
            "title": "编辑直播间",
            "icon": "menu",
            "path": "/live/editlive/:id",
            "permission": "",
            "sort": 0,
            "component": "live/editlive/index",
            "status": 1,
            "meta": {
              "title": "编辑直播间",
              "icon": "menu",
              "roles": []
            }
          }
        ]
      },
      {
        "id": 19,
        "haschildren": 1,
        "pid": 0,
        "name": "",
        "type": 1,
        "hidden": "1",
        "title": "培训认证",
        "icon": "form",
        "path": "/training",
        "permission": "",
        "sort": 1,
        "component": "Layout",
        "status": 1,
        "meta": {
          "title": "培训认证",
          "icon": "form",
          "roles": []
        },
        "children": [{
            "id": 20,
            "haschildren": 1,
            "pid": 19,
            "name": "type",
            "type": 2,
            "hidden": "1",
            "title": "类别管理",
            "icon": "menu",
            "path": "/training/type",
            "permission": "",
            "sort": 6,
            "component": "training/type/index",
            "status": 1,
            "meta": {
              "title": "类别管理",
              "icon": "menu",
              "roles": [
                "add:top",
                "add:children",
                "edit",
                "delete"
              ]
            }
          },
          {
            "id": 21,
            "haschildren": 1,
            "pid": 19,
            "name": "course",
            "type": 2,
            "hidden": "1",
            "title": "课程列表",
            "icon": "menu",
            "path": "/training/course",
            "permission": "",
            "sort": 5,
            "component": "training/course/index",
            "status": 1,
            "meta": {
              "title": "课程列表",
              "icon": "menu",
              "roles": [
                "delete",
                "edit",
                "add",
                "see"
              ]
            }
          },
          {
            "id": 27,
            "haschildren": 1,
            "pid": 19,
            "name": "examination",
            "type": 2,
            "hidden": "1",
            "title": "试卷管理",
            "icon": "menu",
            "path": "/training/examination",
            "permission": "",
            "sort": 4,
            "component": "training/examination/index",
            "status": 1,
            "meta": {
              "title": "试卷管理",
              "icon": "menu",
              "roles": [
                "add:shijuan",
                "add:shiti",
                "edit",
                "delete"
              ]
            }
          },
          {
            "id": 36,
            "haschildren": 1,
            "pid": 19,
            "name": "exmember",
            "type": 2,
            "hidden": "1",
            "title": "考试列表",
            "icon": "menu",
            "path": "/training/exmember",
            "permission": "",
            "sort": 3,
            "component": "training/exmember/index",
            "status": 1,
            "meta": {
              "title": "考试列表",
              "icon": "menu",
              "roles": [
                "print"
              ]
            }
          },
          {
            "id": 40,
            "haschildren": 1,
            "pid": 19,
            "name": "certificate",
            "type": 2,
            "hidden": "1",
            "title": "证书管理",
            "icon": "menu",
            "path": "/training/certificate",
            "permission": "",
            "sort": 2,
            "component": "training/certificate/index",
            "status": 1,
            "meta": {
              "title": "证书管理",
              "icon": "menu",
              "roles": [
                "print"
              ]
            }
          },
          {
            "id": 41,
            "haschildren": 0,
            "pid": 19,
            "name": "statistical",
            "type": 2,
            "hidden": "1",
            "title": "统计分析",
            "icon": "menu",
            "path": "/training/statistical",
            "permission": "",
            "sort": 1,
            "component": "training/statistical/index",
            "status": 1,
            "meta": {
              "title": "统计分析",
              "icon": "menu",
              "roles": []
            }
          },
          {
            "id": 22,
            "haschildren": 0,
            "pid": 19,
            "name": "courseitem",
            "type": 2,
            "hidden": "0",
            "title": "课件列表",
            "icon": "menu",
            "path": "/training/courseitem",
            "permission": "",
            "sort": 0,
            "component": "training/courseitem/index",
            "status": 1,
            "meta": {
              "title": "课件列表",
              "icon": "menu",
              "roles": []
            }
          },
          {
            "id": 25,
            "haschildren": 0,
            "pid": 19,
            "name": "addCourseItem",
            "type": 2,
            "hidden": "0",
            "title": "创建课件",
            "icon": "menu",
            "path": "/training/addCourseItem",
            "permission": "",
            "sort": 0,
            "component": "training/addCourseItem/index",
            "status": 1,
            "meta": {
              "title": "创建课件",
              "icon": "menu",
              "roles": []
            }
          },
          {
            "id": 26,
            "haschildren": 0,
            "pid": 19,
            "name": "editCourseItem",
            "type": 2,
            "hidden": "0",
            "title": "编辑课件",
            "icon": "menu",
            "path": "/training/editCourseItem/:id",
            "permission": "",
            "sort": 0,
            "component": "training/editCourseItem/index",
            "status": 1,
            "meta": {
              "title": "编辑课件",
              "icon": "menu",
              "roles": []
            }
          },
          {
            "id": 34,
            "haschildren": 0,
            "pid": 19,
            "name": "addexamination",
            "type": 2,
            "hidden": "0",
            "title": "创建试卷",
            "icon": "menu",
            "path": "/training/addexamination",
            "permission": "",
            "sort": 0,
            "component": "training/addexamination/index",
            "status": 1,
            "meta": {
              "title": "创建试卷",
              "icon": "menu",
              "roles": []
            }
          },
          {
            "id": 35,
            "haschildren": 0,
            "pid": 19,
            "name": "questions",
            "type": 2,
            "hidden": "0",
            "title": "试题列表",
            "icon": "menu",
            "path": "/training/questions/:id",
            "permission": "",
            "sort": 0,
            "component": "training/questions/index",
            "status": 1,
            "meta": {
              "title": "试题列表",
              "icon": "menu",
              "roles": []
            }
          },
          {
            "id": 85,
            "haschildren": 0,
            "pid": 19,
            "name": "editexamination",
            "type": 2,
            "hidden": "0",
            "title": "编辑试卷",
            "icon": "menu",
            "path": "/training/editexamination/:id",
            "permission": "",
            "sort": 0,
            "component": "training/editexamination/index",
            "status": 1,
            "meta": {
              "title": "编辑试卷",
              "icon": "menu",
              "roles": []
            }
          }
        ]
      },
      {
        "id": 72,
        "haschildren": 1,
        "pid": 0,
        "name": "",
        "type": 1,
        "hidden": "1",
        "title": "活动管理",
        "icon": "peoples",
        "path": "/activity",
        "permission": "",
        "sort": 0,
        "component": "Layout",
        "status": 1,
        "meta": {
          "title": "活动管理",
          "icon": "peoples",
          "roles": []
        },
        "children": [{
            "id": 73,
            "haschildren": 1,
            "pid": 72,
            "name": "beautiful",
            "type": 2,
            "hidden": "1",
            "title": "最美康复师",
            "icon": "people",
            "path": "/activity/beautiful",
            "permission": "",
            "sort": 0,
            "component": "activity/beautiful/index",
            "status": 1,
            "meta": {
              "title": "最美康复师",
              "icon": "people",
              "roles": []
            },
            "children": [{
                "id": 75,
                "haschildren": 0,
                "pid": 73,
                "name": "userList",
                "type": 2,
                "hidden": "1",
                "title": "参与列表",
                "icon": "menu",
                "path": "/activity/beautiful/userList",
                "permission": "",
                "sort": 2,
                "component": "activity/beautiful/userList/index",
                "status": 1,
                "meta": {
                  "title": "参与列表",
                  "icon": "menu",
                  "roles": []
                }
              },
              {
                "id": 74,
                "haschildren": 0,
                "pid": 73,
                "name": "examinelist",
                "type": 2,
                "hidden": "1",
                "title": "审核列表",
                "icon": "menu",
                "path": "/activity/beautiful/examinelist",
                "permission": "",
                "sort": 1,
                "component": "activity/beautiful/examinelist/index",
                "status": 1,
                "meta": {
                  "title": "审核列表",
                  "icon": "menu",
                  "roles": []
                }
              }
            ]
          },
          {
            "id": 82,
            "haschildren": 1,
            "pid": 72,
            "name": "21DayStudy",
            "type": 2,
            "hidden": "1",
            "title": "21天学习潮",
            "icon": "education",
            "path": "/activity/21DayStudy",
            "permission": "",
            "sort": 0,
            "component": "activity/21DayStudy/index",
            "status": 1,
            "meta": {
              "title": "21天学习潮",
              "icon": "education",
              "roles": []
            },
            "children": [{
                "id": 83,
                "haschildren": 0,
                "pid": 82,
                "name": "21videoList",
                "type": 2,
                "hidden": "1",
                "title": "视频列表",
                "icon": "menu",
                "path": "/activity/21DayStudy/videoList",
                "permission": "",
                "sort": 0,
                "component": "activity/21DayStudy/videoList/index",
                "status": 1,
                "meta": {
                  "title": "视频列表",
                  "icon": "menu",
                  "roles": []
                }
              },
              {
                "id": 84,
                "haschildren": 0,
                "pid": 82,
                "name": "21statistical",
                "type": 2,
                "hidden": "1",
                "title": "统计分析",
                "icon": "Steve-Jobs",
                "path": "/activity/21DayStudy/statistical",
                "permission": "",
                "sort": 0,
                "component": "activity/21DayStudy/statistical/index",
                "status": 1,
                "meta": {
                  "title": "统计分析",
                  "icon": "Steve-Jobs",
                  "roles": []
                }
              }
            ]
          }
        ]
      }
    ]
  }
}

}
