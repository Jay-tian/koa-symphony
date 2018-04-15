// 执行数据库脚本
const db = require('../db/init.js');

try {
  const sql = `CREATE TABLE IF NOT EXISTS migrations (
  name varchar(255) NOT NULL COMMENT '名称',
  PRIMARY KEY (name)
  ) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COMMENT='数据库升级表';`;
  db.query(sql);

  db.query('SELECT * FROM `migrations`;',  { type: db.QueryTypes.SELECT}).then(migrations => {
    console.log(migrations);
  });
 
} catch (error) {
  console.log(error);
}


