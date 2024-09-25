-- MySQL dump 10.13  Distrib 8.0.39, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: data
-- ------------------------------------------------------
-- Server version	9.0.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `MOCK_DATA`
--

DROP TABLE IF EXISTS `MOCK_DATA`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `MOCK_DATA` (
  `id` int DEFAULT NULL,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `gender` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `MOCK_DATA`
--

LOCK TABLES `MOCK_DATA` WRITE;
/*!40000 ALTER TABLE `MOCK_DATA` DISABLE KEYS */;
INSERT INTO `MOCK_DATA` VALUES (1,'Nert','Witcher','Female'),(2,'Ed','Lipsett','Male'),(3,'Vikky','Crehan','Agender'),(4,'Melisenda','Bexon','Female'),(5,'Audra','Manoelli','Female'),(6,'Jay','Eidelman','Male'),(7,'Georgeanna','Follitt','Female'),(8,'Dyan','Bratcher','Female'),(9,'Nananne','Cullen','Female'),(10,'Eimile','Whittier','Female'),(11,'Neil','Mellem','Male'),(12,'Cayla','Larchiere','Female'),(13,'Lindon','Walisiak','Male'),(14,'Karola','Bliben','Female'),(15,'Felicdad','Bonham','Bigender'),(16,'Em','Ginner','Female'),(17,'Oneida','Phinnis','Female'),(18,'Tracie','Rintoul','Male'),(19,'Toni','Crawforth','Female'),(20,'Rennie','Peltzer','Female'),(21,'Swen','Lorain','Male'),(22,'Jasen','Iacofo','Male'),(23,'Merna','Windaybank','Female'),(24,'Pip','Jayes','Male'),(25,'Consolata','Truelove','Female'),(26,'Morrie','Mapother','Male'),(27,'Ninnette','Cashin','Female'),(28,'Moyna','Demangeon','Female'),(29,'Otes','Stinson','Male'),(30,'Willard','Westwell','Male'),(31,'Jaquelin','Stannard','Female'),(32,'Sid','Stedmond','Male'),(33,'Fernandina','Le - Count','Female'),(34,'Dorian','Castellaccio','Female'),(35,'Godard','Armatidge','Male'),(36,'Dorette','Goodlad','Female'),(37,'Alleyn','Gait','Male'),(38,'Bari','Fenelow','Female'),(39,'Kelwin','Going','Male'),(40,'Jervis','Wyles','Male'),(41,'Stacia','Blay','Female'),(42,'Yuri','Salerg','Male'),(43,'Onfre','Brendel','Male'),(44,'Lorenzo','Stitcher','Male'),(45,'Ynez','Aleksidze','Female'),(46,'Emmy','Hillen','Female'),(47,'Herculie','Feasey','Male'),(48,'Brian','Cheyney','Agender'),(49,'Tedie','Greader','Male'),(50,'Allie','Toretta','Male'),(51,'Goddart','Dany','Male'),(52,'Oby','Eskriet','Male'),(53,'Delora','Gligorijevic','Female'),(54,'Cleon','Goldstraw','Male'),(55,'Trish','Furby','Female'),(56,'Worth','Bellhouse','Male'),(57,'Wyatan','Poland','Male'),(58,'Derry','Jiroutka','Male'),(59,'Richmound','Spellicy','Male'),(60,'Karel','Dollen','Male'),(61,'Roman','Philcock','Male'),(62,'Arliene','Neat','Female'),(63,'Rebbecca','Teaz','Female'),(64,'Laura','Woodstock','Female'),(65,'Morissa','Frentz','Female'),(66,'Osborn','Sehorsch','Male'),(67,'Trev','Daspar','Male'),(68,'Wileen','Towle','Female'),(69,'Darbee','Smillie','Male'),(70,'Althea','Ausiello','Female'),(71,'Shanan','Beaston','Male'),(72,'Jarvis','O\'Driscoll','Male'),(73,'Crystal','Tankin','Female'),(74,'Teddie','Iacovini','Male'),(75,'Ollie','Cowing','Male'),(76,'Isabel','Langfitt','Female'),(77,'Tressa','Saipy','Female'),(78,'Walden','Baudet','Male'),(79,'Delmor','Cool','Male'),(80,'Joannes','Plover','Female'),(81,'Egbert','Fender','Male'),(82,'Sissy','Lamont','Female'),(83,'Beatrisa','Aikett','Female'),(84,'Doloritas','Catto','Female'),(85,'Stephani','Fonquernie','Female'),(86,'Roddy','Hews','Male'),(87,'Lenna','Stitfall','Female'),(88,'Dena','Tuley','Female'),(89,'Hannie','Ramos','Female'),(90,'Cathyleen','Howitt','Female'),(91,'Robby','Helstrom','Male'),(92,'Napoleon','Eneas','Male'),(93,'Laurens','Whiley','Male'),(94,'Dare','Lusgdin','Male'),(95,'Remus','Malthouse','Male'),(96,'Porty','Oxborough','Male'),(97,'Luci','Godbolt','Bigender'),(98,'Roosevelt','Moffet','Male'),(99,'Maynord','Gully','Male'),(100,'Ronda','MacFadzean','Female');
/*!40000 ALTER TABLE `MOCK_DATA` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `countries`
--

DROP TABLE IF EXISTS `countries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `countries` (
  `id` int DEFAULT NULL,
  `country` varchar(50) DEFAULT NULL,
  `capital` varchar(50) DEFAULT NULL,
  `capital_difficulty` varchar(50) DEFAULT NULL,
  `country_code` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `countries`
--

LOCK TABLES `countries` WRITE;
/*!40000 ALTER TABLE `countries` DISABLE KEYS */;
INSERT INTO `countries` VALUES (1,'France','Paris','easy','FR'),(2,'Germany','Berlin','easy','DE'),(3,'Chad','N\'Djamena','hard','TD'),(4,'Lithuania','Vilnius','medium','LT'),(5,'United States','Washington, D.C.','easy','US'),(6,'Canada','Ottawa','easy','CA'),(7,'Brazil','Brasília','easy','BR'),(8,'Australia','Canberra','medium','AU'),(9,'Argentina','Buenos Aires','easy','AR'),(10,'Japan','Tokyo','easy','JP'),(11,'United Kingdom','London','easy','GB'),(12,'Italy','Rome','easy','IT'),(13,'South Africa','Pretoria','medium','ZA'),(14,'Mexico','Mexico City','easy','MX'),(15,'India','New Delhi','easy','IN'),(16,'Russia','Moscow','easy','RU'),(17,'Egypt','Cairo','medium','EG'),(18,'Kenya','Nairobi','medium','KE'),(19,'Morocco','Rabat','medium','MA'),(20,'Turkey','Ankara','medium','TR'),(21,'Portugal','Lisbon','easy','PT'),(22,'Sweden','Stockholm','medium','SE'),(23,'Greece','Athens','easy','GR'),(24,'Denmark','Copenhagen','medium','DK'),(25,'Norway','Oslo','medium','NO'),(26,'Iceland','Reykjavík','medium','IS'),(27,'Nigeria','Abuja','medium','NG'),(28,'Thailand','Bangkok','easy','TH'),(29,'South Korea','Seoul','easy','KR'),(30,'New Zealand','Wellington','medium','NZ'),(31,'Peru','Lima','medium','PE'),(32,'Cuba','Havana','medium','CU'),(33,'Colombia','Bogotá','medium','CO'),(34,'Kazakhstan','Astana','hard','KZ'),(35,'Uzbekistan','Tashkent','hard','UZ'),(36,'Afghanistan','Kabul','hard','AF'),(37,'Myanmar','Naypyidaw','hard','MM'),(38,'Mongolia','Ulaanbaatar','hard','MN'),(39,'Laos','Vientiane','hard','LA'),(40,'Bhutan','Thimphu','hard','BT'),(41,'Maldives','Malé','hard','MV'),(42,'Guinea','Conakry','hard','GN'),(43,'Tajikistan','Dushanbe','hard','TJ'),(44,'Kyrgyzstan','Bishkek','hard','KG'),(45,'Ethiopia','Addis Ababa','medium','ET'),(46,'Algeria','Algiers','medium','DZ'),(47,'Belize','Belmopan','hard','BZ'),(48,'Comoros','Moroni','hard','KM'),(49,'Suriname','Paramaribo','medium','SR'),(50,'Seychelles','Victoria','hard','SC');
/*!40000 ALTER TABLE `countries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'data'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-09-25 15:22:37
