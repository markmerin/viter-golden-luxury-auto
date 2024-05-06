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
-- Table structure for table `glav1_car_cogs`
--

CREATE TABLE `glav1_car_cogs` (
  `car_cogs_aid` int(11) NOT NULL,
  `car_cogs_is_active` tinyint(1) NOT NULL,
  `car_cogs_car_id` int(11) NOT NULL,
  `car_cogs_date` varchar(20) NOT NULL,
  `car_cogs_id` int(11) NOT NULL,
  `car_cogs_amount` varchar(20) NOT NULL,
  `car_cogs_created` datetime NOT NULL,
  `car_cogs_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `glav1_car_cogs`
--

INSERT INTO `glav1_car_cogs` (`car_cogs_aid`, `car_cogs_is_active`, `car_cogs_car_id`, `car_cogs_date`, `car_cogs_id`, `car_cogs_amount`, `car_cogs_created`, `car_cogs_datetime`) VALUES
(1, 1, 6, '2024-01', 2, '312', '2024-05-07 00:22:19', '2024-05-07 00:22:19');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `glav1_car_cogs`
--
ALTER TABLE `glav1_car_cogs`
  ADD PRIMARY KEY (`car_cogs_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `glav1_car_cogs`
--
ALTER TABLE `glav1_car_cogs`
  MODIFY `car_cogs_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
