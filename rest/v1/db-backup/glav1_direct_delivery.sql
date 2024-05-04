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
-- Table structure for table `glav1_direct_delivery`
--

CREATE TABLE `glav1_direct_delivery` (
  `direct_delivery_aid` int(11) NOT NULL,
  `direct_delivery_name` varchar(128) NOT NULL,
  `direct_delivery_is_active` tinyint(1) NOT NULL,
  `direct_delivery_created` datetime NOT NULL,
  `direct_delivery_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `glav1_direct_delivery`
--

INSERT INTO `glav1_direct_delivery` (`direct_delivery_aid`, `direct_delivery_name`, `direct_delivery_is_active`, `direct_delivery_created`, `direct_delivery_datetime`) VALUES
(1, 'Labor - Car Cleaning', 1, '2024-05-04 22:27:50', '2024-05-04 22:32:30'),
(2, 'Labor - Delivery', 1, '2024-05-04 22:28:18', '2024-05-04 22:32:31'),
(3, 'Parking - Airport', 1, '2024-05-04 22:28:25', '2024-05-04 22:28:25'),
(4, 'Parking - Lot', 1, '2024-05-04 22:28:30', '2024-05-04 22:28:30'),
(5, 'Shuttle', 1, '2024-05-04 22:28:36', '2024-05-04 22:28:36'),
(6, 'Uber/Lyft/Lime', 1, '2024-05-04 22:28:42', '2024-05-04 22:28:42');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `glav1_direct_delivery`
--
ALTER TABLE `glav1_direct_delivery`
  ADD PRIMARY KEY (`direct_delivery_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `glav1_direct_delivery`
--
ALTER TABLE `glav1_direct_delivery`
  MODIFY `direct_delivery_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
