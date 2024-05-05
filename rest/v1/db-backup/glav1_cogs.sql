-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 04, 2024 at 05:29 PM
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
-- Table structure for table `glav1_cogs`
--

CREATE TABLE `glav1_cogs` (
  `cogs_aid` int(11) NOT NULL,
  `cogs_name` varchar(128) NOT NULL,
  `cogs_is_active` tinyint(1) NOT NULL,
  `cogs_created` datetime NOT NULL,
  `cogs_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `glav1_cogs`
--

INSERT INTO `glav1_cogs` (`cogs_aid`, `cogs_name`, `cogs_is_active`, `cogs_created`, `cogs_datetime`) VALUES
(1, 'Auto Body Shop', 1, '2024-05-04 23:10:09', '2024-05-04 23:10:09'),
(2, 'Alignment', 1, '2024-05-04 23:10:15', '2024-05-04 23:15:22'),
(3, 'Brakes', 1, '2024-05-04 23:10:19', '2024-05-04 23:10:19'),
(4, 'Car Insurance', 1, '2024-05-04 23:10:23', '2024-05-04 23:10:23'),
(5, 'Car Payment', 1, '2024-05-04 23:10:28', '2024-05-04 23:10:28'),
(6, 'Cleaning Supplies', 1, '2024-05-04 23:10:35', '2024-05-04 23:10:35'),
(7, 'Electric Charging', 1, '2024-05-04 23:10:45', '2024-05-04 23:10:45'),
(8, 'Electric - Prepaid', 1, '2024-05-04 23:10:51', '2024-05-04 23:10:51'),
(9, 'Electric - Not Reimbursed', 1, '2024-05-04 23:10:59', '2024-05-04 23:10:59'),
(10, 'Emissions', 1, '2024-05-04 23:11:04', '2024-05-04 23:11:04'),
(11, 'Gas - Prepaid', 1, '2024-05-04 23:11:09', '2024-05-04 23:11:09'),
(12, 'Gas - Not Reimbursed', 1, '2024-05-04 23:11:15', '2024-05-04 23:11:15'),
(13, 'GPS System', 1, '2024-05-04 23:11:21', '2024-05-04 23:11:21'),
(14, 'Key & Fob', 1, '2024-05-04 23:11:25', '2024-05-04 23:11:25'),
(15, 'Labor - Human Resources', 1, '2024-05-04 23:11:31', '2024-05-04 23:11:31'),
(16, 'Labor - Shuttle/Park n Jet Booth', 1, '2024-05-04 23:11:40', '2024-05-04 23:11:40'),
(17, 'License & Registration', 1, '2024-05-04 23:11:44', '2024-05-04 23:11:44'),
(18, 'Mechanic', 1, '2024-05-04 23:11:48', '2024-05-04 23:11:48'),
(19, 'Oil/Lube', 1, '2024-05-04 23:11:54', '2024-05-04 23:11:54'),
(20, 'Parking Airport', 1, '2024-05-04 23:11:58', '2024-05-04 23:11:58'),
(21, 'Parts', 1, '2024-05-04 23:12:02', '2024-05-04 23:12:02'),
(22, 'Ski Racks', 1, '2024-05-04 23:12:08', '2024-05-04 23:12:08'),
(23, 'Tickets', 1, '2024-05-04 23:12:14', '2024-05-04 23:12:14'),
(24, 'Tires', 1, '2024-05-04 23:12:19', '2024-05-04 23:12:19'),
(25, 'Towing', 1, '2024-05-04 23:12:24', '2024-05-04 23:12:24'),
(26, 'Windshield', 1, '2024-05-04 23:12:28', '2024-05-04 23:12:28'),
(27, 'Wipers', 1, '2024-05-04 23:12:32', '2024-05-04 23:12:32'),
(28, 'Wrecks', 1, '2024-05-04 23:12:37', '2024-05-04 23:12:37');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `glav1_cogs`
--
ALTER TABLE `glav1_cogs`
  ADD PRIMARY KEY (`cogs_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `glav1_cogs`
--
ALTER TABLE `glav1_cogs`
  MODIFY `cogs_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
