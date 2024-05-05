-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 05, 2024 at 06:20 PM
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
-- Table structure for table `glav1_car_profit_and_loss`
--

CREATE TABLE `glav1_car_profit_and_loss` (
  `car_profit_and_loss_aid` int(11) NOT NULL,
  `car_profit_and_loss_is_active` tinyint(1) NOT NULL,
  `car_profit_and_loss_car_id` int(11) NOT NULL,
  `car_profit_and_loss_date` varchar(20) NOT NULL,
  `car_profit_and_loss_id` int(11) NOT NULL,
  `car_profit_and_loss_amount` varchar(20) NOT NULL,
  `car_profit_and_loss_created` datetime NOT NULL,
  `car_profit_and_loss_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `glav1_car_profit_and_loss`
--

INSERT INTO `glav1_car_profit_and_loss` (`car_profit_and_loss_aid`, `car_profit_and_loss_is_active`, `car_profit_and_loss_car_id`, `car_profit_and_loss_date`, `car_profit_and_loss_id`, `car_profit_and_loss_amount`, `car_profit_and_loss_created`, `car_profit_and_loss_datetime`) VALUES
(1, 1, 6, '2024-06', 8, '123', '2024-05-05 21:41:57', '2024-05-05 21:41:57'),
(2, 1, 6, '2024-05', 7, '123', '2024-05-05 22:11:39', '2024-05-05 22:11:39'),
(3, 1, 6, '2024-01', 7, '221', '2024-05-05 23:42:32', '2024-05-06 00:07:44');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `glav1_car_profit_and_loss`
--
ALTER TABLE `glav1_car_profit_and_loss`
  ADD PRIMARY KEY (`car_profit_and_loss_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `glav1_car_profit_and_loss`
--
ALTER TABLE `glav1_car_profit_and_loss`
  MODIFY `car_profit_and_loss_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
