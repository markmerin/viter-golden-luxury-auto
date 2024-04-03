-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 03, 2024 at 11:11 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

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
-- Table structure for table `glav1_car`
--

CREATE TABLE `glav1_car` (
  `car_aid` int(11) NOT NULL,
  `car_is_active` tinyint(1) NOT NULL,
  `car_photo` varchar(255) NOT NULL,
  `car_client_id` int(11) NOT NULL,
  `car_vehicle_make_id` int(11) NOT NULL,
  `car_year` int(11) NOT NULL,
  `car_specs` varchar(20) NOT NULL,
  `car_vin_number` varchar(50) NOT NULL,
  `car_plate_number` varchar(20) NOT NULL,
  `car_registration_date` varchar(20) NOT NULL,
  `car_gas` varchar(20) NOT NULL,
  `car_tire_size` varchar(20) NOT NULL,
  `car_oil_type` varchar(20) NOT NULL,
  `car_created` datetime NOT NULL,
  `car_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `glav1_car`
--

INSERT INTO `glav1_car` (`car_aid`, `car_is_active`, `car_photo`, `car_client_id`, `car_vehicle_make_id`, `car_year`, `car_specs`, `car_vin_number`, `car_plate_number`, `car_registration_date`, `car_gas`, `car_tire_size`, `car_oil_type`, `car_created`, `car_datetime`) VALUES
(1, 1, '', 2, 3, 2020, 'MDX', '5J8YD4H37LL042022', 'CF90734', '2023-11-01', 'Premium', 'P265/45R20', '0W-20', '2024-04-03 16:53:45', '2024-04-03 17:09:06');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `glav1_car`
--
ALTER TABLE `glav1_car`
  ADD PRIMARY KEY (`car_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `glav1_car`
--
ALTER TABLE `glav1_car`
  MODIFY `car_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
