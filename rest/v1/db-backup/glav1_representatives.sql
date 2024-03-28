-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 28, 2024 at 07:22 AM
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
-- Table structure for table `glav1_representatives`
--

CREATE TABLE `glav1_representatives` (
  `representatives_aid` int(11) NOT NULL,
  `representatives_is_active` tinyint(1) NOT NULL,
  `representatives_fname` varchar(50) NOT NULL,
  `representatives_lname` varchar(50) NOT NULL,
  `representatives_email` varchar(100) NOT NULL,
  `representatives_datetime` varchar(20) NOT NULL,
  `representatives_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `glav1_representatives`
--

INSERT INTO `glav1_representatives` (`representatives_aid`, `representatives_is_active`, `representatives_fname`, `representatives_lname`, `representatives_email`, `representatives_datetime`, `representatives_created`) VALUES
(1, 1, 'd', 'dsds', 'dsd@asd.ciom', '2024-03-28 14:07:02', '2024-03-28 14:07:02');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `glav1_representatives`
--
ALTER TABLE `glav1_representatives`
  ADD PRIMARY KEY (`representatives_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `glav1_representatives`
--
ALTER TABLE `glav1_representatives`
  MODIFY `representatives_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
