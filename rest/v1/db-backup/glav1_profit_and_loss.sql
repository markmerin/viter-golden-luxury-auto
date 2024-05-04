-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 04, 2024 at 03:24 PM
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
-- Table structure for table `glav1_profit_and_loss`
--

CREATE TABLE `glav1_profit_and_loss` (
  `profit_and_loss_aid` int(11) NOT NULL,
  `profit_and_loss_name` varchar(128) NOT NULL,
  `profit_and_loss_is_active` tinyint(1) NOT NULL,
  `profit_and_loss_created` datetime NOT NULL,
  `profit_and_loss_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `glav1_profit_and_loss`
--

INSERT INTO `glav1_profit_and_loss` (`profit_and_loss_aid`, `profit_and_loss_name`, `profit_and_loss_is_active`, `profit_and_loss_created`, `profit_and_loss_datetime`) VALUES
(1, 'Rental Income', 1, '2024-05-04 21:20:30', '2024-05-04 21:21:04'),
(2, 'Delivery Income', 1, '2024-05-04 21:21:14', '2024-05-04 21:21:14'),
(3, 'Electric Prepaid Income', 1, '2024-05-04 21:21:23', '2024-05-04 21:21:23'),
(4, 'Gas Prepaid Income', 1, '2024-05-04 21:21:33', '2024-05-04 21:21:33'),
(5, 'Miles Income', 1, '2024-05-04 21:21:42', '2024-05-04 21:21:42'),
(6, 'Ski Racks Income', 1, '2024-05-04 21:21:54', '2024-05-04 21:21:54'),
(7, 'Child Seat Income', 1, '2024-05-04 21:22:03', '2024-05-04 21:24:00'),
(8, 'Coolers Income', 1, '2024-05-04 21:22:10', '2024-05-04 21:22:10'),
(9, 'Insurance Wreck Income', 1, '2024-05-04 21:22:16', '2024-05-04 21:22:16'),
(10, 'Detail Shop Income', 1, '2024-05-04 21:22:23', '2024-05-04 21:22:23'),
(11, 'Other Income', 1, '2024-05-04 21:22:30', '2024-05-04 21:22:30'),
(12, 'Negative Balance Carry Over', 1, '2024-05-04 21:22:39', '2024-05-04 21:22:39');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `glav1_profit_and_loss`
--
ALTER TABLE `glav1_profit_and_loss`
  ADD PRIMARY KEY (`profit_and_loss_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `glav1_profit_and_loss`
--
ALTER TABLE `glav1_profit_and_loss`
  MODIFY `profit_and_loss_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
