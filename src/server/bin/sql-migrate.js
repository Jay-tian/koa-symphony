// 执行数据库脚本
const process = require('process');
const tookit = require('../../common/array-tookit.js');
const parameters = require('../config/parameters.js');
const path = require('path');
const glob = require('glob');
const db = require('../db/init.js');

const sql = `CREATE TABLE IF NOT EXISTS migrations (
name varchar(255) NOT NULL COMMENT '名称',
PRIMARY KEY (name)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COMMENT='数据库升级表';`;

let migratePaths = [];
db.query(sql);
db.query('SELECT * FROM `migrations`;',  { type: db.QueryTypes.SELECT}).then(migrations => {
  let files = glob.sync(path.join(parameters.migrationPath, '/*'));
  files.forEach(function(f){
    migratePaths.push(path.basename(f, '.js'));
  });

  migrations = tookit.arrayIndex(migrations, 'name');
  migrations = migratePaths.filter(v => !migrations.includes(v));
  let sql;
  migrations.forEach(f => {
    sql = require(parameters.migrationPath + f + '.js');
    db.query(sql);
    console.info(f+'执行成功');
  });

}).catch(error => {
  console.warn(error);
  process.exit(0);
});



