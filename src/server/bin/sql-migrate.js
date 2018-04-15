// 执行数据库脚本
const app = require('../kernel.js');
const db = app.context.db;

let sql = `CREATE TABLE IF NOT EXISTS migrations (
  name varchar(255) NOT NULL COMMENT '名称',
  PRIMARY KEY (name)
  ) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COMMENT='数据库升级表';`;
db.query(sql);