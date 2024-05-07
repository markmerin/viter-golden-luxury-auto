-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 07, 2024 at 06:16 AM
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
-- Table structure for table `glav1_settings_purchase_document`
--

CREATE TABLE `glav1_settings_purchase_document` (
  `purchase_document_aid` int(11) NOT NULL,
  `purchase_document_is_active` tinyint(1) NOT NULL,
  `purchase_document_name` varchar(80) NOT NULL,
  `purchase_document_datetime` varchar(20) NOT NULL,
  `purchase_document_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `glav1_settings_purchase_document`
--

INSERT INTO `glav1_settings_purchase_document` (`purchase_document_aid`, `purchase_document_is_active`, `purchase_document_name`, `purchase_document_datetime`, `purchase_document_created`) VALUES
(1, 1, 'Document Prep', '2024-05-07 08:43:12', '2024-05-07 08:43:12'),
(2, 1, 'Temporary Permit', '2024-05-07 08:43:17', '2024-05-07 08:43:17'),
(3, 1, 'State Waste Tire Recycle', '2024-05-07 08:43:24', '2024-05-07 08:43:24'),
(4, 1, 'State Inspection/Emissions', '2024-05-07 08:43:33', '2024-05-07 08:43:33'),
(5, 1, 'Age Based/Property Asses', '2024-05-07 08:43:50', '2024-05-07 08:43:50'),
(6, 1, 'License and Registration ', '2024-05-07 08:45:28', '2024-05-07 08:45:28'),
(7, 1, 'Sales Tax', '2024-05-07 08:45:35', '2024-05-07 08:45:35'),
(8, 1, 'Dealer Doc Fee', '2024-05-07 08:45:43', '2024-05-07 08:45:43'),
(9, 1, 'Purchase Price ', '2024-05-07 08:45:50', '2024-05-07 08:45:50'),
(10, 1, 'Trade Inn or Cash Down Payment', '2024-05-07 08:45:56', '2024-05-07 08:45:56');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `glav1_settings_purchase_document`
--
ALTER TABLE `glav1_settings_purchase_document`
  ADD PRIMARY KEY (`purchase_document_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `glav1_settings_purchase_document`
--
ALTER TABLE `glav1_settings_purchase_document`
  MODIFY `purchase_document_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
