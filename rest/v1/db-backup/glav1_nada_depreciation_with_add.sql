-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 05, 2024 at 04:15 PM
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
-- Table structure for table `glav1_nada_depreciation_with_add`
--

CREATE TABLE `glav1_nada_depreciation_with_add` (
  `nada_depreciation_with_add_aid` int(11) NOT NULL,
  `nada_depreciation_with_add_is_active` tinyint(1) NOT NULL,
  `nada_depreciation_with_add_car_id` int(11) NOT NULL,
  `nada_depreciation_with_add_id` int(11) NOT NULL,
  `nada_depreciation_with_add_date` varchar(20) NOT NULL,
  `nada_depreciation_with_add_amount` int(11) NOT NULL,
  `nada_depreciation_with_add_created` datetime NOT NULL,
  `nada_depreciation_with_add_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `glav1_nada_depreciation_with_add`
--

INSERT INTO `glav1_nada_depreciation_with_add` (`nada_depreciation_with_add_aid`, `nada_depreciation_with_add_is_active`, `nada_depreciation_with_add_car_id`, `nada_depreciation_with_add_id`, `nada_depreciation_with_add_date`, `nada_depreciation_with_add_amount`, `nada_depreciation_with_add_created`, `nada_depreciation_with_add_datetime`) VALUES
(1, 1, 6, 5, '2024-05', 21640, '2024-05-05 22:14:44', '2024-05-05 22:14:44');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `glav1_nada_depreciation_with_add`
--
ALTER TABLE `glav1_nada_depreciation_with_add`
  ADD PRIMARY KEY (`nada_depreciation_with_add_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `glav1_nada_depreciation_with_add`
--
ALTER TABLE `glav1_nada_depreciation_with_add`
  MODIFY `nada_depreciation_with_add_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
