-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 10, 2024 at 01:37 PM
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
-- Table structure for table `glav1_quicklinks`
--

CREATE TABLE `glav1_quicklinks` (
  `quicklink_aid` int(11) NOT NULL,
  `quicklink_is_active` tinyint(1) NOT NULL,
  `quicklink_name` varchar(50) NOT NULL,
  `quicklink_link` text NOT NULL,
  `quicklink_created` varchar(20) NOT NULL,
  `quicklink_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `glav1_quicklinks`
--

INSERT INTO `glav1_quicklinks` (`quicklink_aid`, `quicklink_is_active`, `quicklink_name`, `quicklink_link`, `quicklink_created`, `quicklink_datetime`) VALUES
(2, 1, '3333', 'testt', '2024-04-10 13:35:12', '2024-04-10 13:36:53'),
(3, 1, 'test2', 'asdf', '2024-04-10 13:36:43', '2024-04-10 13:36:43'),
(5, 1, 'testtt', 'https://drive.google.com/drive/folders/1ftPVqL6vCuHWwLJ67Rs-hMXTRmBoRsyC?usp=drive_link', '2024-04-10 19:18:30', '2024-04-10 19:19:32');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `glav1_quicklinks`
--
ALTER TABLE `glav1_quicklinks`
  ADD PRIMARY KEY (`quicklink_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `glav1_quicklinks`
--
ALTER TABLE `glav1_quicklinks`
  MODIFY `quicklink_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
