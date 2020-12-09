
LOCK TABLES `store` WRITE;
INSERT INTO `store` VALUES (1,'คึกคัก','ขายตลอด 24 ชม','0888888888','155 หมู่ 2 ต.แม่เหียะ อ.เมือง จ.เชียงใหม่ 50100');
UNLOCK TABLES;

LOCK TABLES `productcategory` WRITE;
INSERT INTO `productcategory` VALUES (1,'ขนมขบเคี้ยว','ขนมอร่อย');
INSERT INTO `productcategory` VALUES (2,'นม','เพื่อสุขภาพ');
INSERT INTO `productcategory` VALUES (3,'เครื่องดื่มอัดลมและน้ำหวาน','ช่วยดับกระหาย เพิ่มความสดชื่น');
INSERT INTO `productcategory` VALUES (4,'อื่นๆ','อื่นๆ');
UNLOCK TABLES;

LOCK TABLES `product` WRITE;
INSERT INTO `product` VALUES (1,'โค้ก','สูตรน้ำตาลน้อยกว่า',25,'ขวด',3,1);
UNLOCK TABLES;


