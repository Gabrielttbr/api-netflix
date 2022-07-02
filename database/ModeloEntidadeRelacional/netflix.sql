CREATE DATABASE  IF NOT EXISTS `netflix` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `netflix`;
-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: netflix
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `banner`
--

DROP TABLE IF EXISTS `banner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `banner` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(15) NOT NULL,
  `descricao` varchar(255) NOT NULL,
  `imagem` varchar(255) NOT NULL,
  `status` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `banner`
--

LOCK TABLES `banner` WRITE;
/*!40000 ALTER TABLE `banner` DISABLE KEYS */;
INSERT INTO `banner` VALUES (1,'BONS MENINOS','Ao serem convidados para uma festa, três garotos ingênuos se metem nas maiores encrencas por causa de um drone quebrado e da expectativa do primeiro beijo','https://occ-0-1306-2430.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABYVtmmhLcYRb55CNTDA4eg1x--FmWpU5obYfRy4yAw_lTAEh98QDW5jvXT8LpdSlfX3dNzcIkDKVFo5ekEl1jwm5F0uiwHgB5FZo.webp?r=e62',1);
/*!40000 ALTER TABLE `banner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `filme`
--

DROP TABLE IF EXISTS `filme`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `filme` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(30) DEFAULT NULL,
  `descricao` varchar(255) NOT NULL,
  `imagem` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `filme`
--

