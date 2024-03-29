-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 29, 2024 at 01:41 AM
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
-- Table structure for table `glav1_income_category`
--

CREATE TABLE `glav1_income_category` (
  `income_category_aid` int(11) NOT NULL,
  `income_category_is_active` tinyint(1) NOT NULL,
  `income_category_name` varchar(50) NOT NULL,
  `income_category_datetime` varchar(20) NOT NULL,
  `income_category_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `glav1_income_category`
--

INSERT INTO `glav1_income_category` (`income_category_aid`, `income_category_is_active`, `income_category_name`, `income_category_datetime`, `income_category_created`) VALUES
(3, 1, 'cccc', '2024-03-29 08:15:19', '2024-03-28 21:07:59'),
(4, 1, 'test', '2024-03-29 08:39:13', '2024-03-28 22:32:23');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `glav1_income_category`
--
ALTER TABLE `glav1_income_category`
  ADD PRIMARY KEY (`income_category_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `glav1_income_category`
--
ALTER TABLE `glav1_income_category`
  MODIFY `income_category_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
