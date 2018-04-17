module.exports = `
CREATE TABLE IF NOT EXISTS user(
  id int(11) NOT NULL AUTO_INCREMENT COMMENT '用户ID',
  email varchar(128) NOT NULL COMMENT '用户邮箱',
  verifiedMobile varchar(32) NOT NULL DEFAULT  '',
  password varchar(64) NOT NULL COMMENT '用户密码',
  salt varchar(32) NOT NULL COMMENT '密码SALT',
  payPassword varchar(64) NOT NULL DEFAULT '' COMMENT '支付密码',
  payPasswordSalt varchar(64) NOT NULL DEFAULT '' COMMENT '支付密码Salt',
  nickname varchar(64) NOT NULL COMMENT '用户名',
  roles varchar(255) NOT NULL COMMENT '用户角色',
  locked tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT '是否被禁止',
  lockDeadline int(10) not null default '0' COMMENT '帐号锁定期限',
  loginTime int(11) NOT NULL DEFAULT '0' COMMENT '最后登录时间',
  loginIp varchar(64) NOT NULL DEFAULT '' COMMENT '最后登录IP',
  loginSessionId varchar(255) NOT NULL DEFAULT '' COMMENT '最后登录会话ID',
  createdIp varchar(64) NOT NULL DEFAULT '' COMMENT '注册IP',
  createdTime int(10) unsigned NOT NULL DEFAULT '0' COMMENT '注册时间',
  updatedTime INT UNSIGNED NOT NULL DEFAULT '0' COMMENT '最后更新时间',
  PRIMARY KEY (id),
  UNIQUE KEY (email),
  UNIQUE KEY (nickname),
  KEY updatedTime (updatedTime)
  ) ENGINE = InnoDB  DEFAULT CHARSET= utf8;
`;