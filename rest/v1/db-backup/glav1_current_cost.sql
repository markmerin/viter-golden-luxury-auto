-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 05, 2024 at 01:58 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

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
-- Table structure for table `glav1_current_cost`
--

CREATE TABLE `glav1_current_cost` (
  `current_cost_aid` int(11) NOT NULL,
  `current_cost_is_active` tinyint(1) NOT NULL,
  `current_cost_name` varchar(255) NOT NULL,
  `current_cost_created` datetime NOT NULL,
  `current_cost_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `glav1_current_cost`
--

INSERT INTO `glav1_current_cost` (`current_cost_aid`, `current_cost_is_active`, `current_cost_name`, `current_cost_created`, `current_cost_datetime`) VALUES
(1, 1, 'NADA - Retail', '2024-05-05 16:24:44', '2024-05-05 16:24:44'),
(2, 1, 'NADA - Clean', '2024-05-05 16:24:50', '2024-05-05 16:24:50'),
(3, 1, 'NADA - Average', '2024-05-05 16:24:56', '2024-05-05 16:24:56'),
(4, 1, 'NADA - Rough', '2024-05-05 16:25:00', '2024-05-05 16:25:00'),
(5, 1, 'MILES', '2024-05-05 16:25:12', '2024-05-05 16:25:12'),
(6, 1, 'Amounted Owed on Car $', '2024-05-05 16:25:41', '2024-05-05 16:25:41');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `glav1_current_cost`
--
ALTER TABLE `glav1_current_cost`
  ADD PRIMARY KEY (`current_cost_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `glav1_current_cost`
--
ALTER TABLE `glav1_current_cost`
  MODIFY `current_cost_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
