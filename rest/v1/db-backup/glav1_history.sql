-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 05, 2024 at 12:51 PM
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
-- Table structure for table `glav1_history`
--

CREATE TABLE `glav1_history` (
  `history_aid` int(11) NOT NULL,
  `history_is_active` tinyint(1) NOT NULL,
  `history_name` varchar(50) NOT NULL,
  `history_datetime` varchar(20) NOT NULL,
  `history_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `glav1_history`
--

INSERT INTO `glav1_history` (`history_aid`, `history_is_active`, `history_name`, `history_datetime`, `history_created`) VALUES
(1, 0, 'qweqweqwe', '2024-05-05 18:50:01', '2024-05-05 18:47:32'),
(3, 1, 'pppppp', '2024-05-05 18:48:18', '2024-05-05 18:48:18');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `glav1_history`
--
ALTER TABLE `glav1_history`
  ADD PRIMARY KEY (`history_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `glav1_history`
--
ALTER TABLE `glav1_history`
  MODIFY `history_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
