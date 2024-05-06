-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 06, 2024 at 06:26 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

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
-- Table structure for table `glav1_car_office_support`
--

CREATE TABLE `glav1_car_office_support` (
  `car_office_support_aid` int(11) NOT NULL,
  `car_office_support_is_active` tinyint(1) NOT NULL,
  `car_office_support_car_id` int(11) NOT NULL,
  `car_office_support_date` varchar(20) NOT NULL,
  `car_office_support_id` int(11) NOT NULL,
  `car_office_support_amount` varchar(20) NOT NULL,
  `car_office_support_created` datetime NOT NULL,
  `car_office_support_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `glav1_car_office_support`
--
ALTER TABLE `glav1_car_office_support`
  ADD PRIMARY KEY (`car_office_support_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `glav1_car_office_support`
--
ALTER TABLE `glav1_car_office_support`
  MODIFY `car_office_support_aid` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
