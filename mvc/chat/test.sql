/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50521
Source Host           : localhost:3306
Source Database       : my

Target Server Type    : MYSQL
Target Server Version : 50521
File Encoding         : 65001

Date: 2012-09-08 16:04:43
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `test`
-- ----------------------------
DROP TABLE IF EXISTS `test`;
CREATE TABLE `test` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `content` varchar(50) DEFAULT NULL,
  `username` varchar(50) DEFAULT NULL,
  `date` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of test
-- ----------------------------
INSERT INTO `test` VALUES ('23', '哈哈。很好玩！', '小明', '2012-9-4 14:03:31');
INSERT INTO `test` VALUES ('24', '很好很好玩', '小强', '2012-9-5 9:43:52');
