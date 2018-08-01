const BaseController = require('./BaseController');

class UserController extends BaseController {
  constructor(){
    super();
  }

  login() {
    return async (ctx, next) => {
      ctx.session.id =    { "result": "{\"status\":\"success\",\"message\":\"\\u6210\\u529f\",\"mainVersion\":\"8.3.0\",\"plugin\":{\"id\":\"1409\",\"productId\":\"198\",\"status\":\"used\",\"fromVersion\":\"1.0.0\",\"toVersion\":\"1.0.1\",\"edusohoMinVersion\":\"7.0.0\",\"edusohoMaxVersion\":\"up\",\"fileName\":\"opensource\\/DataCollect\\/DataCollect_install_1.0.1.zip\",\"fileHash\":\"\",\"description\":\"\\u6d4b\\u8bd5 \\u81ea\\u52a8\\u5347\\u7ea7\",\"isBackupFile\":\"0\",\"isBackupDB\":\"0\",\"developerId\":\"1\",\"createdTime\":\"1531905801\",\"releaseType\":\"all\",\"product\":{\"id\":\"198\",\"type\":\"app\",\"category\":\"app\",\"name\":\"\\u5927\\u6570\\u636e\\u91c7\\u96c6\",\"code\":\"DataCollect\",\"description\":\"\\u5927\\u6570\\u636e\\u91c7\\u96c6\\u63d2\\u4ef6\",\"icon\":\"DataCollect\\/icon5a47c972.png\",\"appScreenshot\":\"\",\"price\":\"0.00\",\"isLicensed\":\"0\",\"onlyForBusiness\":\"0\",\"publishStatus\":\"published\",\"publishedPackageId\":\"1409\",\"upgradeStatus\":\"none\",\"applyPackageId\":\"0\",\"edusohoEdition\":\"opensource\",\"edusohoMinVersion\":\"7.0.0\",\"edusohoMaxVersion\":\"up\",\"latestVersion\":\"1.0.1\",\"latestTime\":\"1532919214\",\"installCount\":\"0\",\"upgradeCount\":\"0\",\"developerId\":\"1\",\"lastAuditedTime\":\"1532919214\",\"closedTime\":\"0\",\"isClosed\":\"0\",\"isRecommend\":\"0\",\"isAllowBuy\":\"1\",\"isAppStoreShow\":\"0\",\"createdTime\":\"1531721354\",\"developerName\":\"EduSoho\\u5b98\\u65b9\"},\"backupDB\":\"0\",\"backupFile\":\"0\",\"type\":\"install\"}}"};
      return ctx.render('login/index.twig');
    };
  }
}

module.exports = UserController;