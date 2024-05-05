-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 05, 2024 at 09:47 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `golden_luxury_auto_v1`
--

-- --------------------------------------------------------

--
-- Table structure for table `glav1_purchase_document`
--

CREATE TABLE `glav1_purchase_document` (
  `purchase_document_aid` int(11) NOT NULL,
  `purchase_document_is_active` tinyint(1) NOT NULL,
  `purchase_document_name` varchar(80) NOT NULL,
  `purchase_document_datetime` varchar(20) NOT NULL,
  `purchase_document_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `glav1_purchase_document`
--

INSERT INTO `glav1_purchase_document` (`purchase_document_aid`, `purchase_document_is_active`, `purchase_document_name`, `purchase_document_datetime`, `purchase_document_created`) VALUES
(2, 1, 'x', '', '2024-05-04 23:44:19'),
(4, 1, 'test', '2024-05-05 00:13:33', '2024-05-05 00:13:33'),
(5, 1, 'yyyyyy', '', '2024-05-05 00:18:26'),
(6, 1, 'ccvcvcvc', '2024-05-05 01:41:31', '2024-05-05 01:41:31');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `glav1_purchase_document`
--
ALTER TABLE `glav1_purchase_document`
  ADD PRIMARY KEY (`purchase_document_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `glav1_purchase_document`
--
ALTER TABLE `glav1_purchase_document`
  MODIFY `purchase_document_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
