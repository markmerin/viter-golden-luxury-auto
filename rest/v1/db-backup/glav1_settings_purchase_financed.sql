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
-- Table structure for table `glav1_settings_purchase_financed`
--

CREATE TABLE `glav1_settings_purchase_financed` (
  `purchase_financed_aid` int(11) NOT NULL,
  `purchase_financed_name` varchar(100) NOT NULL,
  `purchase_financed_is_active` tinyint(1) NOT NULL,
  `purchase_financed_datetime` varchar(20) NOT NULL,
  `purchase_financed_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `glav1_settings_purchase_financed`
--

INSERT INTO `glav1_settings_purchase_financed` (`purchase_financed_aid`, `purchase_financed_name`, `purchase_financed_is_active`, `purchase_financed_datetime`, `purchase_financed_created`) VALUES
(2, 'hhhh', 1, '2024-05-05 01:42:53', '2024-05-05 00:42:14'),
(3, 'hhhhh', 1, '', '2024-05-05 01:42:20'),
(5, 'wwwww', 0, '', '2024-05-05 18:02:44'),
(6, 'uuuu', 1, '2024-05-05 19:00:21', '2024-05-05 19:00:21'),
(7, 'uuuux', 1, '2024-05-05 19:00:31', '2024-05-05 19:00:31');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `glav1_settings_purchase_financed`
--
ALTER TABLE `glav1_settings_purchase_financed`
  ADD PRIMARY KEY (`purchase_financed_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `glav1_settings_purchase_financed`
--
ALTER TABLE `glav1_settings_purchase_financed`
  MODIFY `purchase_financed_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
