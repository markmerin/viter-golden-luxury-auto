-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 07, 2024 at 06:14 AM
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
-- Table structure for table `glav1_car_history`
--

CREATE TABLE `glav1_car_history` (
  `car_history_aid` int(11) NOT NULL,
  `car_history_is_active` tinyint(1) NOT NULL,
  `car_history_car_id` int(11) NOT NULL,
  `car_history_amount` varchar(20) NOT NULL,
  `car_history_date` varchar(20) NOT NULL,
  `car_history_id` int(11) NOT NULL,
  `car_history_datetime` varchar(20) NOT NULL,
  `car_history_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `glav1_car_history`
--

INSERT INTO `glav1_car_history` (`car_history_aid`, `car_history_is_active`, `car_history_car_id`, `car_history_amount`, `car_history_date`, `car_history_id`, `car_history_datetime`, `car_history_created`) VALUES
(1, 1, 4, '2222', '2024-05', 1, '2024-05-06 23:22:16', '2024-05-06 23:22:16'),
(2, 1, 4, '222', '2024-01', 1, '2024-05-06 23:22:48', '2024-05-06 23:22:48'),
(3, 1, 4, '1222', '2024-02', 1, '2024-05-06 23:30:35', '2024-05-06 23:23:35'),
(4, 1, 4, '1222', '2024-11', 3, '2024-05-06 23:31:09', '2024-05-06 23:31:09');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `glav1_car_history`
--
ALTER TABLE `glav1_car_history`
  ADD PRIMARY KEY (`car_history_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `glav1_car_history`
--
ALTER TABLE `glav1_car_history`
  MODIFY `car_history_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
