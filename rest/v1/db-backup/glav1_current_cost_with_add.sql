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
-- Table structure for table `glav1_current_cost_with_add`
--

CREATE TABLE `glav1_current_cost_with_add` (
  `current_cost_with_add_aid` int(11) NOT NULL,
  `current_cost_with_add_is_active` tinyint(1) NOT NULL,
  `current_cost_with_add_name` varchar(255) NOT NULL,
  `current_cost_with_add_created` datetime NOT NULL,
  `current_cost_with_add_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `glav1_current_cost_with_add`
--

INSERT INTO `glav1_current_cost_with_add` (`current_cost_with_add_aid`, `current_cost_with_add_is_active`, `current_cost_with_add_name`, `current_cost_with_add_created`, `current_cost_with_add_datetime`) VALUES
(1, 1, 'NADA - Retail', '2024-05-05 16:13:27', '2024-05-05 16:13:27'),
(2, 1, 'NADA - Clean', '2024-05-05 16:13:34', '2024-05-05 16:13:34'),
(3, 1, 'NADA - Average', '2024-05-05 16:13:39', '2024-05-05 16:13:39'),
(4, 1, 'NADA - Rough', '2024-05-05 16:13:46', '2024-05-05 16:16:02'),
(5, 1, 'MILES - Add 25,000', '2024-05-05 16:14:05', '2024-05-05 16:14:18');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `glav1_current_cost_with_add`
--
ALTER TABLE `glav1_current_cost_with_add`
  ADD PRIMARY KEY (`current_cost_with_add_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `glav1_current_cost_with_add`
--
ALTER TABLE `glav1_current_cost_with_add`
  MODIFY `current_cost_with_add_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
