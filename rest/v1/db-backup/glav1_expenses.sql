-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 28, 2024 at 03:53 AM
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
-- Table structure for table `glav1_expenses`
--

CREATE TABLE `glav1_expenses` (
  `expenses_aid` int(11) NOT NULL,
  `expenses_is_active` tinyint(1) NOT NULL,
  `expenses_name` varchar(50) NOT NULL,
  `expenses_datetime` varchar(20) NOT NULL,
  `expenses_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `glav1_expenses`
--

INSERT INTO `glav1_expenses` (`expenses_aid`, `expenses_is_active`, `expenses_name`, `expenses_datetime`, `expenses_created`) VALUES
(1, 1, 'Car Cleaning', '2024-03-28 10:41:20', '2024-03-28 10:33:58'),
(3, 1, 'xxxxx3333', '2024-03-28 10:52:16', '2024-03-28 10:42:02'),
(4, 1, 'dfdfdf', '2024-03-28 10:52:19', '2024-03-28 10:52:19'),
(5, 1, 'sdsdsds', '2024-03-28 10:52:22', '2024-03-28 10:52:22'),
(6, 1, 'fdfdfdfdf', '2024-03-28 10:52:26', '2024-03-28 10:52:26'),
(7, 1, 'werwerwer', '2024-03-28 10:52:28', '2024-03-28 10:52:28'),
(8, 1, 'vvvvbv', '2024-03-28 10:52:31', '2024-03-28 10:52:31');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `glav1_expenses`
--
ALTER TABLE `glav1_expenses`
  ADD PRIMARY KEY (`expenses_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `glav1_expenses`
--
ALTER TABLE `glav1_expenses`
  MODIFY `expenses_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
