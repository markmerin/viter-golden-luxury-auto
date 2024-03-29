-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 29, 2024 at 01:40 AM
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
-- Table structure for table `glav1_income_item`
--

CREATE TABLE `glav1_income_item` (
  `income_item_aid` int(11) NOT NULL,
  `income_item_is_active` tinyint(1) NOT NULL,
  `income_item_name` varchar(20) NOT NULL,
  `income_item_category_id` int(11) NOT NULL,
  `income_item_created` varchar(20) NOT NULL,
  `income_item_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `glav1_income_item`
--

INSERT INTO `glav1_income_item` (`income_item_aid`, `income_item_is_active`, `income_item_name`, `income_item_category_id`, `income_item_created`, `income_item_datetime`) VALUES
(5, 1, 'qqq', 4, '2024-03-29 08:38:13', '2024-03-29 08:38:13');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `glav1_income_item`
--
ALTER TABLE `glav1_income_item`
  ADD PRIMARY KEY (`income_item_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `glav1_income_item`
--
ALTER TABLE `glav1_income_item`
  MODIFY `income_item_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