LOCK TABLES `filme` WRITE;
/*!40000 ALTER TABLE `filme` DISABLE KEYS */;
INSERT INTO `filme` VALUES (5,'S.W.A.T','S.W.A.T comando especial, grandes soldados e agentes lutando para proteger uma saúde de muitas pessoa','https://occ-0-1306-2430.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABb2MjUR3dL3lLro0T6yECnD80ByeO9MHSpHjHFmPdy4gWPKF2XzT7WM-ebyAC9-B1yjb3V_qu5ROp6GZb_VzsHIFWIYpXbnihbE.webp?r=145'),(18,'CENTAURO','LANÇADO EM 2022, esse filme e complete ação e aventura','https://occ-0-1306-2430.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf3vf3aE9SiLRU05WqK-AlcUoNCRJoeUJoP8d1GgAvcEVHBy4OG_-zHIdBPKazj401B6WxeYqPWomJ5OXtBjnY7m5pgQtvHzeJaGUgy4WjKkSNn2wojMw3r8K-BG81Xpj8Yw.jpg?r=476'),(19,'SONIC','SONIC se une ao xerife de uma cidade para derrotar um vilão, que queria dominar o mundo','https://occ-0-1306-2430.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbohaDKltpobL9g2kbeMIrZFRq5Z3UR34vpS2h4o4RoeOg1MxCVY0TojECZzefZw317DJM4RelNqA4J_NG64a5PumxJkwTx7pqg.webp?r=134'),(20,'CHOP SHOP','Recém saido da cadeia, tentando refazer sua vida, acaba junto com um antigo amigo, no lucrativo negócio de roubo de carro','https://occ-0-1306-2430.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX5HTbOdHc6Mo7hIOQNwYSoqT8K46wsV9jlIQr6gsbcpPWObkMnyXvqI50-lPGLXKzz55qpE-HdekWcvwyt2xrWipbF4ZjweMhA.webp?r=a34'),(21,'OPERAÇÕES ESPECIAIS','Um filme que conta a história de uma equipe da elite da polícia de los angeles','https://occ-0-1306-2430.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWSdBCp6DOdTggUl6UXrQZE8mv3Pf62dxBKa9vx2yiDosBW-W29UFidrih4gU1XnEV1-OZhciLqcUYX3w8JDx4VWlBxCu6gQ2OU.webp?r=ef5');
/*!40000 ALTER TABLE `filme` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `serie`
--

DROP TABLE IF EXISTS `serie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `serie` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(30) DEFAULT NULL,
  `descricao` varchar(255) NOT NULL,
  `imagem` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `serie`
--

LOCK TABLES `serie` WRITE;
/*!40000 ALTER TABLE `serie` DISABLE KEYS */;
INSERT INTO `serie` VALUES (1,'LÁ CASA DE PAPEL','Uma série que conta a história de um grupo de pessoas que resolveram fazer o maior assalto da espanha','https://occ-0-1306-2430.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZao7xK2_wMVBglh9Dm2qDXXx27bJfxpzAg5GCxoCBlqplEh9qIG560wfPXdJHFkavESnjhaOSg6DAeU-y45mH5-iPl4X70-W2outfTFZdG8Ms1uPM_97azuxiaCnlGZVqsrwRi6Kc2YJZQX9w7h3SjKt-VJXFFK05hJhTmyZDsCqumNFmYmt3MD1Nv87A0.jpg?r=8f2'),(2,'LUCIFER','lUCIFER o diabo em pessoal, decide tirar férias em los angeles','https://occ-0-1306-2430.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQc9mGMmWNlLkhWh5Si5F-XFG_SHfCRQhpf39-Ukp_AkQKMM2ZeM9xXVWiySYsEKDeGd4EhqLeWsEa-BPCn60exgBfhOw284HTrowmh0Bp0jn-uIQlu9jEJ4eODkWIzit1Xz.jpg?r=31e');
/*!40000 ALTER TABLE `serie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `email` varchar(45) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `cpf` varchar(14) NOT NULL,
  `cep` varchar(9) DEFAULT NULL,
  `endereco` varchar(50) NOT NULL,
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `cpf_UNIQUE` (`cpf`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'gabriel','gabriel@gmail.com','teste','123.123.123-11','02812050','rua são joaquim'),(2,'Flavio mota','flavioMotaQhibty@gmail.com','$2b$10$3YlSDotIVcJe8gfL/M7VuuVKUXqA2eWX0V9A/eLo7NSCjo/1XdIze','123.456.789-09','02812-060','Avenida Elisio Texeira Leite'),(9,'rafale','rafael@gmail.com','$2b$10$Ch8IDPvPsJ4siE6ssWBQsOPTTXU0.vjmqGS4EcBG1rVVUhURl0j/m','123.456.789-29','02812-060','Avenida Elisio Texeira Leite'),(10,'rafssale','urso@gmail.com','$2b$10$srg1jiaTnGeYkCgR8wfzHuSPF/BFcdkCmQAHkPcCH8dsgryNdjizK','123.456.789-49','02812-060','Avenida Elisio Texeira Leite'),(11,'gabriel carlos','gabriel@hotmail.com','$2b$10$qtpuN2bChJPQsf2wuOsLFeMtF2EkdciZU2BwTjaZGcGQiIsetRvKO','000.000.000-00','00000-000','pedras'),(12,'admin@admin.com.brasd','admin@admin.com.brasd','$2b$10$Q4qxyGcShVRdRR2PQVwNm.9NT2spAt9fY0JwEoENDyIMM.8thrbEm','261.128.731-27','12231-232','asdasdasdasdsad'),(21,'admin@admin.com.brasd','admin@admin.com.brasdssd','$2b$10$gKz9AD.SP6Ent1eJDWDW7u9Hm9Gy8i6q5ze1zyNhCRqePIeDZcd0.','111.111.111-11','11111-111','hgd'),(25,'gabriel carlos','gabriele@gmail.com','$2b$10$BrpWDk/LrCcMDxnveRsRiuleVUBUS3F9TnxXuFsHybq9ggyUJhK9y','121.212.121-21','12312-312','kdbsajkdasdasdas '),(26,'admin admin','admin@admin','$2b$10$fTRfKMRstCPwIU8cixXKT.yuJ3AbAQefLqfiIztBoVq9.zX/s8bqm','412.123.123-12','12312-312','gabriel carlos cavalcanye');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-02 18:05:36
