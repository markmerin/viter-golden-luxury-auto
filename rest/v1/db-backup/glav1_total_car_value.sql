-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 05, 2024 at 09:46 AM
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
-- Table structure for table `glav1_total_car_value`
--

CREATE TABLE `glav1_total_car_value` (
  `car_value_aid` int(11) NOT NULL,
  `car_value_is_active` tinyint(1) NOT NULL,
  `car_value_name` varchar(50) NOT NULL,
  `car_value_datetime` varchar(20) NOT NULL,
  `car_value_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `glav1_total_car_value`
--

INSERT INTO `glav1_total_car_value` (`car_value_aid`, `car_value_is_active`, `car_value_name`, `car_value_datetime`, `car_value_created`) VALUES
(3, 1, 'wwwww11111', '', '2024-05-05 01:13:38');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `glav1_total_car_value`
--
ALTER TABLE `glav1_total_car_value`
  ADD PRIMARY KEY (`car_value_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `glav1_total_car_value`
--
ALTER TABLE `glav1_total_car_value`
  MODIFY `car_value_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
